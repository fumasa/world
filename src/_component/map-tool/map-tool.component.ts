import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { WorldGenerator } from 'src/_generator/world.generator';
import { BiomeColor } from 'src/_utils/biome.color';
import { Point } from 'src/_model/point';
import * as d3 from 'd3';
import { WorldInfo } from 'src/_model/world.info';
import { Conversor } from 'src/_utils/conversor';
import { Vector } from 'src/_model/vector';

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

  public sessionKey = 'points';

  position = new Point(0, 0, 0);
  zoom = 1;

  step = 20;
  jump = 1.25;

  stepPoints = 0.2;

  constructor() {
  }

  // public get Points(): Promise<WorldInfo[]> {
  //   return new Promise<WorldInfo[]>((resolve) => {
  //     if (sessionStorage.getItem(this.sessionKey) === null) {
  //       this.world.GetAllPoints(this.stepPoints).then((p) => {
  //         sessionStorage.setItem(this.sessionKey, JSON.stringify(p));
  //         console.log('new points', p.length);
  //         resolve(p);
  //       });
  //     } else {
  //       resolve(JSON.parse(sessionStorage.getItem(this.sessionKey)));
  //     }
  //   });
  // }

  // public set Points(points: Promise<WorldInfo[]>) {
  //   points.then((p) => {
  //     sessionStorage.setItem(this.sessionKey, JSON.stringify(p));
  //   });
  // }

  ngAfterViewInit(): void {

    //this.change();

    //this.drawMercator();
    // this.drawMercatorAlt().then(d => {
    //   console.log('done', d);
    // });
    //this.drawGlobe();

    this.drawSvgMercator();

    console.log('done');
  }

  public toggle = true;
  public change() {
    // if (this.toggle) {
    //   this.drawMercator();
    // } else {
    //   this.drawMercatorAlt().then(d => {
    //     console.log('done', d);
    //   });
    // }
    // this.toggle = !this.toggle;
  }

  private drawSvgMercator() {

    this.context = (<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');
    const projection = d3.geoOrthographic();
    const svg = d3.select(this.svg.nativeElement);

    const width = document.body.clientWidth - 40;
    const height = (document.body.clientHeight - 40);

    this.canvas.nativeElement.width = width;
    this.canvas.nativeElement.height = height;

    svg.attr('width', width).attr('height', height);

    const image = this.context.createImageData(width, height);

    this.renderSvgMercator(width, height).then(data => {
      this.context.clearRect(0, 0, width, height);
      for (let i = 0; i < data.image.byteLength; i++) {
        image.data[i] = data.image[i];
      }
      this.context.putImageData(image, 0, 0);

      this.getSvg(data.world, width, height).then((layers) => {
        // layers.forEach(layer => {
        //   const element = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        //   let path = `M ${layer[0].start.X} ${layer[0].start.Y} `;
        //   layer.forEach(vector => {
        //     path += `L ${vector.end.X} ${vector.end.Y} `;
        //   });
        //   path += 'Z';
        //   element.setAttribute('d', path);
        //   const clockwise = layer[0].isClockwise(layer[1]);
        //   element.style.stroke = '#000';
        //   element.style.strokeWidth = '1px';

        //   this.svg.nativeElement.appendChild(element);
        // });

        // const svg = d3.select(this.svg.nativeElement);
        // svg.attr('width', width).attr('height', height);
        svg.selectAll("polygon").data(layers).enter().append("polygon").attr("points", (d) => {
          return d.map(function (d) {
            return [d.start.X, d.start.Y].join(",");
          }).join(" ");
        });
      });
    });

    // const svg = d3.select(this.svg.nativeElement);
    // const x = (long: number) => (long + 180)/(360 / width);
    // const y = (lat: number) => (lat + 90)/(180 / height);

    // svg.attr('width', width).attr('height', height);

    // const points: WorldInfo[][] = this.world.GetShorlines();
    // console.log(`points len ${points.length}`);

    // svg.selectAll("polygon").data(points).enter().append("polygon").attr("points", (d) => {
    //   return d.map(function (d) {
    //     const point = Conversor.ToMercator(d.coordinate, width, height);
    //     return [point.X, point.Y].join(",");
    //   }).join(" ");
    // });

  }

  // private drawGlobe() {
  //   this.context = (<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');
  //   const projection = d3.geoOrthographic();

  //   const width = document.body.clientWidth - 40;
  //   const height = document.body.clientHeight - 40;

  //   this.canvas.nativeElement.width = width;
  //   this.canvas.nativeElement.height = height;

  //   const mercator = this.renderMercator(this.context.createImageData(width, height));

  //   const globe = this.context.createImageData(width, height);
  //   this.renderGlobe(globe, mercator.data, projection);
  //   this.context.clearRect(0, 0, width, height);
  //   this.context.putImageData(globe, 0, 0);

  //   document.onmousemove = (event) => {
  //     var p = [event.clientX, event.clientY];
  //     const λM = d3.scaleLinear().domain([0, width]).range([-180, 180]);
  //     const φM = d3.scaleLinear().domain([0, height]).range([90, -90]);

  //     projection.rotate([λM(p[0]), φM(p[1])]);

  //     this.renderGlobe(globe, mercator.data, projection);

  //     this.context.clearRect(0, 0, width, height);
  //     this.context.putImageData(globe, 0, 0);
  //   };
  // }

  private drawMercator() {
    this.context = (<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');
    const projection = d3.geoOrthographic();

    const width = document.body.clientWidth - 40;
    const height = document.body.clientHeight - 40;

    this.canvas.nativeElement.width = width;
    this.canvas.nativeElement.height = height;

    const mercator = this.renderMercator(this.context.createImageData(width, height));

    this.context.clearRect(0, 0, width, height);
    this.context.putImageData(mercator, 0, 0);
  }

  private renderMercator(image: ImageData, onlyShoreline = false) {
    const data = image.data;
    const width = image.width;
    const height = image.height;
    let all = 0;
    let tree = 0;
    let ore = 0;
    let c = 0;

    for (var x = 0; x < width; x++) {
      for (var y = 0; y < height; y++) {
        let info = this.world.GetInformation(Conversor.FromMercator(new Point(x, y, 0), width, height), this.zoom);
        let color = BiomeColor.Get(info.Biome);

        if (onlyShoreline) {
          if (info.Shoreline) {
            color = [0, 0, 0, 255];
            c++;
          } else {
            color = [255, 255, 255, 255];
          }
        }

        let cell = (x + y * width) * 4;

        data[cell] = color[0];
        data[cell + 1] = color[1];
        data[cell + 2] = color[2];
        data[cell + 3] = color[3];

        all++;
      }
    }
    console.log(`info all:${all} tree:${tree} ore:${ore} ${width}x${height} ${c}`);

    return image;
  }

  private renderMercator2(width: number, height: number) {
    let all = 0;

    const data: Uint8ClampedArray = new Uint8ClampedArray(width * height * 4);

    for (var x = 0; x < width; x++) {
      for (var y = 0; y < height; y++) {
        let info = this.world.GetInformation(Conversor.FromMercator(new Point(x, y, 0), width, height), this.zoom);
        let color = BiomeColor.Get(info.Biome);

        let cell = (x + y * width) * 4;

        data[cell] = color[0];
        data[cell + 1] = color[1];
        data[cell + 2] = color[2];
        data[cell + 3] = color[3];

        all++;
      }
    }
    console.log(`alt info all:${all} ${width}x${height}`);

    return data;
  }

  // private async drawMercatorAlt() {
  //   this.context = (<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');
  //   const projection = d3.geoOrthographic();

  //   const width = document.body.clientWidth - 40;
  //   const height = document.body.clientHeight - 40;

  //   this.canvas.nativeElement.width = width;
  //   this.canvas.nativeElement.height = height;

  //   const mercator = await this.renderMercatorAlt(this.context.createImageData(width, height));

  //   this.context.clearRect(0, 0, width, height);
  //   this.context.putImageData(mercator, 0, 0);
  // }

  // private renderMercatorAlt(image: ImageData): Promise<ImageData> {
  //   return new Promise<ImageData>((resolve) => {
  //     const data = image.data;
  //     const width = image.width;
  //     const height = image.height;
  //     let all = 0;
  //     let tree = 0;
  //     let ore = 0;

  //     const stepX = width * this.stepPoints / 360;
  //     const stepY = height * this.stepPoints / 180;

  //     const sizeX = stepX * (360 / this.stepPoints);
  //     const sizeY = stepY * (180 / this.stepPoints);

  //     this.world.GetAllPoints(this.stepPoints).then((points) => {
  //       console.log('length', points.length, width, height, width*height, `x ${sizeX} ${stepX} ${360 / this.stepPoints}`, `y ${sizeY} ${stepY} ${180 / this.stepPoints}`);

  //       for (var x = 0; x < width; x++) {
  //         for (var y = 0; y < height; y++) {
  //           let idx = Helper.IdxMatrixToVector(new Point(x, y, 0), width, stepX, stepY);

  //           let info = points[idx];

  //           // if (x % 100 === 0)
  //           //   console.log('trouble2', x, y, idx, info);

  //           let color = BiomeColor.Get(info.Biome);

  //           // if (info.Biome === WorldBiome.beach) {
  //           //   color = [0, 0, 0, 255];
  //           // } else {
  //           //   color = [255, 255, 255, 255];
  //           // }

  //           let cell = (x + y * image.width) * 4;

  //           data[cell] = color[0];
  //           data[cell + 1] = color[1];
  //           data[cell + 2] = color[2];
  //           data[cell + 3] = color[3];

  //           all++;
  //         }
  //       }

  //       console.log(`info all:${all} tree:${tree} ore:${ore} ${width}x${height}`);
  //       resolve(image);
  //     });
  //   });
  // }

  private renderSvgMercator(width: number, height: number, onlyShoreline = false) {
    return new Promise<{ world: WorldInfo[], image: Uint8ClampedArray }>((resolve) => {
      let all = 0;
      let tree = 0;
      let ore = 0;
      let c = 0;
      const array: Uint8ClampedArray = new Uint8ClampedArray(width * height * 4);

      this.world.GetAllMercatorPoints(width, height, (info) => {
        let color = BiomeColor.Get(info.Biome);

        if (onlyShoreline) {
          if (info.Shoreline) {
            color = [0, 0, 0, 255];
            c++;
          } else {
            color = [255, 255, 255, 255];
          }
        }

        let mercatorPoint = Conversor.ToMercator(info.coordinate, width, height);
        let cell = Conversor.ToIdxWidth(mercatorPoint, width) * 4;

        array[cell] = color[0];
        array[cell + 1] = color[1];
        array[cell + 2] = color[2];
        array[cell + 3] = color[3];

        all++;

      }).then((points) => {
        console.log(`info svg all:${all} tree:${tree} ore:${ore} ${width}x${height} ${c}`);
        resolve({ world: points, image: array });
      });
    });
  }

  // private renderGlobe(image: ImageData, mercatorData: Uint8ClampedArray, projection = d3.geoOrthographic()) {
  //   const width = image.width;
  //   const height = image.height;
  //   const data = image.data;

  //   for (var y = 0, i = -1; y < height; ++y) {
  //     for (var x = 0; x < width; ++x) {
  //       var p = projection.invert([x, y]), λ = p[0], φ = p[1];
  //       if (λ > 180 || λ < -180 || φ > 90 || φ < -90) {
  //         i += 4;
  //         continue;
  //       }
  //       var q = ((90 - φ) / 180 * height | 0) * width + ((180 + λ) / 360 * width | 0) << 2;
  //       data[++i] = mercatorData[q];
  //       data[++i] = mercatorData[++q];
  //       data[++i] = mercatorData[++q];
  //       data[++i] = 255;
  //     }
  //   }

  //   return image;
  // }

  private getSvg(world: WorldInfo[], width: number, height: number): Promise<Vector[][]> {
    return new Promise<Vector[][]>(resolve => {
      console.log('world', world.length, new Date());
      const allVectors: Vector[] = [];
      for (var x = 0; x < width - 1; x++) {
        for (var y = 0; y < height - 1; y++) {
          const no = new Point(x, y, 0);
          if (world[Conversor.ToIdxWidth(no, width)].topology < 0.5) continue;
          const ne = new Point((1 + x), y, 0);
          if (world[Conversor.ToIdxWidth(ne, width)].topology < 0.5) continue;
          const so = new Point(x, (1 + y), 0);
          if (world[Conversor.ToIdxWidth(so, width)].topology < 0.5) continue;
          const se = new Point((1 + x), (1 + y), 0);
          if (world[Conversor.ToIdxWidth(se, width)].topology < 0.5) continue;

          allVectors.push(new Vector(no, ne));
          allVectors.push(new Vector(ne, se));
          allVectors.push(new Vector(se, so));
          allVectors.push(new Vector(so, no));
        }
      }
      console.log('allVectors', allVectors.length, new Date());
      let copyAllVectors = [...allVectors];
      const condensedVectors: Vector[] = [];
      while (copyAllVectors.length > 0) {
        const vector = copyAllVectors.pop();
        if (!vector.inverted.containsIn(copyAllVectors)) {
          condensedVectors.push(vector);
        } else {
          copyAllVectors = copyAllVectors.filter((v) => !v.equals(vector.inverted));
        }
      }
      console.log('condensedVectors', condensedVectors.length, new Date());
      let copyCondensedVectors = [...condensedVectors];
      const layeredPaths: Vector[][] = [];
      while (copyCondensedVectors.length > 0) {
        const layer: Vector[] = [];
        const startVector = copyCondensedVectors.pop();
        layer.push(startVector.copy);
        let runner = startVector.copy;
        while (!runner.end.equals(startVector.start)) {
          const vectorIdx = copyCondensedVectors.findIndex((v) => runner.end.equals(v.start));
          runner = copyCondensedVectors.splice(vectorIdx, 1)[0];
          layer.push(runner.copy);
        }
        layeredPaths.push(layer);
      }
      console.log('layeredPaths', layeredPaths.length, new Date(), layeredPaths);
      const shrunkenLayeredPaths: Vector[][] = [];
      layeredPaths.forEach((layer) => {
        const shrunkenLayer: Vector[] = [];
        let runner: Vector = layer[0].copy;
        for (let i = 1; i < layer.length; i++) {
          if (runner.isCollinear(layer[i].end)) {
            runner = new Vector(runner.start, layer[i].end);
          } else {
            shrunkenLayer.push(runner.copy);
            runner = layer[i].copy;
          }
        }
        shrunkenLayer.push(runner.copy);
        shrunkenLayeredPaths.push(shrunkenLayer);
      });
      console.log('shrunkenLayeredPaths', shrunkenLayeredPaths.length, new Date(), shrunkenLayeredPaths);
      resolve(shrunkenLayeredPaths);
    });
  }

  // private getShorelines(width: number, height: number): WorldInfo[][] {
  //   const points: WorldInfo[][] = [];

  //   for (var x = 0; x < width; x++) {
  //     for (var y = 0; y < height; y++) {
  //       let info = this.world.GetInformation(Conversor.FromMercator(new Point(x, y, 0), width, height), this.zoom);
  //       if (info.Shoreline) {
  //         if (points[x] === undefined) points[x] = [];
  //         points[x][y] = info;
  //       }
  //     }
  //   }

  //   const all = WorldInfo.AllInOne(points);

  //   const polygonPoints: WorldInfo[][] = [];

  //   // while (points.length > 0) {
  //   const polygon: WorldInfo[] = [];
  //   let current: WorldInfo = null;

  //   const first: WorldInfo = all[0];

  //   console.log('first', first);
  //   WorldInfo.RemoveOne(points, first, width, height);
  //   polygon.push(first);

  //   while (first !== current) {
  //     const actualPoint = Conversor.ToMercator((current ?? first).coordinate, width, height);
  //     const allnear = WorldInfo.GetAllNear(all, actualPoint, width, height);
  //     console.log('all near', allnear);

  //     // const nearNewPoints = allnear.filter((n: WorldInfo) => polygon.includes((p: WorldInfo) => (p.coordinate.longitude === n.coordinate.longitude && p.coordinate.latitude === n.coordinate.latitude)));

  //     const nearNewPoints = [];
  //     allnear.forEach((n) => {
  //       let exists = false;
  //       polygon.forEach((p) => {
  //         if (p.coordinate.longitude === n.coordinate.longitude && p.coordinate.latitude === n.coordinate.latitude) {
  //           exists = true;
  //           return;
  //         }
  //       });
  //       if (!exists) {
  //         nearNewPoints.push(n);
  //       }
  //     });


  //     const nearNewPoint = nearNewPoints.sort((a: WorldInfo, b: WorldInfo) => {
  //       return (Helper.Pitagoras(Conversor.ToMercator(a.coordinate, width, height), actualPoint) <= Helper.Pitagoras(Conversor.ToMercator(b.coordinate, width, height), actualPoint)) ? 1 : -1;
  //     })[0];

  //     console.log('near', nearNewPoints, nearNewPoint);
  //     WorldInfo.RemoveOne(points, nearNewPoint, width, height);
  //     polygon.push(nearNewPoint);
  //     current = nearNewPoint;

  //   }
  //   console.log('polygon', polygon);
  //   polygonPoints.push(polygon);
  //   // }

  //   return polygonPoints;
  // }
}