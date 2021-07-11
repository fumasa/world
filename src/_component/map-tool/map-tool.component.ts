import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { WorldGenerator } from 'src/_generator/world.generator';
import { BiomeColor } from 'src/_utils/biome.color';
import * as d3 from 'd3';
import { WorldInfo } from 'src/_model/world.info';
import { Conversor } from 'src/_utils/conversor';

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
    this.drawMercator();
  }

  private drawMercator() {
    this.context = (<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');
    const svg = d3.select(this.svg.nativeElement);

    const width = document.body.clientWidth - 40;
    const height = (document.body.clientHeight - 40);

    this.canvas.nativeElement.width = width;
    this.canvas.nativeElement.height = height;

    svg.attr('width', width).attr('height', height);

    const image = this.context.createImageData(width, height);
    const data = image.data;

    this.world.GetAllMercatorPoints(width, height).then((points) => {
      console.log(`mercator: ${points.length} ${width}x${height}`);
      points.forEach((info) => {
        let color = BiomeColor.Get(info.Biome);

        let mercatorPoint = Conversor.ToMercator(info.coordinate, width, height);
        let cell = Conversor.ToIdxWidth(mercatorPoint, width) * 4;

        data[cell] = color[0];
        data[cell + 1] = color[1];
        data[cell + 2] = color[2];
        data[cell + 3] = color[3];
      });
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
}