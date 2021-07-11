(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/_component/map-tool/map-tool.component.ts":
/*!*******************************************************!*\
  !*** ./src/_component/map-tool/map-tool.component.ts ***!
  \*******************************************************/
/*! exports provided: MapToolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapToolComponent", function() { return MapToolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_generator_world_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_generator/world.generator */ "./src/_generator/world.generator.ts");
/* harmony import */ var src_utils_biome_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_utils/biome.color */ "./src/_utils/biome.color.ts");
/* harmony import */ var src_model_point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_model/point */ "./src/_model/point.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var src_utils_conversor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/_utils/conversor */ "./src/_utils/conversor.ts");







const _c0 = ["canvas"];
const _c1 = ["svg"];
class MapToolComponent {
    constructor() {
        this.world = new src_generator_world_generator__WEBPACK_IMPORTED_MODULE_1__["WorldGenerator"]();
        this.sessionKey = 'points';
        this.position = new src_model_point__WEBPACK_IMPORTED_MODULE_3__["Point"](0, 0, 0);
        this.zoom = 1;
        this.step = 20;
        this.jump = 1.25;
        this.stepPoints = 0.2;
        this.toggle = true;
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
    ngAfterViewInit() {
        //this.change();
        //this.drawMercator();
        // this.drawMercatorAlt().then(d => {
        //   console.log('done', d);
        // });
        //this.drawGlobe();
        this.drawSvgMercator();
        console.log('done');
    }
    change() {
        // if (this.toggle) {
        //   this.drawMercator();
        // } else {
        //   this.drawMercatorAlt().then(d => {
        //     console.log('done', d);
        //   });
        // }
        // this.toggle = !this.toggle;
    }
    drawSvgMercator() {
        this.context = this.canvas.nativeElement.getContext('2d');
        const projection = d3__WEBPACK_IMPORTED_MODULE_4__["geoOrthographic"]();
        const svg = d3__WEBPACK_IMPORTED_MODULE_4__["select"](this.svg.nativeElement);
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
            this.world.getVectors(width, height).then((layer) => {
                const element = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                element.setAttribute('d', layer.AsSvgPath());
                element.style.stroke = '#000';
                element.style.fillOpacity = '.5';
                element.style.strokeWidth = '1px';
                this.svg.nativeElement.appendChild(element);
            });
        });
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
    drawMercator() {
        this.context = this.canvas.nativeElement.getContext('2d');
        const projection = d3__WEBPACK_IMPORTED_MODULE_4__["geoOrthographic"]();
        const width = document.body.clientWidth - 40;
        const height = document.body.clientHeight - 40;
        this.canvas.nativeElement.width = width;
        this.canvas.nativeElement.height = height;
        const mercator = this.renderMercator(this.context.createImageData(width, height));
        this.context.clearRect(0, 0, width, height);
        this.context.putImageData(mercator, 0, 0);
    }
    renderMercator(image, onlyShoreline = false) {
        const data = image.data;
        const width = image.width;
        const height = image.height;
        let all = 0;
        let tree = 0;
        let ore = 0;
        let c = 0;
        for (var x = 0; x < width; x++) {
            for (var y = 0; y < height; y++) {
                let info = this.world.GetInformation(src_utils_conversor__WEBPACK_IMPORTED_MODULE_5__["Conversor"].FromMercator(new src_model_point__WEBPACK_IMPORTED_MODULE_3__["Point"](x, y, 0), width, height), this.zoom);
                let color = src_utils_biome_color__WEBPACK_IMPORTED_MODULE_2__["BiomeColor"].Get(info.Biome);
                if (onlyShoreline) {
                    if (info.Shoreline) {
                        color = [0, 0, 0, 255];
                        c++;
                    }
                    else {
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
    renderMercator2(width, height) {
        let all = 0;
        const data = new Uint8ClampedArray(width * height * 4);
        for (var x = 0; x < width; x++) {
            for (var y = 0; y < height; y++) {
                let info = this.world.GetInformation(src_utils_conversor__WEBPACK_IMPORTED_MODULE_5__["Conversor"].FromMercator(new src_model_point__WEBPACK_IMPORTED_MODULE_3__["Point"](x, y, 0), width, height), this.zoom);
                let color = src_utils_biome_color__WEBPACK_IMPORTED_MODULE_2__["BiomeColor"].Get(info.Biome);
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
    renderSvgMercator(width, height, onlyShoreline = false) {
        return new Promise((resolve) => {
            let all = 0;
            let tree = 0;
            let ore = 0;
            let c = 0;
            const array = new Uint8ClampedArray(width * height * 4);
            this.world.GetAllMercatorPoints(width, height, (info) => {
                let color = src_utils_biome_color__WEBPACK_IMPORTED_MODULE_2__["BiomeColor"].Get(info.Biome);
                if (onlyShoreline) {
                    if (info.Shoreline) {
                        color = [0, 0, 0, 255];
                        c++;
                    }
                    else {
                        color = [255, 255, 255, 255];
                    }
                }
                let mercatorPoint = src_utils_conversor__WEBPACK_IMPORTED_MODULE_5__["Conversor"].ToMercator(info.coordinate, width, height);
                let cell = src_utils_conversor__WEBPACK_IMPORTED_MODULE_5__["Conversor"].ToIdxWidth(mercatorPoint, width) * 4;
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
}
MapToolComponent.ɵfac = function MapToolComponent_Factory(t) { return new (t || MapToolComponent)(); };
MapToolComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapToolComponent, selectors: [["map-tool"]], viewQuery: function MapToolComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.svg = _t.first);
    } }, decls: 5, vars: 0, consts: [[1, "centerbox"], [3, "click"], ["canvas", ""], ["svg", ""]], template: function MapToolComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "canvas", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapToolComponent_Template_canvas_click_1_listener() { return ctx.change(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "svg", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".centerbox[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-box-orient: horizontal;\n  -webkit-box-pack: center;\n  -webkit-box-align: center;\n  display: -moz-box;\n  -moz-box-pack: center;\n  -moz-box-align: center;\n  width: 90%;\n  height: 90%;\n  padding: 0;\n  margin: 20px 20px 20px 20px;\n}\n\ncanvas[_ngcontent-%COMP%], svg[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid black;\n  position: absolute;\n  top: 20px;\n  left: 20px;\n}\n\nsvg[_ngcontent-%COMP%] {\n  display: block;\n  fill: black;\n  fill-rule: evenodd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Z1bWFzYS93b3JsZC9zcmMvX2NvbXBvbmVudC9tYXAtdG9vbC9tYXAtdG9vbC5jb21wb25lbnQuc2NzcyIsInNyYy9fY29tcG9uZW50L21hcC10b29sL21hcC10b29sLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFFQSxpQkFBQTtFQUVBLHFCQUFBO0VBQ0Esc0JBQUE7RUFFQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUVBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNGRjs7QURLQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNGRiIsImZpbGUiOiJzcmMvX2NvbXBvbmVudC9tYXAtdG9vbC9tYXAtdG9vbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJib3gge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgLW1vei1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcclxuICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xyXG5cclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAyMHB4IDIwcHggMjBweCAyMHB4O1xyXG59XHJcblxyXG5jYW52YXMsIHN2ZyB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAvLyBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwcHg7XHJcbiAgbGVmdDogMjBweDtcclxufVxyXG5cclxuc3ZnIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmaWxsOiBibGFjaztcclxuICBmaWxsLXJ1bGU6IGV2ZW5vZGQ7XHJcbn1cclxuXHJcbi8vIHBvbHlnb24geyBcclxuLy8gICBmaWxsOiBibGFjaztcclxuLy8gfSIsIi5jZW50ZXJib3gge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICAtbW96LWJveC1vcmllbnQ6IGhvcml6b250YWw7XG4gIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDtcbn1cblxuY2FudmFzLCBzdmcge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDIwcHg7XG59XG5cbnN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmaWxsOiBibGFjaztcbiAgZmlsbC1ydWxlOiBldmVub2RkO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapToolComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'map-tool',
                templateUrl: './map-tool.component.html',
                styleUrls: ['./map-tool.component.scss']
            }]
    }], function () { return []; }, { canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['canvas', { static: false }]
        }], svg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['svg', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/_enum/world.biome.ts":
/*!**********************************!*\
  !*** ./src/_enum/world.biome.ts ***!
  \**********************************/
/*! exports provided: WorldBiome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldBiome", function() { return WorldBiome; });
var WorldBiome;
(function (WorldBiome) {
    WorldBiome[WorldBiome["deepWater"] = 0] = "deepWater";
    WorldBiome[WorldBiome["swallowWater"] = 1] = "swallowWater";
    WorldBiome[WorldBiome["shoreline"] = 2] = "shoreline";
    WorldBiome[WorldBiome["beach"] = 3] = "beach";
    WorldBiome[WorldBiome["sandy"] = 4] = "sandy";
    WorldBiome[WorldBiome["grass"] = 5] = "grass";
    WorldBiome[WorldBiome["woods"] = 6] = "woods";
    WorldBiome[WorldBiome["forest"] = 7] = "forest";
    WorldBiome[WorldBiome["mountain"] = 8] = "mountain";
    WorldBiome[WorldBiome["snow"] = 9] = "snow";
})(WorldBiome || (WorldBiome = {}));


/***/ }),

/***/ "./src/_generator/world.generator.ts":
/*!*******************************************!*\
  !*** ./src/_generator/world.generator.ts ***!
  \*******************************************/
/*! exports provided: WorldGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldGenerator", function() { return WorldGenerator; });
/* harmony import */ var src_model_world_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_model/world.info */ "./src/_model/world.info.ts");
/* harmony import */ var src_model_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_model/point */ "./src/_model/point.ts");
/* harmony import */ var _utils_perlin_noise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_utils/perlin.noise */ "./src/_utils/perlin.noise.ts");
/* harmony import */ var src_model_coordinate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_model/coordinate */ "./src/_model/coordinate.ts");
/* harmony import */ var src_utils_conversor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_utils/conversor */ "./src/_utils/conversor.ts");
/* harmony import */ var src_enum_world_biome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/_enum/world.biome */ "./src/_enum/world.biome.ts");
/* harmony import */ var src_utils_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_utils/helper */ "./src/_utils/helper.ts");
/* harmony import */ var src_model_vector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/_model/vector */ "./src/_model/vector.ts");
/* harmony import */ var src_model_layer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/_model/layer */ "./src/_model/layer.ts");









class WorldGenerator {
    constructor(seed = 8, useDefault = true, radius = 5000) {
        this.seed = seed;
        this.radius = radius;
        this.noise = { raw: [], topology: [], trees: [], ores: [] };
        this.prepareSeed(seed);
        this.noise.raw = useDefault ? _utils_perlin_noise__WEBPACK_IMPORTED_MODULE_2__["Perlin"].DefaultP : _utils_perlin_noise__WEBPACK_IMPORTED_MODULE_2__["Perlin"].RandomP;
        this.noise.topology = this.generateNoise(this.noise.raw, seed);
        this.noise.trees = this.generateNoise(this.generateNewNoise(), seed);
        this.noise.ores = this.generateNoise(this.generateNewNoise(2), seed);
    }
    prepareSeed(seed) {
        if (seed > 0 && seed < 1) {
            seed *= 65536;
        }
        seed = Math.floor(seed);
        if (seed < 256) {
            seed |= seed << 8;
        }
    }
    generateNoise(array, seed) {
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
    generateNewNoise(jump = 1) {
        const data = JSON.parse(JSON.stringify(this.noise.raw));
        const noise = [];
        while (data.length > 0) {
            if (data.length <= jump)
                noise.push(data.pop());
            else
                noise.push(data.splice(jump, 1));
        }
        return noise;
    }
    cicle_gradient(a, b, x, y, r) {
        var dist_points = (a - x) * (a - x) + (b - y) * (b - y);
        r *= r;
        return dist_points < r ? (((dist_points * 100 / r) - 100) * -1) / 100 : 0;
    }
    GetInformation(coordinate, zoom = 1, onlyTopology = false) {
        if (!(coordinate.radius != null)) {
            coordinate.radius = zoom;
        }
        var point = src_utils_conversor__WEBPACK_IMPORTED_MODULE_4__["Conversor"].ToCardian(coordinate);
        const factor = zoom; //this.radius * zoom;
        const topology = Math.trunc((_utils_perlin_noise__WEBPACK_IMPORTED_MODULE_2__["Perlin"].Noise(point, factor, this.noise.topology, 0.68) + 0.5) * 100) / 100;
        let trees = null;
        let ores = null;
        if (!onlyTopology) {
            trees = Math.trunc((_utils_perlin_noise__WEBPACK_IMPORTED_MODULE_2__["Perlin"].Noise(point, factor * 100, this.noise.trees, 0.68) + 0.5) * 100) / 100;
            ores = Math.trunc((_utils_perlin_noise__WEBPACK_IMPORTED_MODULE_2__["Perlin"].Noise(point, factor * 100, this.noise.ores, 0.68) + 0.5) * 100) / 100;
        }
        return new src_model_world_info__WEBPACK_IMPORTED_MODULE_0__["WorldInfo"](topology, trees, ores, coordinate, point);
    }
    GetAllMercatorPoints(width, height, inspector = null) {
        return new Promise((resolve) => {
            const ini = new Date();
            let count = 0;
            let countLand = 0;
            const ret = [];
            for (let x = 0; x < width; x++) {
                for (let y = 0; y < height; y++) {
                    const info = this.GetInformation(src_utils_conversor__WEBPACK_IMPORTED_MODULE_4__["Conversor"].FromMercator(new src_model_point__WEBPACK_IMPORTED_MODULE_1__["Point"](x, y, 0), width, height), 1);
                    if (info.topology >= 0.5)
                        countLand++;
                    if (inspector !== null) {
                        inspector(info);
                    }
                    ret.push(info);
                    count++;
                }
            }
            const end = new Date();
            console.log(`duration ${src_utils_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"].TruncDecimals(end.getTime() / 1000 - ini.getTime() / 1000, 3)}s with count: ${count} ${countLand}`);
            resolve(ret);
        });
    }
    GetAllPoints(step = 0.0001) {
        return new Promise((resolve) => {
            const ini = new Date();
            let count = 0;
            const decPl = src_utils_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"].DecimalPlaces(step);
            console.log('decimal', decPl, step);
            const ret = [];
            for (let longitude = -90; longitude <= 90; longitude += step) {
                for (let latitude = -180; latitude <= 180; latitude += step) {
                    ret.push(this.GetInformation(new src_model_coordinate__WEBPACK_IMPORTED_MODULE_3__["Coordinate"](src_utils_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"].TruncDecimals(longitude, decPl), src_utils_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"].TruncDecimals(latitude, decPl)), 1, true));
                    count++;
                }
            }
            const end = new Date();
            console.log(`duration ${src_utils_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"].TruncDecimals(end.getTime() / 1000 - ini.getTime() / 1000, 3)}s with count: ${count}`);
            resolve(ret);
        });
    }
    getVectors(width, height) {
        return new Promise(resolve => {
            console.log(`[getVectors] start ${width}x${height}`, new Date());
            const allVectors = [];
            let count = 0;
            for (var x = 0; x < width - 1; x++) {
                for (var y = 0; y < height - 1; y++) {
                    const no = new src_model_point__WEBPACK_IMPORTED_MODULE_1__["Point"](x, y, 0);
                    if (this.GetInformation(src_utils_conversor__WEBPACK_IMPORTED_MODULE_4__["Conversor"].FromMercator(no, width, height), 1).topology < 0.5)
                        continue;
                    const ne = new src_model_point__WEBPACK_IMPORTED_MODULE_1__["Point"]((1 + x), y, 0);
                    if (this.GetInformation(src_utils_conversor__WEBPACK_IMPORTED_MODULE_4__["Conversor"].FromMercator(ne, width, height), 1).topology < 0.5)
                        continue;
                    const so = new src_model_point__WEBPACK_IMPORTED_MODULE_1__["Point"](x, (1 + y), 0);
                    if (this.GetInformation(src_utils_conversor__WEBPACK_IMPORTED_MODULE_4__["Conversor"].FromMercator(so, width, height), 1).topology < 0.5)
                        continue;
                    const se = new src_model_point__WEBPACK_IMPORTED_MODULE_1__["Point"]((1 + x), (1 + y), 0);
                    if (this.GetInformation(src_utils_conversor__WEBPACK_IMPORTED_MODULE_4__["Conversor"].FromMercator(se, width, height), 1).topology < 0.5)
                        continue;
                    src_model_vector__WEBPACK_IMPORTED_MODULE_7__["Vector"].AddInIfInvertNotExistsAndRemoveItFrom(allVectors, new src_model_vector__WEBPACK_IMPORTED_MODULE_7__["Vector"](no, ne));
                    src_model_vector__WEBPACK_IMPORTED_MODULE_7__["Vector"].AddInIfInvertNotExistsAndRemoveItFrom(allVectors, new src_model_vector__WEBPACK_IMPORTED_MODULE_7__["Vector"](ne, se));
                    src_model_vector__WEBPACK_IMPORTED_MODULE_7__["Vector"].AddInIfInvertNotExistsAndRemoveItFrom(allVectors, new src_model_vector__WEBPACK_IMPORTED_MODULE_7__["Vector"](se, so));
                    src_model_vector__WEBPACK_IMPORTED_MODULE_7__["Vector"].AddInIfInvertNotExistsAndRemoveItFrom(allVectors, new src_model_vector__WEBPACK_IMPORTED_MODULE_7__["Vector"](so, no));
                    count++;
                }
            }
            console.log('condensedVectors', allVectors.length, new Date());
            let copyCondensedVectors = [...allVectors];
            const layers = [];
            while (copyCondensedVectors.length > 0) {
                const vectors = [];
                const startVector = copyCondensedVectors.pop();
                vectors.push(startVector.copy);
                let runner = startVector.copy;
                while (!runner.end.equals(startVector.start)) {
                    const vectorIdx = copyCondensedVectors.findIndex((v) => runner.end.equals(v.start));
                    runner = copyCondensedVectors.splice(vectorIdx, 1)[0];
                    vectors.push(runner.copy);
                }
                layers.push(new src_model_layer__WEBPACK_IMPORTED_MODULE_8__["Layer"](vectors).shrunk());
            }
            console.log('layers', layers.length, new Date());
            const layer = new src_model_layer__WEBPACK_IMPORTED_MODULE_8__["Layer"]();
            layer.innerLayers = layers;
            layer.Process();
            console.log('layer', layer, new Date());
            resolve(layer);
        });
    }
    getSvg(width, height) {
        return new Promise(resolve => {
            console.log('start', width, height, new Date());
            const allVectors = [];
            let count = 0;
            for (var x = 0; x < width - 1; x++) {
                for (var y = 0; y < height - 1; y++) {
                    const no = new src_model_point__WEBPACK_IMPORTED_MODULE_1__["Point"](x, y, 0);
                    if (this.GetInformation(src_utils_conversor__WEBPACK_IMPORTED_MODULE_4__["Conversor"].FromMercator(no, width, height), 1).topology < 0.5)
                        continue;
                    const ne = new src_model_point__WEBPACK_IMPORTED_MODULE_1__["Point"]((1 + x), y, 0);
                    if (this.GetInformation(src_utils_conversor__WEBPACK_IMPORTED_MODULE_4__["Conversor"].FromMercator(ne, width, height), 1).topology < 0.5)
                        continue;
                    const so = new src_model_point__WEBPACK_IMPORTED_MODULE_1__["Point"](x, (1 + y), 0);
                    if (this.GetInformation(src_utils_conversor__WEBPACK_IMPORTED_MODULE_4__["Conversor"].FromMercator(so, width, height), 1).topology < 0.5)
                        continue;
                    const se = new src_model_point__WEBPACK_IMPORTED_MODULE_1__["Point"]((1 + x), (1 + y), 0);
                    if (this.GetInformation(src_utils_conversor__WEBPACK_IMPORTED_MODULE_4__["Conversor"].FromMercator(se, width, height), 1).topology < 0.5)
                        continue;
                    allVectors.push(new src_model_vector__WEBPACK_IMPORTED_MODULE_7__["Vector"](no, ne));
                    allVectors.push(new src_model_vector__WEBPACK_IMPORTED_MODULE_7__["Vector"](ne, se));
                    allVectors.push(new src_model_vector__WEBPACK_IMPORTED_MODULE_7__["Vector"](se, so));
                    allVectors.push(new src_model_vector__WEBPACK_IMPORTED_MODULE_7__["Vector"](so, no));
                    count++;
                }
            }
            console.log('allVectors', count, allVectors.length, new Date());
            let copyAllVectors = [...allVectors];
            const condensedVectors = [];
            while (copyAllVectors.length > 0) {
                const vector = copyAllVectors.pop();
                if (!vector.inverted.containsIn(copyAllVectors)) {
                    condensedVectors.push(vector);
                }
                else {
                    copyAllVectors = copyAllVectors.filter((v) => !v.equals(vector.inverted));
                }
            }
            console.log('condensedVectors', condensedVectors.length, new Date());
            let copyCondensedVectors = [...condensedVectors];
            const layeredPaths = [];
            while (copyCondensedVectors.length > 0) {
                const layer = [];
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
            console.log('layeredPaths', layeredPaths.length, new Date());
            const shrunkenLayeredPaths = [];
            layeredPaths.forEach((layer) => {
                const shrunkenLayer = [];
                let runner = layer[0].copy;
                for (let i = 1; i < layer.length; i++) {
                    if (runner.isCollinear(layer[i].end)) {
                        runner = new src_model_vector__WEBPACK_IMPORTED_MODULE_7__["Vector"](runner.start, layer[i].end);
                    }
                    else {
                        shrunkenLayer.push(runner.copy);
                        runner = layer[i].copy;
                    }
                }
                shrunkenLayer.push(runner.copy);
                shrunkenLayeredPaths.push(shrunkenLayer);
            });
            console.log('shrunkenLayeredPaths', shrunkenLayeredPaths.length, new Date());
            resolve(shrunkenLayeredPaths);
        });
    }
    GetShorlines(step = 0.0001) {
        const ret = [];
        const coordinate = new src_model_coordinate__WEBPACK_IMPORTED_MODULE_3__["Coordinate"](0, 0);
        const polygon = this.probePolygon(coordinate, step);
        ret.push(polygon.map((p) => this.GetInformation(p)));
        return ret;
    }
    probePolygon(coordinate = new src_model_coordinate__WEBPACK_IMPORTED_MODULE_3__["Coordinate"](0, 0), step = 0.0001) {
        const polygon = [];
        let points = [];
        do {
            coordinate = coordinate.addLongitude(step);
            points = this.probeNearShorepoints(coordinate, step);
        } while (points === []);
        while (points.length !== 0) {
            const newPoints = [];
            points.forEach((point) => {
                // const point = points[0];
                polygon.push(point);
                console.log('point', point, polygon.length);
                newPoints.push(...this.probeNearShorepoints(point, step));
            });
            const beforeCount = newPoints.length;
            points = newPoints.filter((newPoint) => polygon.find((p) => p.latitude === newPoint.latitude && p.longitude === newPoint.longitude) === undefined);
            const afterCount = points.length;
            if (afterCount === beforeCount) {
                console.log('problema', afterCount, beforeCount);
            }
            else if (afterCount > beforeCount) {
                console.log('mais problema ainda', afterCount, beforeCount);
            }
            else {
                console.log('ok', afterCount, beforeCount);
            }
        }
        console.log('finito', polygon);
        return polygon;
    }
    probeNearShorepoints(coordinate, step = 0.0001) {
        const points = [];
        const east = coordinate.addLongitude(step);
        const eastInfo = this.GetInformation(east, 1, true);
        if (eastInfo.Biome === src_enum_world_biome__WEBPACK_IMPORTED_MODULE_5__["WorldBiome"].shoreline) {
            // console.log('east', east, eastInfo);
            points.push(east);
        }
        const south = coordinate.addLatitude(step);
        const southInfo = this.GetInformation(south, 1, true);
        if (southInfo.Biome === src_enum_world_biome__WEBPACK_IMPORTED_MODULE_5__["WorldBiome"].shoreline) {
            // console.log('south', south, southInfo);
            points.push(south);
        }
        const west = coordinate.addLongitude(-step);
        const westInfo = this.GetInformation(west, 1, true);
        if (westInfo.Biome === src_enum_world_biome__WEBPACK_IMPORTED_MODULE_5__["WorldBiome"].shoreline) {
            // console.log('west', west, westInfo);
            points.push(west);
        }
        const north = coordinate.addLatitude(-step);
        const northInfo = this.GetInformation(north, 1, true);
        if (northInfo.Biome === src_enum_world_biome__WEBPACK_IMPORTED_MODULE_5__["WorldBiome"].shoreline) {
            // console.log('north', north, northInfo);
            points.push(north);
        }
        return points;
    }
}


/***/ }),

/***/ "./src/_model/coordinate.ts":
/*!**********************************!*\
  !*** ./src/_model/coordinate.ts ***!
  \**********************************/
/*! exports provided: Coordinate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coordinate", function() { return Coordinate; });
/* harmony import */ var src_utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_utils/helper */ "./src/_utils/helper.ts");

class Coordinate {
    constructor(latitude, longitude, radius) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.radius = radius;
    }
    addLatitude(value, precision = 4) {
        return new Coordinate(src_utils_helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].TruncDecimals(this.latitude + value, precision), this.longitude);
    }
    addLongitude(value, precision = 4) {
        return new Coordinate(this.latitude, src_utils_helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].TruncDecimals(this.longitude + value, precision));
    }
}


/***/ }),

/***/ "./src/_model/layer.ts":
/*!*****************************!*\
  !*** ./src/_model/layer.ts ***!
  \*****************************/
/*! exports provided: Layer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return Layer; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./src/_model/vector.ts");

class Layer {
    constructor(limit = [], innerLayers = []) {
        this.limit = limit;
        this.innerLayers = innerLayers;
    }
    shrunk() {
        const layer = [...this.limit];
        const array = [];
        let runner = layer[0].copy;
        for (let i = 1; i < layer.length; i++) {
            if (runner.isCollinear(layer[i].end)) {
                runner = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"](runner.start, layer[i].end);
            }
            else {
                array.push(runner.copy);
                runner = layer[i].copy;
            }
        }
        array.push(runner.copy);
        return new Layer(array, this.innerLayers);
    }
    inside(point) {
        let inside = false;
        for (let i = 0, j = this.limit.length - 1; i < this.limit.length; j = i++) {
            const xi = this.limit[i].start.X, yi = this.limit[i].start.Y;
            const xj = this.limit[j].start.X, yj = this.limit[j].start.Y;
            const intersect = ((yi > point.Y) != (yj > point.Y)) && (point.X < (xj - xi) * (point.Y - yi) / (yj - yi) + xi);
            if (intersect)
                inside = !inside;
        }
        return inside;
    }
    static DefaultSort(l1, l2) {
        if (l1.limit.length > l2.limit.length)
            return 1;
        if (l1.limit.length < l2.limit.length)
            return -1;
        return 0;
    }
    AsSvgPath() {
        let path = '';
        if (this.limit.length > 0) {
            path = 'M ';
            this.limit.forEach((vector, idx) => {
                path += `${idx > 0 ? 'L ' : ''}${vector.start.X} ${vector.start.Y} `;
            });
            path += `Z `;
        }
        this.innerLayers.forEach(layer => {
            path += layer.AsSvgPath();
        });
        return path;
    }
    Process() {
        this.innerLayers.sort(Layer.DefaultSort);
        const copyInnerLayers = [...this.innerLayers];
        for (let i = 0; i < copyInnerLayers.length; i++) {
            for (let j = this.innerLayers.length - 1; j > 0; j--) {
                if (i !== j) {
                    if (copyInnerLayers[i].inside(this.innerLayers[j].limit[0].start)) {
                        const innerLayer = this.innerLayers.splice(j, 1)[0];
                        copyInnerLayers[i].innerLayers.push(innerLayer);
                    }
                }
            }
        }
        for (let i = 0; i < copyInnerLayers.length; i++) {
            if (copyInnerLayers[i].innerLayers.length > 0) {
                copyInnerLayers[i].Process();
            }
        }
    }
}


/***/ }),

/***/ "./src/_model/point.ts":
/*!*****************************!*\
  !*** ./src/_model/point.ts ***!
  \*****************************/
/*! exports provided: Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
class Point {
    constructor(X, Y, Z) {
        this.X = X;
        this.Y = Y;
        this.Z = Z;
    }
    equals(point) {
        return (this.X === point.X && this.Y === point.Y && this.Z === point.Z);
    }
}


/***/ }),

/***/ "./src/_model/vector.ts":
/*!******************************!*\
  !*** ./src/_model/vector.ts ***!
  \******************************/
/*! exports provided: Vector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return Vector; });
class Vector {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    get inverted() {
        return new Vector(this.end, this.start);
    }
    get copy() {
        return new Vector(this.start, this.end);
    }
    containsIn(array) {
        for (let i = 0; i < array.length; i++) {
            if ((array[i].start.equals(this.start)) && (array[i].end.equals(this.end))) {
                return true;
            }
        }
        return false;
    }
    isCollinear(a) {
        const A = this.start.X * (this.end.Y - a.Y) + this.end.X * (a.Y - this.start.Y) + a.X * (this.start.Y - this.end.Y);
        return A === 0;
    }
    isClockwise(vector) {
        const dot = (this.end.X - this.start.X) * (vector.end.X - vector.start.X) + (this.end.Y - this.start.Y) * (vector.end.Y - vector.start.Y);
        const det = (this.end.X - this.start.X) * (vector.end.Y - vector.start.Y) - (this.end.Y - this.start.Y) * (vector.end.X - vector.start.X);
        return Math.atan2(det, dot) > 0;
    }
    equals(vector) {
        return (this.start.equals(vector.start) && this.end.equals(vector.end));
    }
    static AddInIfInvertNotExistsAndRemoveItFrom(vectors, vector) {
        const vectorIdx = vectors.findIndex((v) => vector.inverted.equals(v));
        if (vectorIdx > -1) {
            vectors.splice(vectorIdx, 1);
        }
        else {
            vectors.push(vector);
        }
        return vectors;
    }
}


/***/ }),

/***/ "./src/_model/world.info.ts":
/*!**********************************!*\
  !*** ./src/_model/world.info.ts ***!
  \**********************************/
/*! exports provided: WorldInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldInfo", function() { return WorldInfo; });
/* harmony import */ var src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_enum/world.biome */ "./src/_enum/world.biome.ts");
/* harmony import */ var src_utils_conversor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_utils/conversor */ "./src/_utils/conversor.ts");


class WorldInfo {
    constructor(topology, trees, ores, coordinate, point) {
        this.topology = topology;
        this.trees = trees;
        this.ores = ores;
        this.coordinate = coordinate;
        this.point = point;
    }
    get Biome() {
        if (this.topology < 0.35) {
            return src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].deepWater;
        }
        else if (this.topology < 0.50) {
            return src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].swallowWater;
        }
        else if (this.topology === 0.50) {
            return src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].shoreline;
        }
        else if (this.topology < 0.53) {
            return src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].beach;
        }
        else if (this.topology < 0.56) {
            return src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].sandy;
        }
        else if (this.topology < 0.62) {
            return src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].grass;
        }
        else if (this.topology < 0.70) {
            return src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].woods;
        }
        else if (this.topology < 0.75) {
            return src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].forest;
        }
        else if (this.topology < 0.80) {
            return src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].mountain;
        }
        else if (this.topology < 0.90) {
            return src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].snow;
        }
    }
    ;
    get Shoreline() {
        return this.topology === 0.50;
    }
    get Tree() {
        return (this.trees < 0.20) && this.Biome == src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].grass;
    }
    get Ore() {
        return (this.ores < 0.25);
    }
    get LatitudeLine() {
        return (src_utils_conversor__WEBPACK_IMPORTED_MODULE_1__["Conversor"].ToDegrees(this.coordinate.latitude) % 10 === 0);
    }
    get LongitudeLine() {
        return (src_utils_conversor__WEBPACK_IMPORTED_MODULE_1__["Conversor"].ToDegrees(this.coordinate.longitude) % 10 === 0);
    }
    static AllInOne(data) {
        const ret = [];
        data.forEach((inner) => inner.forEach(d => {
            if (d !== null) {
                ret.push(d);
            }
        }));
        return ret;
    }
    static RemoveOne(points, item, width, height) {
        const itemPoint = src_utils_conversor__WEBPACK_IMPORTED_MODULE_1__["Conversor"].ToMercator(item.coordinate, width, height);
        points[itemPoint.X].splice(itemPoint.Y, 1);
    }
    static GetAllNear(points, point, width, height) {
        const variator = 2;
        return points.filter((p) => {
            const itemPoint = src_utils_conversor__WEBPACK_IMPORTED_MODULE_1__["Conversor"].ToMercator(p.coordinate, width, height);
            return (itemPoint.X >= point.X - variator && itemPoint.X <= point.X + variator) &&
                (itemPoint.Y >= point.Y - variator && itemPoint.Y <= point.Y + variator) &&
                (itemPoint.Z >= point.Z - variator && itemPoint.Z <= point.Z + variator);
        });
    }
}


/***/ }),

/***/ "./src/_utils/biome.color.ts":
/*!***********************************!*\
  !*** ./src/_utils/biome.color.ts ***!
  \***********************************/
/*! exports provided: BiomeColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiomeColor", function() { return BiomeColor; });
/* harmony import */ var src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_enum/world.biome */ "./src/_enum/world.biome.ts");

class BiomeColor {
    static Get(type) {
        switch (type) {
            case src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].deepWater:
                return this.deepWater;
            case src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].swallowWater:
                return this.swallowWater;
            case src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].woods:
                return this.woods;
            case src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].forest:
                return this.forest;
            case src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].sandy:
                return this.sandy;
            case src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].beach:
                return this.beach;
            case src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].mountain:
                return this.mountain;
            case src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].snow:
                return this.snow;
            default:
            case src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].grass:
                return this.grass;
        }
    }
}
BiomeColor.swallowWater = [0, 191, 255, 255];
BiomeColor.deepWater = [65, 105, 225, 255];
BiomeColor.grass = [50, 205, 50, 255];
BiomeColor.woods = [34, 139, 34, 255];
BiomeColor.forest = [0, 100, 0, 255];
BiomeColor.sandy = [210, 180, 140, 255];
BiomeColor.beach = [238, 214, 175, 255];
BiomeColor.mountain = [139, 137, 137, 255];
BiomeColor.snow = [255, 250, 250, 255];


/***/ }),

/***/ "./src/_utils/conversor.ts":
/*!*********************************!*\
  !*** ./src/_utils/conversor.ts ***!
  \*********************************/
/*! exports provided: Conversor, RAD2DEG, PI_4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Conversor", function() { return Conversor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RAD2DEG", function() { return RAD2DEG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PI_4", function() { return PI_4; });
/* harmony import */ var src_model_coordinate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_model/coordinate */ "./src/_model/coordinate.ts");
/* harmony import */ var src_model_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_model/point */ "./src/_model/point.ts");


class Conversor {
    static ToPolar(point) {
        return new src_model_coordinate__WEBPACK_IMPORTED_MODULE_0__["Coordinate"](Math.atan(point.Y / point.Z), Math.atan(Math.sqrt(Math.pow(point.X, 2) + Math.pow(point.Y, 2) / point.Z)), Math.sqrt(Math.pow(point.X, 2) + Math.pow(point.Y, 2) + Math.pow(point.Z, 2)));
    }
    static ToCardian(coordinate) {
        return new src_model_point__WEBPACK_IMPORTED_MODULE_1__["Point"](coordinate.radius * Math.cos(Conversor.ToRadians(coordinate.longitude)) * Math.cos(Conversor.ToRadians(coordinate.latitude)), coordinate.radius * Math.sin(Conversor.ToRadians(coordinate.longitude)) * Math.cos(Conversor.ToRadians(coordinate.latitude)), coordinate.radius * Math.sin(Conversor.ToRadians(coordinate.latitude)));
    }
    static ToDegrees(angle) {
        return angle * (180 / Math.PI);
    }
    static ToRadians(angle) {
        return angle * (Math.PI / 180);
    }
    static ToMercator(coordinate, width, height) {
        return new src_model_point__WEBPACK_IMPORTED_MODULE_1__["Point"](Math.round((coordinate.longitude + 180) / (360 / width)), Math.round((coordinate.latitude + 90) / (180 / height)), 0);
    }
    static FromMercator(point, width, height) {
        return new src_model_coordinate__WEBPACK_IMPORTED_MODULE_0__["Coordinate"]((point.Y * (180 / height)) - 90, (point.X * (360 / width)) - 180);
    }
    static ToIdxWidth(point, width) {
        return (point.X + (point.Y) * width);
    }
}
const RAD2DEG = 180 / Math.PI;
const PI_4 = Math.PI / 4;


/***/ }),

/***/ "./src/_utils/helper.ts":
/*!******************************!*\
  !*** ./src/_utils/helper.ts ***!
  \******************************/
/*! exports provided: Helper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Helper", function() { return Helper; });
/* harmony import */ var src_model_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_model/point */ "./src/_model/point.ts");

class Helper {
    static TruncDecimals(num, precision = 4) {
        return Math.trunc(Math.pow(10, precision) * num) / Math.pow(10, precision);
    }
    static CloneAny(data) {
        return JSON.parse(JSON.stringify(data));
    }
    static Pitagoras(a, b) {
        return Math.sqrt(Math.pow(a.X - b.X, 2) + Math.pow(a.Y - b.Y, 2) + Math.pow(a.Z - b.Z, 2));
    }
    static DecimalPlaces(n) {
        let a;
        return (a = (n.toString().charAt(0) == '-' ? n - 1 : n + 1).toString().replace(/^-?[0-9]+\.?([0-9]+)$/, '$1').length) >= 1 ? a : 0;
    }
    static IdxMatrixToVector(point, width, stepX = 1, stepY = 1) {
        return Math.trunc((point.Y) * width + (point.X));
    }
    static IdxVectorToMatrix(idx, width, stepX = 1, stepY = 1) {
        return new src_model_point__WEBPACK_IMPORTED_MODULE_0__["Point"]((idx % width), (idx / width), 0);
    }
    static Matrix(width = 200, height = 100, action = () => null, initx = 0, inity = 0, increment = 1) {
        const ini = new Date();
        let count = 0;
        for (let y = inity; y < height; y += increment) {
            for (let x = initx; x < width; y += increment) {
                if (action !== null)
                    action(x, y);
            }
        }
        const end = new Date();
        console.log(`duration [Matrix] ${initx > 0 || inity > 0 ? `${initx}:${inity}` : ''} ${width}:${height} ${increment > 1 ? increment : ''} ${Helper.TruncDecimals(end.getTime() / 1000 - ini.getTime() / 1000, 3)}s with count: ${count}`);
    }
}


/***/ }),

/***/ "./src/_utils/perlin.noise.ts":
/*!************************************!*\
  !*** ./src/_utils/perlin.noise.ts ***!
  \************************************/
/*! exports provided: Perlin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Perlin", function() { return Perlin; });
class Perlin {
    static perlin(x, y, z, p) {
        const X = Math.floor(x) & 255, Y = Math.floor(y) & 255, Z = Math.floor(z) & 255;
        x -= Math.floor(x);
        y -= Math.floor(y);
        z -= Math.floor(z);
        const u = this.fade(x), v = this.fade(y), w = this.fade(z);
        const A = p[X] + Y, AA = p[A] + Z, AB = p[A + 1] + Z, B = p[X + 1] + Y, BA = p[B] + Z, BB = p[B + 1] + Z;
        return this.lerp(w, this.lerp(v, this.lerp(u, this.grad(p[AA], x, y, z), this.grad(p[BA], x - 1, y, z)), this.lerp(u, this.grad(p[AB], x, y - 1, z), this.grad(p[BB], x - 1, y - 1, z))), this.lerp(v, this.lerp(u, this.grad(p[AA + 1], x, y, z - 1), this.grad(p[BA + 1], x - 1, y, z - 1)), this.lerp(u, this.grad(p[AB + 1], x, y - 1, z - 1), this.grad(p[BB + 1], x - 1, y - 1, z - 1))));
    }
    static fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }
    static lerp(t, a, b) { return a + t * (b - a); }
    static grad(hash, x, y, z) {
        const h = hash & 15;
        const u = h < 8 ? x : y, v = h < 4 ? y : h == 12 || h == 14 ? x : z;
        return ((h & 1) == 0 ? u : -u) + ((h & 2) == 0 ? v : -v);
    }
    ;
    static octaves(x, y, z, p, persistence = 0.5, octaves = 6) {
        let total = 0;
        let frequency = 1;
        let amplitude = 1;
        let maxValue = 0;
        for (let i = 0; i < octaves; i++) {
            total += this.perlin(x * frequency, y * frequency, z * frequency, p) * amplitude;
            maxValue += amplitude;
            amplitude *= persistence;
            frequency *= 2;
        }
        return total / maxValue;
    }
    static get RandomP() {
        const array = new Uint8Array(256);
        window.crypto.getRandomValues(array);
        const list = [];
        array.forEach((v) => list.push(v));
        return list;
    }
    static Noise(point, factor = 1, p, persistence = 0.5, octaves = 6) {
        return this.octaves(point.X / factor, point.Y / factor, point.Z / factor, p, persistence, octaves);
    }
}
Perlin.DefaultP = [151, 160, 137, 91, 90, 15,
    131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23,
    190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33,
    88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166,
    77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244,
    102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196,
    135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123,
    5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42,
    223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9,
    129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228,
    251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107,
    49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254,
    138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_component_map_tool_map_tool_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_component/map-tool/map-tool.component */ "./src/_component/map-tool/map-tool.component.ts");



class AppComponent {
    constructor() {
        this.title = 'World';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "map-tool");
    } }, directives: [src_component_map_tool_map_tool_component__WEBPACK_IMPORTED_MODULE_1__["MapToolComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_component_map_tool_map_tool_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_component/map-tool/map-tool.component */ "./src/_component/map-tool/map-tool.component.ts");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        src_component_map_tool_map_tool_component__WEBPACK_IMPORTED_MODULE_4__["MapToolComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    src_component_map_tool_map_tool_component__WEBPACK_IMPORTED_MODULE_4__["MapToolComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/fumasa/world/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map