import { WorldInfo } from 'src/_model/world.info';
import { Point } from 'src/_model/point';
import { Perlin } from '../_utils/perlin.noise';
import { Coordinate } from 'src/_model/coordinate';
import { Conversor } from 'src/_utils/conversor';
import { WorldBiome } from 'src/_enum/world.biome';
import { Helper } from 'src/_utils/helper';

export class WorldGenerator {
  private noise = { raw: [], topology: [], trees: [], ores: [] };
  constructor(public seed = 8, useDefault = true, public radius = 5000) {
    this.prepareSeed(seed);
    this.noise.raw = useDefault ? Perlin.DefaultP : Perlin.RandomP;
    this.noise.topology = this.generateNoise(this.noise.raw, seed);
    this.noise.trees = this.generateNoise(this.generateNewNoise(), seed);
    this.noise.ores = this.generateNoise(this.generateNewNoise(2), seed);
  }

  private prepareSeed(seed) {
    if (seed > 0 && seed < 1) {
      seed *= 65536;
    }
    seed = Math.floor(seed);
    if (seed < 256) {
      seed |= seed << 8;
    }
  }

  private generateNoise(array, seed) {
    const data = [];
    for (let i = 0; i < 256; i++) {
      if (i & 1) {
        data[i] = data[i + 256] = array[i] ^ (seed & 255);
      }
      else {
        data[i] = data[i + 256] = array[i] ^ ((seed >> 8) & 255);
      }
    }
    return data;
  }

  private generateNewNoise(jump = 1) {
    const data: [] = JSON.parse(JSON.stringify(this.noise.raw));
    const noise = [];
    while (data.length > 0) {
      if (data.length <= jump)
        noise.push(data.pop());
      else
        noise.push(data.splice(jump, 1));
    }
    return noise;
  }

  private cicle_gradient(a, b, x, y, r) {
    var dist_points = (a - x) * (a - x) + (b - y) * (b - y);
    r *= r;
    return dist_points < r ? (((dist_points * 100 / r) - 100) * -1) / 100 : 0;
  }

  public GetInformation(coordinate: Coordinate, zoom = 1, onlyTopology: boolean = false) {
    if (!(coordinate.radius != null)) {
      coordinate.radius = zoom;
    }
    var point = Conversor.ToCardian(coordinate);
    const factor = zoom;//this.radius * zoom;
    const topology = Math.trunc((Perlin.Noise(point, factor, this.noise.topology, 0.68) + 0.5) * 100) / 100;
    let trees = null;
    let ores = null;
    if (!onlyTopology) {
      trees = Math.trunc((Perlin.Noise(point, factor * 100, this.noise.trees, 0.68) + 0.5) * 100) / 100;
      ores = Math.trunc((Perlin.Noise(point, factor * 100, this.noise.ores, 0.68) + 0.5) * 100) / 100;
    }
    return new WorldInfo(topology, trees, ores, coordinate, point);
  }

  public GetAllMercatorPoints(width: number, height: number, inspector: (a: WorldInfo)=> void = null): Promise<WorldInfo[]> {
    return new Promise<WorldInfo[]>((resolve) => {
      const ini = new Date();
      let count = 0;
      const ret: WorldInfo[] = [];
      for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
          const info = this.GetInformation(Conversor.FromMercator(new Point(x, y, 0), width, height), 1);
          ret.push(info);
          if (inspector !== null) inspector(info);
          count++;
        }
      }
      const end = new Date();
      console.log(`duration ${Helper.TruncDecimals(end.getTime() / 1000 - ini.getTime() / 1000, 3)}s with count: ${count}`);
      resolve(ret);
    });
  }

  public GetAllPoints(step = 0.0001): Promise<WorldInfo[]> {
    return new Promise<WorldInfo[]>((resolve) => {
      const ini = new Date();
      let count = 0;
      const decPl = Helper.DecimalPlaces(step);
      console.log('decimal', decPl, step);
      const ret: WorldInfo[] = [];
      for (let longitude = -90; longitude <= 90; longitude += step) {
        for (let latitude = -180; latitude <= 180; latitude += step) {
          ret.push(this.GetInformation(new Coordinate(Helper.TruncDecimals(longitude, decPl), Helper.TruncDecimals(latitude, decPl)), 1, true));
          count++;
        }
      }
      const end = new Date();
      console.log(`duration ${Helper.TruncDecimals(end.getTime() / 1000 - ini.getTime() / 1000, 3)}s with count: ${count}`);
      resolve(ret);
    });
  }

  public GetShorlines(step = 0.0001): WorldInfo[][] {
    const ret: WorldInfo[][] = [];
    const coordinate = new Coordinate(0, 0);
    const polygon: Coordinate[] = this.probePolygon(coordinate, step);
    ret.push(polygon.map((p) => this.GetInformation(p)));
    return ret;
  }

  private probePolygon(coordinate = new Coordinate(0, 0), step = 0.0001): Coordinate[] {
    const polygon: Coordinate[] = [];
    let points: Coordinate[] = [];
    do {
      coordinate = coordinate.addLongitude(step);
      points = this.probeNearShorepoints(coordinate, step);
    } while (points === [])

    while (points.length !== 0) {
      const newPoints = [];
      points.forEach((point: Coordinate) => {
        // const point = points[0];
        polygon.push(point);
        console.log('point', point, polygon.length);
        newPoints.push(...this.probeNearShorepoints(point, step));
      });
      const beforeCount = newPoints.length;
      points = newPoints.filter((newPoint: Coordinate) => polygon.find((p: Coordinate) => p.latitude === newPoint.latitude && p.longitude === newPoint.longitude) === undefined);
      const afterCount = points.length;
      if (afterCount === beforeCount) {
        console.log('problema', afterCount, beforeCount);
      } else if (afterCount > beforeCount) {
        console.log('mais problema ainda', afterCount, beforeCount);
      } else {
        console.log('ok', afterCount, beforeCount);
      }
    }

    console.log('finito', polygon);

    return polygon;
  }

  private probeNearShorepoints(coordinate: Coordinate, step = 0.0001): Coordinate[] {
    const points: Coordinate[] = [];
    const east = coordinate.addLongitude(step);
    const eastInfo = this.GetInformation(east, 1, true);
    if (eastInfo.Biome === WorldBiome.shoreline) {
      // console.log('east', east, eastInfo);
      points.push(east);
    }
    const south = coordinate.addLatitude(step);
    const southInfo = this.GetInformation(south, 1, true);
    if (southInfo.Biome === WorldBiome.shoreline) {
      // console.log('south', south, southInfo);
      points.push(south);
    }
    const west = coordinate.addLongitude(-step);
    const westInfo = this.GetInformation(west, 1, true);
    if (westInfo.Biome === WorldBiome.shoreline) {
      // console.log('west', west, westInfo);
      points.push(west);
    }
    const north = coordinate.addLatitude(-step);
    const northInfo = this.GetInformation(north, 1, true);
    if (northInfo.Biome === WorldBiome.shoreline) {
      // console.log('north', north, northInfo);
      points.push(north);
    }
    return points;
  }
}