function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/_component/map-tool/map-tool.component.ts":
  /*!*******************************************************!*\
    !*** ./src/_component/map-tool/map-tool.component.ts ***!
    \*******************************************************/

  /*! exports provided: MapToolComponent */

  /***/
  function src_componentMapToolMapToolComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapToolComponent", function () {
      return MapToolComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_generator_world_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/_generator/world.generator */
    "./src/_generator/world.generator.ts");
    /* harmony import */


    var src_utils_biome_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/_utils/biome.color */
    "./src/_utils/biome.color.ts");
    /* harmony import */


    var src_model_point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/_model/point */
    "./src/_model/point.ts");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var src_utils_conversor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/_utils/conversor */
    "./src/_utils/conversor.ts");

    var _c0 = ["canvas"];
    var _c1 = ["svg"];

    var MapToolComponent = /*#__PURE__*/function () {
      function MapToolComponent() {
        _classCallCheck(this, MapToolComponent);

        this.world = new src_generator_world_generator__WEBPACK_IMPORTED_MODULE_1__["WorldGenerator"]();
        this.sessionKey = 'points';
        this.position = new src_model_point__WEBPACK_IMPORTED_MODULE_3__["Point"](0, 0, 0);
        this.zoom = 1;
        this.step = 20;
        this.jump = 1.25;
        this.stepPoints = 0.2;
        this.toggle = true;
      } // public get Points(): Promise<WorldInfo[]> {
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


      _createClass(MapToolComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          //this.change();
          //this.drawMercator();
          // this.drawMercatorAlt().then(d => {
          //   console.log('done', d);
          // });
          //this.drawGlobe();
          this.drawSvgMercator();
          console.log('done');
        }
      }, {
        key: "change",
        value: function change() {// if (this.toggle) {
          //   this.drawMercator();
          // } else {
          //   this.drawMercatorAlt().then(d => {
          //     console.log('done', d);
          //   });
          // }
          // this.toggle = !this.toggle;
        }
      }, {
        key: "drawSvgMercator",
        value: function drawSvgMercator() {
          var _this = this;

          this.context = this.canvas.nativeElement.getContext('2d');
          var projection = d3__WEBPACK_IMPORTED_MODULE_4__["geoOrthographic"]();
          var svg = d3__WEBPACK_IMPORTED_MODULE_4__["select"](this.svg.nativeElement);
          var width = document.body.clientWidth - 40;
          var height = document.body.clientHeight - 40;
          this.canvas.nativeElement.width = width;
          this.canvas.nativeElement.height = height;
          svg.attr('width', width).attr('height', height);
          var image = this.context.createImageData(width, height);
          this.renderSvgMercator(width, height).then(function (data) {
            _this.context.clearRect(0, 0, width, height);

            for (var i = 0; i < data.image.byteLength; i++) {
              image.data[i] = data.image[i];
            }

            _this.context.putImageData(image, 0, 0);

            _this.world.getVectors(width, height).then(function (layer) {
              var element = document.createElementNS('http://www.w3.org/2000/svg', 'path');
              element.setAttribute('d', layer.AsSvgPath());
              element.style.stroke = '#000';
              element.style.fillOpacity = '.5';
              element.style.strokeWidth = '1px';

              _this.svg.nativeElement.appendChild(element);
            });
          });
        } // private drawGlobe() {
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

      }, {
        key: "drawMercator",
        value: function drawMercator() {
          this.context = this.canvas.nativeElement.getContext('2d');
          var projection = d3__WEBPACK_IMPORTED_MODULE_4__["geoOrthographic"]();
          var width = document.body.clientWidth - 40;
          var height = document.body.clientHeight - 40;
          this.canvas.nativeElement.width = width;
          this.canvas.nativeElement.height = height;
          var mercator = this.renderMercator(this.context.createImageData(width, height));
          this.context.clearRect(0, 0, width, height);
          this.context.putImageData(mercator, 0, 0);
        }
      }, {
        key: "renderMercator",
        value: function renderMercator(image) {
          var onlyShoreline = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var data = image.data;
          var width = image.width;
          var height = image.height;
          var all = 0;
          var tree = 0;
          var ore = 0;
          var c = 0;

          for (var x = 0; x < width; x++) {
            for (var y = 0; y < height; y++) {
              var info = this.world.GetInformation(src_utils_conversor__WEBPACK_IMPORTED_MODULE_5__["Conversor"].FromMercator(new src_model_point__WEBPACK_IMPORTED_MODULE_3__["Point"](x, y, 0), width, height), this.zoom);
              var color = src_utils_biome_color__WEBPACK_IMPORTED_MODULE_2__["BiomeColor"].Get(info.Biome);

              if (onlyShoreline) {
                if (info.Shoreline) {
                  color = [0, 0, 0, 255];
                  c++;
                } else {
                  color = [255, 255, 255, 255];
                }
              }

              var cell = (x + y * width) * 4;
              data[cell] = color[0];
              data[cell + 1] = color[1];
              data[cell + 2] = color[2];
              data[cell + 3] = color[3];
              all++;
            }
          }

          console.log("info all:".concat(all, " tree:").concat(tree, " ore:").concat(ore, " ").concat(width, "x").concat(height, " ").concat(c));
          return image;
        }
      }, {
        key: "renderMercator2",
        value: function renderMercator2(width, height) {
          var all = 0;
          var data = new Uint8ClampedArray(width * height * 4);

          for (var x = 0; x < width; x++) {
            for (var y = 0; y < height; y++) {
              var info = this.world.GetInformation(src_utils_conversor__WEBPACK_IMPORTED_MODULE_5__["Conversor"].FromMercator(new src_model_point__WEBPACK_IMPORTED_MODULE_3__["Point"](x, y, 0), width, height), this.zoom);
              var color = src_utils_biome_color__WEBPACK_IMPORTED_MODULE_2__["BiomeColor"].Get(info.Biome);
              var cell = (x + y * width) * 4;
              data[cell] = color[0];
              data[cell + 1] = color[1];
              data[cell + 2] = color[2];
              data[cell + 3] = color[3];
              all++;
            }
          }

          console.log("alt info all:".concat(all, " ").concat(width, "x").concat(height));
          return data;
        } // private async drawMercatorAlt() {
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

      }, {
        key: "renderSvgMercator",
        value: function renderSvgMercator(width, height) {
          var _this2 = this;

          var onlyShoreline = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          return new Promise(function (resolve) {
            var all = 0;
            var tree = 0;
            var ore = 0;
            var c = 0;
            var array = new Uint8ClampedArray(width * height * 4);

            _this2.world.GetAllMercatorPoints(width, height, function (info) {
              var color = src_utils_biome_color__WEBPACK_IMPORTED_MODULE_2__["BiomeColor"].Get(info.Biome);

              if (onlyShoreline) {
                if (info.Shoreline) {
                  color = [0, 0, 0, 255];
                  c++;
                } else {
                  color = [255, 255, 255, 255];
                }
              }

              var mercatorPoint = src_utils_conversor__WEBPACK_IMPORTED_MODULE_5__["Conversor"].ToMercator(info.coordinate, width, height);
              var cell = src_utils_conversor__WEBPACK_IMPORTED_MODULE_5__["Conversor"].ToIdxWidth(mercatorPoint, width) * 4;
              array[cell] = color[0];
              array[cell + 1] = color[1];
              array[cell + 2] = color[2];
              array[cell + 3] = color[3];
              all++;
            }).then(function (points) {
              console.log("info svg all:".concat(all, " tree:").concat(tree, " ore:").concat(ore, " ").concat(width, "x").concat(height, " ").concat(c));
              resolve({
                world: points,
                image: array
              });
            });
          });
        }
      }]);

      return MapToolComponent;
    }();

    MapToolComponent.ɵfac = function MapToolComponent_Factory(t) {
      return new (t || MapToolComponent)();
    };

    MapToolComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MapToolComponent,
      selectors: [["map-tool"]],
      viewQuery: function MapToolComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.svg = _t.first);
        }
      },
      decls: 5,
      vars: 0,
      consts: [[1, "centerbox"], [3, "click"], ["canvas", ""], ["svg", ""]],
      template: function MapToolComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "canvas", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapToolComponent_Template_canvas_click_1_listener() {
            return ctx.change();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "svg", null, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".centerbox[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-box-orient: horizontal;\n  -webkit-box-pack: center;\n  -webkit-box-align: center;\n  display: -moz-box;\n  -moz-box-pack: center;\n  -moz-box-align: center;\n  width: 90%;\n  height: 90%;\n  padding: 0;\n  margin: 20px 20px 20px 20px;\n}\n\ncanvas[_ngcontent-%COMP%], svg[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid black;\n  position: absolute;\n  top: 20px;\n  left: 20px;\n}\n\nsvg[_ngcontent-%COMP%] {\n  display: block;\n  fill: black;\n  fill-rule: evenodd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Z1bWFzYS93b3JsZC9zcmMvX2NvbXBvbmVudC9tYXAtdG9vbC9tYXAtdG9vbC5jb21wb25lbnQuc2NzcyIsInNyYy9fY29tcG9uZW50L21hcC10b29sL21hcC10b29sLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFFQSxpQkFBQTtFQUVBLHFCQUFBO0VBQ0Esc0JBQUE7RUFFQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUVBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNGRjs7QURLQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNGRiIsImZpbGUiOiJzcmMvX2NvbXBvbmVudC9tYXAtdG9vbC9tYXAtdG9vbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJib3gge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgLW1vei1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcclxuICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xyXG5cclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAyMHB4IDIwcHggMjBweCAyMHB4O1xyXG59XHJcblxyXG5jYW52YXMsIHN2ZyB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAvLyBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwcHg7XHJcbiAgbGVmdDogMjBweDtcclxufVxyXG5cclxuc3ZnIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmaWxsOiBibGFjaztcclxuICBmaWxsLXJ1bGU6IGV2ZW5vZGQ7XHJcbn1cclxuXHJcbi8vIHBvbHlnb24geyBcclxuLy8gICBmaWxsOiBibGFjaztcclxuLy8gfSIsIi5jZW50ZXJib3gge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICAtbW96LWJveC1vcmllbnQ6IGhvcml6b250YWw7XG4gIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDtcbn1cblxuY2FudmFzLCBzdmcge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDIwcHg7XG59XG5cbnN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmaWxsOiBibGFjaztcbiAgZmlsbC1ydWxlOiBldmVub2RkO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapToolComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'map-tool',
          templateUrl: './map-tool.component.html',
          styleUrls: ['./map-tool.component.scss']
        }]
      }], function () {
        return [];
      }, {
        canvas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['canvas', {
            "static": false
          }]
        }],
        svg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['svg', {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/_enum/world.biome.ts":
  /*!**********************************!*\
    !*** ./src/_enum/world.biome.ts ***!
    \**********************************/

  /*! exports provided: WorldBiome */

  /***/
  function src_enumWorldBiomeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorldBiome", function () {
      return WorldBiome;
    });

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
    /***/

  },

  /***/
  "./src/_generator/world.generator.ts":
  /*!*******************************************!*\
    !*** ./src/_generator/world.generator.ts ***!
    \*******************************************/

  /*! exports provided: WorldGenerator */

  /***/
  function src_generatorWorldGeneratorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorldGenerator", function () {
      return WorldGenerator;
    });
    /* harmony import */


    var src_model_world_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/_model/world.info */
    "./src/_model/world.info.ts");
    /* harmony import */


    var src_model_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/_model/point */
    "./src/_model/point.ts");
    /* harmony import */


    var _utils_perlin_noise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_utils/perlin.noise */
    "./src/_utils/perlin.noise.ts");
    /* harmony import */


    var src_model_coordinate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/_model/coordinate */
    "./src/_model/coordinate.ts");
    /* harmony import */


    var src_utils_conversor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/_utils/conversor */
    "./src/_utils/conversor.ts");
    /* harmony import */


    var src_enum_world_biome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/_enum/world.biome */
    "./src/_enum/world.biome.ts");
    /* harmony import */


    var src_utils_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/_utils/helper */
    "./src/_utils/helper.ts");
    /* harmony import */


    var src_model_vector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/_model/vector */
    "./src/_model/vector.ts");
    /* harmony import */


    var src_model_layer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/_model/layer */
    "./src/_model/layer.ts");
    /* harmony import */


    var src_utils_progress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/_utils/progress */
    "./src/_utils/progress.ts");

    var WorldGenerator = /*#__PURE__*/function () {
      function WorldGenerator() {
        var seed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
        var useDefault = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5000;

        _classCallCheck(this, WorldGenerator);

        this.seed = seed;
        this.radius = radius;
        this.noise = {
          raw: [],
          topology: [],
          trees: [],
          ores: []
        };
        this.prepareSeed(seed);
        this.noise.raw = useDefault ? _utils_perlin_noise__WEBPACK_IMPORTED_MODULE_2__["Perlin"].DefaultP : _utils_perlin_noise__WEBPACK_IMPORTED_MODULE_2__["Perlin"].RandomP;
        this.noise.topology = this.generateNoise(this.noise.raw, seed);
        this.noise.trees = this.generateNoise(this.generateNewNoise(), seed);
        this.noise.ores = this.generateNoise(this.generateNewNoise(2), seed);
      }

      _createClass(WorldGenerator, [{
        key: "prepareSeed",
        value: function prepareSeed(seed) {
          if (seed > 0 && seed < 1) {
            seed *= 65536;
          }

          seed = Math.floor(seed);

          if (seed < 256) {
            seed |= seed << 8;
          }
        }
      }, {
        key: "generateNoise",
        value: function generateNoise(array, seed) {
          var data = [];

          for (var i = 0; i < 256; i++) {
            if (i & 1) {
              data[i] = data[i + 256] = array[i] ^ seed & 255;
            } else {
              data[i] = data[i + 256] = array[i] ^ seed >> 8 & 255;
            }
          }

          return data;
        }
      }, {
        key: "generateNewNoise",
        value: function generateNewNoise() {
          var jump = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          var data = JSON.parse(JSON.stringify(this.noise.raw));
          var noise = [];

          while (data.length > 0) {
            if (data.length <= jump) noise.push(data.pop());else noise.push(data.splice(jump, 1));
          }

          return noise;
        }
      }, {
        key: "cicle_gradient",
        value: function cicle_gradient(a, b, x, y, r) {
          var dist_points = (a - x) * (a - x) + (b - y) * (b - y);
          r *= r;
          return dist_points < r ? (dist_points * 100 / r - 100) * -1 / 100 : 0;
        }
      }, {
        key: "GetInformation",
        value: function GetInformation(coordinate) {
          var zoom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          var onlyTopology = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (!(coordinate.radius != null)) {
            coordinate.radius = zoom;
          }

          var point = src_utils_conversor__WEBPACK_IMPORTED_MODULE_4__["Conversor"].ToCardian(coordinate);
          var factor = zoom; //this.radius * zoom;

          var topology = Math.trunc((_utils_perlin_noise__WEBPACK_IMPORTED_MODULE_2__["Perlin"].Noise(point, factor, this.noise.topology, 0.68) + 0.5) * 100) / 100;
          var trees = null;
          var ores = null;

          if (!onlyTopology) {
            trees = Math.trunc((_utils_perlin_noise__WEBPACK_IMPORTED_MODULE_2__["Perlin"].Noise(point, factor * 100, this.noise.trees, 0.68) + 0.5) * 100) / 100;
            ores = Math.trunc((_utils_perlin_noise__WEBPACK_IMPORTED_MODULE_2__["Perlin"].Noise(point, factor * 100, this.noise.ores, 0.68) + 0.5) * 100) / 100;
          }

          return new src_model_world_info__WEBPACK_IMPORTED_MODULE_0__["WorldInfo"](topology, trees, ores, coordinate, point);
        }
      }, {
        key: "GetAllMercatorPoints",
        value: function GetAllMercatorPoints(width, height) {
          var _this3 = this;

          var inspector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          return new Promise(function (resolve) {
            var ini = new Date();
            var count = 0;
            var countLand = 0;
            var ret = [];

            for (var x = 0; x < width; x++) {
              for (var y = 0; y < height; y++) {
                var info = _this3.GetInformation(src_utils_conversor__WEBPACK_IMPORTED_MODULE_4__["Conversor"].FromMercator(new src_model_point__WEBPACK_IMPORTED_MODULE_1__["Point"](x, y, 0), width, height), 1);

                if (info.topology >= 0.5) countLand++;

                if (inspector !== null) {
                  inspector(info);
                }

                ret.push(info);
                count++;
              }
            }

            var end = new Date();
            console.log("duration ".concat(src_utils_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"].TruncDecimals(end.getTime() / 1000 - ini.getTime() / 1000, 3), "s with count: ").concat(count, " ").concat(countLand));
            resolve(ret);
          });
        }
      }, {
        key: "GetAllPoints",
        value: function GetAllPoints() {
          var _this4 = this;

          var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.0001;
          return new Promise(function (resolve) {
            var ini = new Date();
            var count = 0;
            var decPl = src_utils_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"].DecimalPlaces(step);
            console.log('decimal', decPl, step);
            var ret = [];

            for (var longitude = -90; longitude <= 90; longitude += step) {
              for (var latitude = -180; latitude <= 180; latitude += step) {
                ret.push(_this4.GetInformation(new src_model_coordinate__WEBPACK_IMPORTED_MODULE_3__["Coordinate"](src_utils_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"].TruncDecimals(longitude, decPl), src_utils_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"].TruncDecimals(latitude, decPl)), 1, true));
                count++;
              }
            }

            var end = new Date();
            console.log("duration ".concat(src_utils_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"].TruncDecimals(end.getTime() / 1000 - ini.getTime() / 1000, 3), "s with count: ").concat(count));
            resolve(ret);
          });
        }
      }, {
        key: "getVectors",
        value: function getVectors(width, height) {
          var _this5 = this;

          var progress = new src_utils_progress__WEBPACK_IMPORTED_MODULE_9__["Progress"](width * height);
          return new Promise(function (resolve) {
            progress.start();
            var allVectors = [];

            for (var x = 0; x < width - 1; x++) {
              for (var y = 0; y < height - 1; y++) {
                progress.check();
                var no = new src_model_point__WEBPACK_IMPORTED_MODULE_1__["Point"](x, y, 0);
                if (_this5.GetInformation(src_utils_conversor__WEBPACK_IMPORTED_MODULE_4__["Conversor"].FromMercator(no, width, height), 1).topology < 0.5) continue;
                var ne = new src_model_point__WEBPACK_IMPORTED_MODULE_1__["Point"](1 + x, y, 0);
                if (_this5.GetInformation(src_utils_conversor__WEBPACK_IMPORTED_MODULE_4__["Conversor"].FromMercator(ne, width, height), 1).topology < 0.5) continue;
                var so = new src_model_point__WEBPACK_IMPORTED_MODULE_1__["Point"](x, 1 + y, 0);
                if (_this5.GetInformation(src_utils_conversor__WEBPACK_IMPORTED_MODULE_4__["Conversor"].FromMercator(so, width, height), 1).topology < 0.5) continue;
                var se = new src_model_point__WEBPACK_IMPORTED_MODULE_1__["Point"](1 + x, 1 + y, 0);
                if (_this5.GetInformation(src_utils_conversor__WEBPACK_IMPORTED_MODULE_4__["Conversor"].FromMercator(se, width, height), 1).topology < 0.5) continue;
                src_model_vector__WEBPACK_IMPORTED_MODULE_7__["Vector"].AddInIfInvertNotExistsAndRemoveItFrom(allVectors, new src_model_vector__WEBPACK_IMPORTED_MODULE_7__["Vector"](no, ne));
                src_model_vector__WEBPACK_IMPORTED_MODULE_7__["Vector"].AddInIfInvertNotExistsAndRemoveItFrom(allVectors, new src_model_vector__WEBPACK_IMPORTED_MODULE_7__["Vector"](ne, se));
                src_model_vector__WEBPACK_IMPORTED_MODULE_7__["Vector"].AddInIfInvertNotExistsAndRemoveItFrom(allVectors, new src_model_vector__WEBPACK_IMPORTED_MODULE_7__["Vector"](se, so));
                src_model_vector__WEBPACK_IMPORTED_MODULE_7__["Vector"].AddInIfInvertNotExistsAndRemoveItFrom(allVectors, new src_model_vector__WEBPACK_IMPORTED_MODULE_7__["Vector"](so, no));
              }
            }

            var layer = src_model_layer__WEBPACK_IMPORTED_MODULE_8__["Layer"].Transform(allVectors);
            progress.stop();
            resolve(layer);
          });
        }
      }, {
        key: "getSvg",
        value: function getSvg(width, height) {
          var _this6 = this;

          return new Promise(function (resolve) {
            console.log('start', width, height, new Date());
            var allVectors = [];
            var count = 0;

            for (var x = 0; x < width - 1; x++) {
              for (var y = 0; y < height - 1; y++) {
                var no = new src_model_point__WEBPACK_IMPORTED_MODULE_1__["Point"](x, y, 0);
                if (_this6.GetInformation(src_utils_conversor__WEBPACK_IMPORTED_MODULE_4__["Conversor"].FromMercator(no, width, height), 1).topology < 0.5) continue;
                var ne = new src_model_point__WEBPACK_IMPORTED_MODULE_1__["Point"](1 + x, y, 0);
                if (_this6.GetInformation(src_utils_conversor__WEBPACK_IMPORTED_MODULE_4__["Conversor"].FromMercator(ne, width, height), 1).topology < 0.5) continue;
                var so = new src_model_point__WEBPACK_IMPORTED_MODULE_1__["Point"](x, 1 + y, 0);
                if (_this6.GetInformation(src_utils_conversor__WEBPACK_IMPORTED_MODULE_4__["Conversor"].FromMercator(so, width, height), 1).topology < 0.5) continue;
                var se = new src_model_point__WEBPACK_IMPORTED_MODULE_1__["Point"](1 + x, 1 + y, 0);
                if (_this6.GetInformation(src_utils_conversor__WEBPACK_IMPORTED_MODULE_4__["Conversor"].FromMercator(se, width, height), 1).topology < 0.5) continue;
                allVectors.push(new src_model_vector__WEBPACK_IMPORTED_MODULE_7__["Vector"](no, ne));
                allVectors.push(new src_model_vector__WEBPACK_IMPORTED_MODULE_7__["Vector"](ne, se));
                allVectors.push(new src_model_vector__WEBPACK_IMPORTED_MODULE_7__["Vector"](se, so));
                allVectors.push(new src_model_vector__WEBPACK_IMPORTED_MODULE_7__["Vector"](so, no));
                count++;
              }
            }

            console.log('allVectors', count, allVectors.length, new Date());
            var copyAllVectors = [].concat(allVectors);
            var condensedVectors = [];

            var _loop = function _loop() {
              var vector = copyAllVectors.pop();

              if (!vector.inverted.containsIn(copyAllVectors)) {
                condensedVectors.push(vector);
              } else {
                copyAllVectors = copyAllVectors.filter(function (v) {
                  return !v.equals(vector.inverted);
                });
              }
            };

            while (copyAllVectors.length > 0) {
              _loop();
            }

            console.log('condensedVectors', condensedVectors.length, new Date());
            var copyCondensedVectors = [].concat(condensedVectors);
            var layeredPaths = [];

            var _loop2 = function _loop2() {
              var layer = [];
              var startVector = copyCondensedVectors.pop();
              layer.push(startVector.copy);
              var runner = startVector.copy;

              while (!runner.end.equals(startVector.start)) {
                var vectorIdx = copyCondensedVectors.findIndex(function (v) {
                  return runner.end.equals(v.start);
                });
                runner = copyCondensedVectors.splice(vectorIdx, 1)[0];
                layer.push(runner.copy);
              }

              layeredPaths.push(layer);
            };

            while (copyCondensedVectors.length > 0) {
              _loop2();
            }

            console.log('layeredPaths', layeredPaths.length, new Date());
            var shrunkenLayeredPaths = [];
            layeredPaths.forEach(function (layer) {
              var shrunkenLayer = [];
              var runner = layer[0].copy;

              for (var i = 1; i < layer.length; i++) {
                if (runner.isCollinear(layer[i].end)) {
                  runner = new src_model_vector__WEBPACK_IMPORTED_MODULE_7__["Vector"](runner.start, layer[i].end);
                } else {
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
      }, {
        key: "GetShorlines",
        value: function GetShorlines() {
          var _this7 = this;

          var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.0001;
          var ret = [];
          var coordinate = new src_model_coordinate__WEBPACK_IMPORTED_MODULE_3__["Coordinate"](0, 0);
          var polygon = this.probePolygon(coordinate, step);
          ret.push(polygon.map(function (p) {
            return _this7.GetInformation(p);
          }));
          return ret;
        }
      }, {
        key: "probePolygon",
        value: function probePolygon() {
          var _this8 = this;

          var coordinate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new src_model_coordinate__WEBPACK_IMPORTED_MODULE_3__["Coordinate"](0, 0);
          var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.0001;
          var polygon = [];
          var points = [];

          do {
            coordinate = coordinate.addLongitude(step);
            points = this.probeNearShorepoints(coordinate, step);
          } while (points === []);

          var _loop3 = function _loop3() {
            var newPoints = [];
            points.forEach(function (point) {
              // const point = points[0];
              polygon.push(point);
              console.log('point', point, polygon.length);
              newPoints.push.apply(newPoints, _toConsumableArray(_this8.probeNearShorepoints(point, step)));
            });
            var beforeCount = newPoints.length;
            points = newPoints.filter(function (newPoint) {
              return polygon.find(function (p) {
                return p.latitude === newPoint.latitude && p.longitude === newPoint.longitude;
              }) === undefined;
            });
            var afterCount = points.length;

            if (afterCount === beforeCount) {
              console.log('problema', afterCount, beforeCount);
            } else if (afterCount > beforeCount) {
              console.log('mais problema ainda', afterCount, beforeCount);
            } else {
              console.log('ok', afterCount, beforeCount);
            }
          };

          while (points.length !== 0) {
            _loop3();
          }

          console.log('finito', polygon);
          return polygon;
        }
      }, {
        key: "probeNearShorepoints",
        value: function probeNearShorepoints(coordinate) {
          var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.0001;
          var points = [];
          var east = coordinate.addLongitude(step);
          var eastInfo = this.GetInformation(east, 1, true);

          if (eastInfo.Biome === src_enum_world_biome__WEBPACK_IMPORTED_MODULE_5__["WorldBiome"].shoreline) {
            // console.log('east', east, eastInfo);
            points.push(east);
          }

          var south = coordinate.addLatitude(step);
          var southInfo = this.GetInformation(south, 1, true);

          if (southInfo.Biome === src_enum_world_biome__WEBPACK_IMPORTED_MODULE_5__["WorldBiome"].shoreline) {
            // console.log('south', south, southInfo);
            points.push(south);
          }

          var west = coordinate.addLongitude(-step);
          var westInfo = this.GetInformation(west, 1, true);

          if (westInfo.Biome === src_enum_world_biome__WEBPACK_IMPORTED_MODULE_5__["WorldBiome"].shoreline) {
            // console.log('west', west, westInfo);
            points.push(west);
          }

          var north = coordinate.addLatitude(-step);
          var northInfo = this.GetInformation(north, 1, true);

          if (northInfo.Biome === src_enum_world_biome__WEBPACK_IMPORTED_MODULE_5__["WorldBiome"].shoreline) {
            // console.log('north', north, northInfo);
            points.push(north);
          }

          return points;
        }
      }]);

      return WorldGenerator;
    }();
    /***/

  },

  /***/
  "./src/_model/coordinate.ts":
  /*!**********************************!*\
    !*** ./src/_model/coordinate.ts ***!
    \**********************************/

  /*! exports provided: Coordinate */

  /***/
  function src_modelCoordinateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Coordinate", function () {
      return Coordinate;
    });
    /* harmony import */


    var src_utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/_utils/helper */
    "./src/_utils/helper.ts");

    var Coordinate = /*#__PURE__*/function () {
      function Coordinate(latitude, longitude, radius) {
        _classCallCheck(this, Coordinate);

        this.latitude = latitude;
        this.longitude = longitude;
        this.radius = radius;
      }

      _createClass(Coordinate, [{
        key: "addLatitude",
        value: function addLatitude(value) {
          var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
          return new Coordinate(src_utils_helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].TruncDecimals(this.latitude + value, precision), this.longitude);
        }
      }, {
        key: "addLongitude",
        value: function addLongitude(value) {
          var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
          return new Coordinate(this.latitude, src_utils_helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].TruncDecimals(this.longitude + value, precision));
        }
      }]);

      return Coordinate;
    }();
    /***/

  },

  /***/
  "./src/_model/layer.ts":
  /*!*****************************!*\
    !*** ./src/_model/layer.ts ***!
    \*****************************/

  /*! exports provided: Layer */

  /***/
  function src_modelLayerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Layer", function () {
      return Layer;
    });
    /* harmony import */


    var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./vector */
    "./src/_model/vector.ts");

    var Layer = /*#__PURE__*/function () {
      function Layer() {
        var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var innerLayers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        _classCallCheck(this, Layer);

        this.limit = limit;
        this.innerLayers = innerLayers;
      }

      _createClass(Layer, [{
        key: "shrunk",
        value: function shrunk() {
          var layer = _toConsumableArray(this.limit);

          var array = [];
          var runner = layer[0].copy;

          for (var i = 1; i < layer.length; i++) {
            if (runner.isCollinear(layer[i].end)) {
              runner = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"](runner.start, layer[i].end);
            } else {
              array.push(runner.copy);
              runner = layer[i].copy;
            }
          }

          array.push(runner.copy);
          return new Layer(array, this.innerLayers);
        }
      }, {
        key: "inside",
        value: function inside(point) {
          var inside = false;

          for (var i = 0, j = this.limit.length - 1; i < this.limit.length; j = i++) {
            var xi = this.limit[i].start.X,
                yi = this.limit[i].start.Y;
            var xj = this.limit[j].start.X,
                yj = this.limit[j].start.Y;
            var intersect = yi > point.Y != yj > point.Y && point.X < (xj - xi) * (point.Y - yi) / (yj - yi) + xi;
            if (intersect) inside = !inside;
          }

          return inside;
        }
      }, {
        key: "AsSvgPath",
        value: function AsSvgPath() {
          var path = '';

          if (this.limit.length > 0) {
            path = 'M ';
            this.limit.forEach(function (vector, idx) {
              path += "".concat(idx > 0 ? 'L ' : '').concat(vector.start.X, " ").concat(vector.start.Y, " ");
            });
            path += "Z ";
          }

          this.innerLayers.forEach(function (layer) {
            path += layer.AsSvgPath();
          });
          return path;
        }
      }, {
        key: "Process",
        value: function Process() {
          this.innerLayers.sort(Layer.DefaultSort);

          var copyInnerLayers = _toConsumableArray(this.innerLayers);

          for (var i = 0; i < copyInnerLayers.length; i++) {
            for (var j = this.innerLayers.length - 1; j > 0; j--) {
              if (i !== j) {
                if (copyInnerLayers[i].inside(this.innerLayers[j].limit[0].start)) {
                  var innerLayer = this.innerLayers.splice(j, 1)[0];
                  copyInnerLayers[i].innerLayers.push(innerLayer);
                }
              }
            }
          }

          for (var _i = 0; _i < copyInnerLayers.length; _i++) {
            if (copyInnerLayers[_i].innerLayers.length > 0) {
              copyInnerLayers[_i].Process();
            }
          }
        }
      }], [{
        key: "DefaultSort",
        value: function DefaultSort(l1, l2) {
          if (l1.limit.length > l2.limit.length) return 1;
          if (l1.limit.length < l2.limit.length) return -1;
          return 0;
        }
      }, {
        key: "Transform",
        value: function Transform(allVectors) {
          var copyVectors = _toConsumableArray(allVectors);

          var closedCircuits = [];

          var _loop4 = function _loop4() {
            var vectors = [];
            var startVector = copyVectors.pop();
            vectors.push(startVector.copy);
            var runner = startVector.copy;

            while (!runner.end.equals(startVector.start)) {
              var vectorIdx = copyVectors.findIndex(function (v) {
                return runner.end.equals(v.start);
              });
              runner = copyVectors.splice(vectorIdx, 1)[0];
              vectors.push(runner.copy);
            }

            closedCircuits.push(new Layer(vectors).shrunk());
          };

          while (copyVectors.length > 0) {
            _loop4();
          } //console.log('closedCircuits', closedCircuits.length, new Date());


          var layer = new Layer();
          layer.innerLayers = closedCircuits;
          layer.Process();
          return layer;
        }
      }]);

      return Layer;
    }();
    /***/

  },

  /***/
  "./src/_model/point.ts":
  /*!*****************************!*\
    !*** ./src/_model/point.ts ***!
    \*****************************/

  /*! exports provided: Point */

  /***/
  function src_modelPointTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Point", function () {
      return Point;
    });

    var Point = /*#__PURE__*/function () {
      function Point(X, Y, Z) {
        _classCallCheck(this, Point);

        this.X = X;
        this.Y = Y;
        this.Z = Z;
      }

      _createClass(Point, [{
        key: "equals",
        value: function equals(point) {
          return this.X === point.X && this.Y === point.Y && this.Z === point.Z;
        }
      }]);

      return Point;
    }();
    /***/

  },

  /***/
  "./src/_model/vector.ts":
  /*!******************************!*\
    !*** ./src/_model/vector.ts ***!
    \******************************/

  /*! exports provided: Vector */

  /***/
  function src_modelVectorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Vector", function () {
      return Vector;
    });

    var Vector = /*#__PURE__*/function () {
      function Vector(start, end) {
        _classCallCheck(this, Vector);

        this.start = start;
        this.end = end;
      }

      _createClass(Vector, [{
        key: "containsIn",
        value: function containsIn(array) {
          for (var i = 0; i < array.length; i++) {
            if (array[i].start.equals(this.start) && array[i].end.equals(this.end)) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "isCollinear",
        value: function isCollinear(a) {
          var A = this.start.X * (this.end.Y - a.Y) + this.end.X * (a.Y - this.start.Y) + a.X * (this.start.Y - this.end.Y);
          return A === 0;
        }
      }, {
        key: "isClockwise",
        value: function isClockwise(vector) {
          var dot = (this.end.X - this.start.X) * (vector.end.X - vector.start.X) + (this.end.Y - this.start.Y) * (vector.end.Y - vector.start.Y);
          var det = (this.end.X - this.start.X) * (vector.end.Y - vector.start.Y) - (this.end.Y - this.start.Y) * (vector.end.X - vector.start.X);
          return Math.atan2(det, dot) > 0;
        }
      }, {
        key: "equals",
        value: function equals(vector) {
          return this.start.equals(vector.start) && this.end.equals(vector.end);
        }
      }, {
        key: "inverted",
        get: function get() {
          return new Vector(this.end, this.start);
        }
      }, {
        key: "copy",
        get: function get() {
          return new Vector(this.start, this.end);
        }
      }], [{
        key: "AddInIfInvertNotExistsAndRemoveItFrom",
        value: function AddInIfInvertNotExistsAndRemoveItFrom(vectors, vector) {
          var vectorIdx = vectors.findIndex(function (v) {
            return vector.inverted.equals(v);
          });

          if (vectorIdx > -1) {
            vectors.splice(vectorIdx, 1);
          } else {
            vectors.push(vector);
          }

          return vectors;
        }
      }]);

      return Vector;
    }();
    /***/

  },

  /***/
  "./src/_model/world.info.ts":
  /*!**********************************!*\
    !*** ./src/_model/world.info.ts ***!
    \**********************************/

  /*! exports provided: WorldInfo */

  /***/
  function src_modelWorldInfoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorldInfo", function () {
      return WorldInfo;
    });
    /* harmony import */


    var src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/_enum/world.biome */
    "./src/_enum/world.biome.ts");
    /* harmony import */


    var src_utils_conversor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/_utils/conversor */
    "./src/_utils/conversor.ts");

    var WorldInfo = /*#__PURE__*/function () {
      function WorldInfo(topology, trees, ores, coordinate, point) {
        _classCallCheck(this, WorldInfo);

        this.topology = topology;
        this.trees = trees;
        this.ores = ores;
        this.coordinate = coordinate;
        this.point = point;
      }

      _createClass(WorldInfo, [{
        key: "Biome",
        get: function get() {
          if (this.topology < 0.35) {
            return src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].deepWater;
          } else if (this.topology < 0.50) {
            return src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].swallowWater;
          } else if (this.topology === 0.50) {
            return src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].shoreline;
          } else if (this.topology < 0.53) {
            return src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].beach;
          } else if (this.topology < 0.56) {
            return src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].sandy;
          } else if (this.topology < 0.62) {
            return src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].grass;
          } else if (this.topology < 0.70) {
            return src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].woods;
          } else if (this.topology < 0.75) {
            return src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].forest;
          } else if (this.topology < 0.80) {
            return src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].mountain;
          } else if (this.topology < 0.90) {
            return src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].snow;
          }
        }
      }, {
        key: "Shoreline",
        get: function get() {
          return this.topology === 0.50;
        }
      }, {
        key: "Tree",
        get: function get() {
          return this.trees < 0.20 && this.Biome == src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__["WorldBiome"].grass;
        }
      }, {
        key: "Ore",
        get: function get() {
          return this.ores < 0.25;
        }
      }, {
        key: "LatitudeLine",
        get: function get() {
          return src_utils_conversor__WEBPACK_IMPORTED_MODULE_1__["Conversor"].ToDegrees(this.coordinate.latitude) % 10 === 0;
        }
      }, {
        key: "LongitudeLine",
        get: function get() {
          return src_utils_conversor__WEBPACK_IMPORTED_MODULE_1__["Conversor"].ToDegrees(this.coordinate.longitude) % 10 === 0;
        }
      }], [{
        key: "AllInOne",
        value: function AllInOne(data) {
          var ret = [];
          data.forEach(function (inner) {
            return inner.forEach(function (d) {
              if (d !== null) {
                ret.push(d);
              }
            });
          });
          return ret;
        }
      }, {
        key: "RemoveOne",
        value: function RemoveOne(points, item, width, height) {
          var itemPoint = src_utils_conversor__WEBPACK_IMPORTED_MODULE_1__["Conversor"].ToMercator(item.coordinate, width, height);
          points[itemPoint.X].splice(itemPoint.Y, 1);
        }
      }, {
        key: "GetAllNear",
        value: function GetAllNear(points, point, width, height) {
          var variator = 2;
          return points.filter(function (p) {
            var itemPoint = src_utils_conversor__WEBPACK_IMPORTED_MODULE_1__["Conversor"].ToMercator(p.coordinate, width, height);
            return itemPoint.X >= point.X - variator && itemPoint.X <= point.X + variator && itemPoint.Y >= point.Y - variator && itemPoint.Y <= point.Y + variator && itemPoint.Z >= point.Z - variator && itemPoint.Z <= point.Z + variator;
          });
        }
      }]);

      return WorldInfo;
    }();
    /***/

  },

  /***/
  "./src/_utils/biome.color.ts":
  /*!***********************************!*\
    !*** ./src/_utils/biome.color.ts ***!
    \***********************************/

  /*! exports provided: BiomeColor */

  /***/
  function src_utilsBiomeColorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BiomeColor", function () {
      return BiomeColor;
    });
    /* harmony import */


    var src_enum_world_biome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/_enum/world.biome */
    "./src/_enum/world.biome.ts");

    var BiomeColor = /*#__PURE__*/function () {
      function BiomeColor() {
        _classCallCheck(this, BiomeColor);
      }

      _createClass(BiomeColor, null, [{
        key: "Get",
        value: function Get(type) {
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
      }]);

      return BiomeColor;
    }();

    BiomeColor.swallowWater = [0, 191, 255, 255];
    BiomeColor.deepWater = [65, 105, 225, 255];
    BiomeColor.grass = [50, 205, 50, 255];
    BiomeColor.woods = [34, 139, 34, 255];
    BiomeColor.forest = [0, 100, 0, 255];
    BiomeColor.sandy = [210, 180, 140, 255];
    BiomeColor.beach = [238, 214, 175, 255];
    BiomeColor.mountain = [139, 137, 137, 255];
    BiomeColor.snow = [255, 250, 250, 255];
    /***/
  },

  /***/
  "./src/_utils/conversor.ts":
  /*!*********************************!*\
    !*** ./src/_utils/conversor.ts ***!
    \*********************************/

  /*! exports provided: Conversor, RAD2DEG, PI_4 */

  /***/
  function src_utilsConversorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Conversor", function () {
      return Conversor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RAD2DEG", function () {
      return RAD2DEG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PI_4", function () {
      return PI_4;
    });
    /* harmony import */


    var src_model_coordinate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/_model/coordinate */
    "./src/_model/coordinate.ts");
    /* harmony import */


    var src_model_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/_model/point */
    "./src/_model/point.ts");

    var Conversor = /*#__PURE__*/function () {
      function Conversor() {
        _classCallCheck(this, Conversor);
      }

      _createClass(Conversor, null, [{
        key: "ToPolar",
        value: function ToPolar(point) {
          return new src_model_coordinate__WEBPACK_IMPORTED_MODULE_0__["Coordinate"](Math.atan(point.Y / point.Z), Math.atan(Math.sqrt(Math.pow(point.X, 2) + Math.pow(point.Y, 2) / point.Z)), Math.sqrt(Math.pow(point.X, 2) + Math.pow(point.Y, 2) + Math.pow(point.Z, 2)));
        }
      }, {
        key: "ToCardian",
        value: function ToCardian(coordinate) {
          return new src_model_point__WEBPACK_IMPORTED_MODULE_1__["Point"](coordinate.radius * Math.cos(Conversor.ToRadians(coordinate.longitude)) * Math.cos(Conversor.ToRadians(coordinate.latitude)), coordinate.radius * Math.sin(Conversor.ToRadians(coordinate.longitude)) * Math.cos(Conversor.ToRadians(coordinate.latitude)), coordinate.radius * Math.sin(Conversor.ToRadians(coordinate.latitude)));
        }
      }, {
        key: "ToDegrees",
        value: function ToDegrees(angle) {
          return angle * (180 / Math.PI);
        }
      }, {
        key: "ToRadians",
        value: function ToRadians(angle) {
          return angle * (Math.PI / 180);
        }
      }, {
        key: "ToMercator",
        value: function ToMercator(coordinate, width, height) {
          return new src_model_point__WEBPACK_IMPORTED_MODULE_1__["Point"](Math.round((coordinate.longitude + 180) / (360 / width)), Math.round((coordinate.latitude + 90) / (180 / height)), 0);
        }
      }, {
        key: "FromMercator",
        value: function FromMercator(point, width, height) {
          return new src_model_coordinate__WEBPACK_IMPORTED_MODULE_0__["Coordinate"](point.Y * (180 / height) - 90, point.X * (360 / width) - 180);
        }
      }, {
        key: "ToIdxWidth",
        value: function ToIdxWidth(point, width) {
          return point.X + point.Y * width;
        }
      }]);

      return Conversor;
    }();

    var RAD2DEG = 180 / Math.PI;
    var PI_4 = Math.PI / 4;
    /***/
  },

  /***/
  "./src/_utils/helper.ts":
  /*!******************************!*\
    !*** ./src/_utils/helper.ts ***!
    \******************************/

  /*! exports provided: Helper */

  /***/
  function src_utilsHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Helper", function () {
      return Helper;
    });
    /* harmony import */


    var src_model_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/_model/point */
    "./src/_model/point.ts");

    var Helper = /*#__PURE__*/function () {
      function Helper() {
        _classCallCheck(this, Helper);
      }

      _createClass(Helper, null, [{
        key: "TruncDecimals",
        value: function TruncDecimals(num) {
          var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
          return Math.trunc(Math.pow(10, precision) * num) / Math.pow(10, precision);
        }
      }, {
        key: "CloneAny",
        value: function CloneAny(data) {
          return JSON.parse(JSON.stringify(data));
        }
      }, {
        key: "Pitagoras",
        value: function Pitagoras(a, b) {
          return Math.sqrt(Math.pow(a.X - b.X, 2) + Math.pow(a.Y - b.Y, 2) + Math.pow(a.Z - b.Z, 2));
        }
      }, {
        key: "DecimalPlaces",
        value: function DecimalPlaces(n) {
          var a;
          return (a = (n.toString().charAt(0) == '-' ? n - 1 : n + 1).toString().replace(/^-?[0-9]+\.?([0-9]+)$/, '$1').length) >= 1 ? a : 0;
        }
      }, {
        key: "IdxMatrixToVector",
        value: function IdxMatrixToVector(point, width) {
          var stepX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
          var stepY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
          return Math.trunc(point.Y * width + point.X);
        }
      }, {
        key: "IdxVectorToMatrix",
        value: function IdxVectorToMatrix(idx, width) {
          var stepX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
          var stepY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
          return new src_model_point__WEBPACK_IMPORTED_MODULE_0__["Point"](idx % width, idx / width, 0);
        }
      }, {
        key: "Matrix",
        value: function Matrix() {
          var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
          var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
          var action = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
            return null;
          };
          var initx = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var inity = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
          var increment = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
          var ini = new Date();
          var count = 0;

          for (var y = inity; y < height; y += increment) {
            for (var x = initx; x < width; y += increment) {
              if (action !== null) action(x, y);
            }
          }

          var end = new Date();
          console.log("duration [Matrix] ".concat(initx > 0 || inity > 0 ? "".concat(initx, ":").concat(inity) : '', " ").concat(width, ":").concat(height, " ").concat(increment > 1 ? increment : '', " ").concat(Helper.TruncDecimals(end.getTime() / 1000 - ini.getTime() / 1000, 3), "s with count: ").concat(count));
        }
      }]);

      return Helper;
    }();
    /***/

  },

  /***/
  "./src/_utils/perlin.noise.ts":
  /*!************************************!*\
    !*** ./src/_utils/perlin.noise.ts ***!
    \************************************/

  /*! exports provided: Perlin */

  /***/
  function src_utilsPerlinNoiseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Perlin", function () {
      return Perlin;
    });

    var Perlin = /*#__PURE__*/function () {
      function Perlin() {
        _classCallCheck(this, Perlin);
      }

      _createClass(Perlin, null, [{
        key: "perlin",
        value: function perlin(x, y, z, p) {
          var X = Math.floor(x) & 255,
              Y = Math.floor(y) & 255,
              Z = Math.floor(z) & 255;
          x -= Math.floor(x);
          y -= Math.floor(y);
          z -= Math.floor(z);
          var u = this.fade(x),
              v = this.fade(y),
              w = this.fade(z);
          var A = p[X] + Y,
              AA = p[A] + Z,
              AB = p[A + 1] + Z,
              B = p[X + 1] + Y,
              BA = p[B] + Z,
              BB = p[B + 1] + Z;
          return this.lerp(w, this.lerp(v, this.lerp(u, this.grad(p[AA], x, y, z), this.grad(p[BA], x - 1, y, z)), this.lerp(u, this.grad(p[AB], x, y - 1, z), this.grad(p[BB], x - 1, y - 1, z))), this.lerp(v, this.lerp(u, this.grad(p[AA + 1], x, y, z - 1), this.grad(p[BA + 1], x - 1, y, z - 1)), this.lerp(u, this.grad(p[AB + 1], x, y - 1, z - 1), this.grad(p[BB + 1], x - 1, y - 1, z - 1))));
        }
      }, {
        key: "fade",
        value: function fade(t) {
          return t * t * t * (t * (t * 6 - 15) + 10);
        }
      }, {
        key: "lerp",
        value: function lerp(t, a, b) {
          return a + t * (b - a);
        }
      }, {
        key: "grad",
        value: function grad(hash, x, y, z) {
          var h = hash & 15;
          var u = h < 8 ? x : y,
              v = h < 4 ? y : h == 12 || h == 14 ? x : z;
          return ((h & 1) == 0 ? u : -u) + ((h & 2) == 0 ? v : -v);
        }
      }, {
        key: "octaves",
        value: function octaves(x, y, z, p) {
          var persistence = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0.5;

          var _octaves = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 6;

          var total = 0;
          var frequency = 1;
          var amplitude = 1;
          var maxValue = 0;

          for (var i = 0; i < _octaves; i++) {
            total += this.perlin(x * frequency, y * frequency, z * frequency, p) * amplitude;
            maxValue += amplitude;
            amplitude *= persistence;
            frequency *= 2;
          }

          return total / maxValue;
        }
      }, {
        key: "Noise",
        value: function Noise(point) {
          var factor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          var p = arguments.length > 2 ? arguments[2] : undefined;
          var persistence = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.5;
          var octaves = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 6;
          return this.octaves(point.X / factor, point.Y / factor, point.Z / factor, p, persistence, octaves);
        }
      }, {
        key: "RandomP",
        get: function get() {
          var array = new Uint8Array(256);
          window.crypto.getRandomValues(array);
          var list = [];
          array.forEach(function (v) {
            return list.push(v);
          });
          return list;
        }
      }]);

      return Perlin;
    }();

    Perlin.DefaultP = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];
    /***/
  },

  /***/
  "./src/_utils/progress.ts":
  /*!********************************!*\
    !*** ./src/_utils/progress.ts ***!
    \********************************/

  /*! exports provided: Progress */

  /***/
  function src_utilsProgressTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Progress", function () {
      return Progress;
    });
    /* harmony import */


    var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./helper */
    "./src/_utils/helper.ts");

    var Progress = /*#__PURE__*/function () {
      function Progress(total) {
        _classCallCheck(this, Progress);

        this.step = 0;
        this.total = total;
        this.step = this.total / 10;
        this.progress = 0;
      }

      _createClass(Progress, [{
        key: "start",
        value: function start() {
          this.ini = new Date();
          console.log("start ".concat(this.total), this.ini);
        }
      }, {
        key: "stop",
        value: function stop() {
          var end = new Date();
          console.log("duration ".concat(_helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].TruncDecimals(end.getTime() / 1000 - this.ini.getTime() / 1000, 3), "s ").concat(end));
        }
      }, {
        key: "check",
        value: function check() {
          this.progress++;

          if (this.progress % this.step === 0) {
            console.log("".concat(Math.round(this.progress * 100 / this.total), "%"));
          }
        }
      }]);

      return Progress;
    }();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_component_map_tool_map_tool_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/_component/map-tool/map-tool.component */
    "./src/_component/map-tool/map-tool.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'World';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "map-tool");
        }
      },
      directives: [src_component_map_tool_map_tool_component__WEBPACK_IMPORTED_MODULE_1__["MapToolComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var src_component_map_tool_map_tool_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/_component/map-tool/map-tool.component */
    "./src/_component/map-tool/map-tool.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], src_component_map_tool_map_tool_component__WEBPACK_IMPORTED_MODULE_4__["MapToolComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], src_component_map_tool_map_tool_component__WEBPACK_IMPORTED_MODULE_4__["MapToolComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/fumasa/world/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map