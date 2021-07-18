import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { WorldGenerator } from 'src/_generator/world.generator';
import { BiomeColor } from 'src/_utils/biome.color';
import * as d3 from 'd3';
import { WorldInfo } from 'src/_model/world.info';
import { Conversor } from 'src/_utils/conversor';
import { Helper } from 'src/_utils/helper';

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

    this.world.GetAllMercatorPoints(width, height).then((points) => Helper.BuildImage(this.context, points, width, height));

    this.world.getLayer(width, height).then((layer) => Helper.CreatePathElement(this.svg, layer.AsSvgPath()));

    this.world.getLongitudeLines(width, height).then((layer) => Helper.CreatePathElement(this.svg, layer.AsSvgPath(false), { fillOpacity: '.1', stroke: '#000', strokeWidth: '.5px' }));
    this.world.getLatitudeLines(width, height, false).then((layer) => Helper.CreatePathElement(this.svg, layer.AsSvgPath(false), { fillOpacity: '.1', stroke: '#000', strokeWidth: '.5px' }));
    this.world.getEquatorLines(width, height).then((layer) => Helper.CreatePathElement(this.svg, layer.AsSvgPath(false), { fillOpacity: '.1', stroke: '#F00', strokeWidth: '1px' }));
    this.world.getTropicsAndCirclesLines(width, height).then((layer) => Helper.CreatePathElement(this.svg, layer.AsSvgPath(false), { fillOpacity: '.1', stroke: '#00F', strokeWidth: '1px' }));

    this.world.getSunShadown(width, height).then((layer) => Helper.CreatePathElement(this.svg, layer.AsSvgPath(), { fillOpacity: '.8', stroke: '#000', strokeWidth: '0px' }));
  }
}