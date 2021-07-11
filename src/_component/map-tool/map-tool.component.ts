import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { WorldGenerator } from 'src/_generator/world.generator';
import { BiomeColor } from 'src/_utils/biome.color';
import * as d3 from 'd3';
import { WorldInfo } from 'src/_model/world.info';
import { Conversor } from 'src/_utils/conversor';

interface Datum {
  id: string;
}

@Component({
  selector: 'map-tool',
  templateUrl: './map-tool.component.html',
  styleUrls: ['./map-tool.component.scss']
})
export class MapToolComponent implements AfterViewInit {
  world: WorldGenerator = new WorldGenerator();
  @ViewChild('canvas', { static: false }) canvas: ElementRef;
  @ViewChild('svg', { static: false }) svg: ElementRef;
  public context: CanvasRenderingContext2D;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.drawSvgMercator();
  }

  private drawSvgMercator() {

    this.context = (<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');
    const svg = d3.select(this.svg.nativeElement);

    const width = document.body.clientWidth - 40;
    const height = (document.body.clientHeight - 40);

    this.canvas.nativeElement.width = width;
    this.canvas.nativeElement.height = height;

    svg.attr('width', width).attr('height', height);

    const image = this.context.createImageData(width, height);

    this.renderMercator(width, height).then(data => {
      this.context.clearRect(0, 0, width, height);
      for (let i = 0; i < data.image.byteLength; i++) {
        image.data[i] = data.image[i];
      }
      this.context.putImageData(image, 0, 0);

      this.world.getVectors(width, height,
        (info: WorldInfo) => {
          return info.topology < 0.5;
        }).then((layer) => {
          const element = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          element.setAttribute('d', layer.AsSvgPath());
          element.style.stroke = '#000';
          element.style.fillOpacity = '.5';
          element.style.strokeWidth = '1px';

          this.svg.nativeElement.appendChild(element);
        });
    });
  }

  private renderMercator(width: number, height: number) {
    return new Promise<{ image: Uint8ClampedArray }>((resolve) => {
      this.world.GetAllMercatorPoints(width, height).then((points) => {
        let all = 0;
        const array: Uint8ClampedArray = new Uint8ClampedArray(width * height * 4);
        points.forEach((info) => {
          let color = BiomeColor.Get(info.Biome);

          let mercatorPoint = Conversor.ToMercator(info.coordinate, width, height);
          let cell = Conversor.ToIdxWidth(mercatorPoint, width) * 4;
  
          array[cell] = color[0];
          array[cell + 1] = color[1];
          array[cell + 2] = color[2];
          array[cell + 3] = color[3];

          all++;
        });
        console.log(`info svg all:${all} ${width}x${height}`);
        resolve({ image: array });
      });
    });
  }
}