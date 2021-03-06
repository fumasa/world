import { ElementRef } from '@angular/core';
import { Coordinate } from 'src/_model/coordinate';
import { Point } from 'src/_model/point';
import { WorldInfo } from 'src/_model/world.info';
import { BiomeColor } from './biome.color';
import { Conversor } from './conversor';
import * as moment from 'moment';
import SkyPoint from 'src/_model/sky-point';

export class Helper {
  public static TruncDecimals(num: number, precision = 4): number {
    return Math.trunc(Math.pow(10, precision) * num) / Math.pow(10, precision);
  }

  public static CloneAny(data: any): any {
    return JSON.parse(JSON.stringify(data));
  }

  public static Pitagoras(a: Point, b: Point): number {
    return Math.sqrt(Math.pow(a.X - b.X, 2) + Math.pow(a.Y - b.Y, 2) + Math.pow(a.Z - b.Z, 2));
  }

  public static DecimalPlaces(n: number) {
    let a;
    return (a = (n.toString().charAt(0) == '-' ? n - 1 : n + 1).toString().replace(/^-?[0-9]+\.?([0-9]+)$/, '$1').length) >= 1 ? a : 0;
  }

  public static IdxMatrixToVector(point: Point, width: number, stepX = 1, stepY = 1): number {
    return Math.trunc((point.Y) * width + (point.X));
  }

  public static IdxVectorToMatrix(idx: number, width: number, stepX = 1, stepY = 1): Point {
    return new Point((idx % width), (idx / width), 0);
  }

  public static CreatePathElement(svg: ElementRef<any>, path: string, style: { fillOpacity?: string, stroke?: string, strokeWidth?: string } = { fillOpacity: '.5', stroke: '#000', strokeWidth: '1px' }) {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    element.setAttribute('d', path);
    element.style.stroke = style.stroke;
    element.style.fillOpacity = style.fillOpacity;
    element.style.strokeWidth = style.strokeWidth;
    svg.nativeElement.appendChild(element);
  }

  public static BuildImage(context: CanvasRenderingContext2D, points: WorldInfo[], width: number, height: number) {
    const image = context.createImageData(width, height);
    const data = image.data;
    points.forEach((info) => {
      const color = BiomeColor.Get(info.Biome);
      const mercatorPoint = Conversor.ToMercator(info.coordinate, width, height);
      const cell = Conversor.ToIdxWidth(mercatorPoint, width) * 4;
      data[cell] = color[0];
      data[cell + 1] = color[1];
      data[cell + 2] = color[2];
      data[cell + 3] = color[3];
    });
    context.putImageData(image, 0, 0);
  }

  public static Matrix(width = 200, height = 100, action: (x: number, y: number) => void = () => null, initx = 0, inity = 0, increment = 1) {
    const ini = new Date();
    let count = 0;
    for (let y = inity; y < height; y += increment) {
      for (let x = initx; x < width; y += increment) {
        if (action !== null) action(x, y);
      }
    }
    const end = new Date();
    console.log(`duration [Matrix] ${initx > 0 || inity > 0 ? `${initx}:${inity}` : ''} ${width}:${height} ${increment > 1 ? increment : ''} ${Helper.TruncDecimals(end.getTime() / 1000 - ini.getTime() / 1000, 3)}s with count: ${count}`);
  }
}