import { WorldBiome } from 'src/_enum/world.biome';
import { Point } from 'src/_model/point';
import { Coordinate } from 'src/_model/coordinate';
import { Conversor } from 'src/_utils/conversor';

export class WorldInfo {
  public constructor(public topology: number, public trees: number, public ores: number, public coordinate: Coordinate, public point: Point) { }

  public get Biome(): WorldBiome {
    if (this.topology < 0.35) {
      return WorldBiome.deepWater;
    } else if (this.topology < 0.50) {
      return WorldBiome.swallowWater;
    } else if (this.topology === 0.50) {
      return WorldBiome.shoreline;
    } else if (this.topology < 0.53) {
      return WorldBiome.beach;
    } else if (this.topology < 0.56) {
      return WorldBiome.sandy;
    } else if (this.topology < 0.62) {
      return WorldBiome.grass;
    } else if (this.topology < 0.70) {
      return WorldBiome.woods;
    } else if (this.topology < 0.75) {
      return WorldBiome.forest;
    } else if (this.topology < 0.80) {
      return WorldBiome.mountain;
    } else if (this.topology < 0.90) {
      return WorldBiome.snow;
    }
  };

  public get Shoreline(): boolean {
    return this.topology === 0.50;
  }

  public get Tree(): boolean {
    return (this.trees < 0.20) && this.Biome == WorldBiome.grass;
  }

  public get Ore(): boolean {
    return (this.ores < 0.25);
  }

  public get LatitudeLine(): boolean {
    return (Conversor.ToDegrees(this.coordinate.latitude) % 10 === 0);
  }

  public get LongitudeLine(): boolean {
    return (Conversor.ToDegrees(this.coordinate.longitude) % 10 === 0);
  }

  public static AllInOne(data: any[][]): any[] {
    const ret = [];
    data.forEach((inner) => inner.forEach(d => {
      if (d !== null) {
        ret.push(d);
      }
    }))
    return ret;
  }

  public static RemoveOne(points: WorldInfo[][], item: WorldInfo, width: number, height: number): void {
    const itemPoint = Conversor.ToMercator(item.coordinate, width, height);
    points[itemPoint.X].splice(itemPoint.Y, 1);
  }

  public static GetAllNear(points: WorldInfo[], point: Point, width: number, height: number): WorldInfo[] {
    const variator = 2;
    return points.filter((p: WorldInfo) => {
      const itemPoint = Conversor.ToMercator(p.coordinate, width, height);
      return (itemPoint.X >= point.X - variator && itemPoint.X <= point.X + variator) &&
        (itemPoint.Y >= point.Y - variator && itemPoint.Y <= point.Y + variator) &&
        (itemPoint.Z >= point.Z - variator && itemPoint.Z <= point.Z + variator);
    });
  }
}