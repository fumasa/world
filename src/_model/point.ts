import { Vector } from "./vector";

export class Point {
  constructor(public X: number, public Y: number, public Z: number) { }

  public equals(point: Point): boolean {
    return (this.X === point.X && this.Y === point.Y && this.Z === point.Z);
  }

  public inside(vectors: Vector[]) {
    let inside = false;
    for (let i = 0, j = vectors.length - 1; i < vectors.length; j = i++) {
      const xi = vectors[i].start.X, yi = vectors[i].start.Y;
      const xj = vectors[j].end.X, yj = vectors[j].end.Y;

      const intersect = ((yi > this.Y) != (yj > this.Y)) && (this.X < (xj - xi) * (this.Y - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
    }
    return inside;
  }
}