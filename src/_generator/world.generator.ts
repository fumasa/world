import { WorldInfo } from 'src/_model/world.info';
import { Point } from 'src/_model/point';
import { Perlin } from '../_utils/perlin.noise';
import { Coordinate } from 'src/_model/coordinate';
import { Conversor } from 'src/_utils/conversor';
import { Helper } from 'src/_utils/helper';
import { Vector } from 'src/_model/vector';
import { Layer } from 'src/_model/layer';
import { Progress } from 'src/_utils/progress';

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

  public GetAllMercatorPoints(width: number, height: number): Promise<WorldInfo[]> {
    return new Promise<WorldInfo[]>((resolve) => {
      const progress = new Progress('GetAllMercatorPoints', width * height, true);
      const ret: WorldInfo[] = [];
      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          const info = this.GetInformation(Conversor.FromMercator(new Point(x, y, 0), width, height), 1);
          ret.push(info);
        }
      }
      progress.stop();
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

  public getLayer(width: number, height: number, checkPoint: (point: WorldInfo) => boolean = (p) => false): Promise<Layer> {
    const progress = new Progress('getLayer', width * height);
    return new Promise<Layer>(resolve => {
      progress.start();
      const allVectors: Vector[] = [];
      for (var x = 0; x < width - 1; x++) {
        for (var y = 0; y < height - 1; y++) {
          progress.check();
          const no = new Point(x, y, 0);
          if (checkPoint(this.GetInformation(Conversor.FromMercator(no, width, height), 1))) continue;
          const ne = new Point((1 + x), y, 0);
          if (checkPoint(this.GetInformation(Conversor.FromMercator(ne, width, height), 1))) continue;
          const so = new Point(x, (1 + y), 0);
          if (checkPoint(this.GetInformation(Conversor.FromMercator(so, width, height), 1))) continue;
          const se = new Point((1 + x), (1 + y), 0);
          if (checkPoint(this.GetInformation(Conversor.FromMercator(se, width, height), 1))) continue;

          const vectors = [new Vector(no, ne), new Vector(ne, se), new Vector(se, so), new Vector(so, no)];

          vectors.forEach((vector) => {
            Vector.AddInIfInvertNotExistsAndRemoveItFrom(allVectors, vector);
          });
        }
      }
      const layer = Layer.Transform(allVectors);
      progress.stop();
      resolve(layer);
    });
  }

  public getLongitudeLines(width: number, height: number, rotationSpeedInHours: number = 24): Promise<Layer> {
    const progress = new Progress('getLongitudeLines', width * height);
    return new Promise<Layer>(resolve => {
      progress.start();
      const allLayers: Layer[] = [];
      for (var x = 0; x <= width; x++) {
        const layer: Vector[] = [];
        let lastPoint: Point = new Point(x, 0, 0);
        for (var y = 1; y <= height; y++) {
          const mercatorPoint = new Point(x, y, 0);
          const coordinate = Conversor.FromMercator(mercatorPoint, width, height);

          if (coordinate.longitude % rotationSpeedInHours === 0) {
            layer.push(new Vector(lastPoint.copy(), mercatorPoint.copy()));
            lastPoint = mercatorPoint.copy();
          }
        }

        allLayers.push(new Layer([...layer]));
      }
      const layer = new Layer([], [...allLayers]);
      progress.stop();
      resolve(layer);
    });
  }

  public getEquatorLines(width: number, height: number): Promise<Layer> {
    const progress = new Progress('getEquatorLines', width * height);
    return new Promise<Layer>(resolve => {
      progress.start();
      const vectors: Vector[] = [];
      let lastPoint: Point = new Point(0, height / 2, 0);
      for (var x = 1; x <= width; x++) {
        const mercatorPoint = new Point(x, height / 2, 0);

        vectors.push(new Vector(lastPoint.copy(), mercatorPoint.copy()));
        lastPoint = mercatorPoint.copy();
      }

      const layer = new Layer([...vectors]);
      progress.stop();
      resolve(layer);
    });
  }

  public getLatitudeLines(width: number, height: number, showEquator: boolean = true): Promise<Layer> {
    const progress = new Progress('getLatitudeLines', width * height);
    return new Promise<Layer>(resolve => {
      progress.start();
      const allLayers: Layer[] = [];
      for (var y = 0; y <= height; y++) {
        const layer: Vector[] = [];
        let lastPoint: Point = new Point(0, y, 0);
        for (var x = 1; x <= width; x++) {
          const mercatorPoint = new Point(x, y, 0);
          const coordinate = Conversor.FromMercator(mercatorPoint, width, height);

          if (coordinate.latitude % 12 === 0) {
            if ((coordinate.latitude === 0 && showEquator) || coordinate.latitude !== 0) {
              layer.push(new Vector(lastPoint.copy(), mercatorPoint.copy()));
              lastPoint = mercatorPoint.copy();
            }
          }
        }

        allLayers.push(new Layer([...layer]));
      }
      const layer = new Layer([], [...allLayers]);
      progress.stop();
      resolve(layer);
    });
  }

  public getTropicsAndCirclesLines(width: number, height: number, inclinationInDegres: number = 23.43): Promise<Layer> {
    const progress = new Progress('getTropicsAndCirclesLines', width * height);
    const radius = Math.round(width / (2 * Math.PI));
    return new Promise<Layer>(resolve => {
      progress.start();
      const allLayers: Layer[] = [];
      const tropicsAndCircles = [inclinationInDegres - 90, -1 * inclinationInDegres, inclinationInDegres, 90 - inclinationInDegres];
      for (var y = 0; y < tropicsAndCircles.length; y++) {
        const coordinate = new Coordinate(tropicsAndCircles[y], x, radius);
        const actualY = Conversor.ToMercator(coordinate, width, height).Y;
        const layer: Vector[] = [];
        let lastPoint: Point = new Point(0, actualY, 0);
        for (var x = 1; x < width; x++) {
          const mercatorPoint = new Point(x, actualY, 0);

          layer.push(new Vector(lastPoint.copy(), mercatorPoint.copy()));
          lastPoint = mercatorPoint.copy();
        }

        allLayers.push(new Layer([...layer]));
      }
      const layer = new Layer([], [...allLayers]);
      progress.stop();
      resolve(layer);
    });
  }
}