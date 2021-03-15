import { Point } from 'src/_model/point';

export class Helper {
  public static TruncDecimals(num: number, precision = 4): number {
    return Math.trunc(Math.pow(10, precision) * num)/Math.pow(10, precision);
  }

  public static CloneAny(data: any): any {
    return JSON.parse(JSON.stringify(data));
  }

  public static Pitagoras(a: Point, b: Point): number {
    return Math.sqrt(Math.pow(a.X - b.X, 2) + Math.pow(a.Y - b.Y, 2) + Math.pow(a.Z - b.Z, 2));
  }

  public static DecimalPlaces(n: number) {
    let a;
    return (a=(n.toString().charAt(0)=='-'?n-1:n+1).toString().replace(/^-?[0-9]+\.?([0-9]+)$/,'$1').length)>=1?a:0;
  }

  public static IdxMatrixToVector(point: Point, width: number, stepX = 1, stepY = 1): number {
    return Math.trunc((point.Y) * width + (point.X));
  }

  public static IdxVectorToMatrix(idx: number, width: number, stepX = 1, stepY = 1): Point {
    return new Point((idx % width), (idx / width), 0);
  }
}