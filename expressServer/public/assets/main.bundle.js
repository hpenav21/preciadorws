webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-t-1\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngxf_uploader__ = __webpack_require__("../../../../ngxf-uploader/ngxf-uploader.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__crc16_crc16_component__ = __webpack_require__("../../../../../src/app/crc16/crc16.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__fileuploader_fileuploader_component__ = __webpack_require__("../../../../../src/app/fileuploader/fileuploader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ledcommands_ledcommands_component__ = __webpack_require__("../../../../../src/app/ledcommands/ledcommands.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__update_prices_update_prices_component__ = __webpack_require__("../../../../../src/app/update-prices/update-prices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home/:id', component: __WEBPACK_IMPORTED_MODULE_12__ledcommands_ledcommands_component__["a" /* LedcommandsComponent */] },
    { path: 'updatePrices', component: __WEBPACK_IMPORTED_MODULE_14__update_prices_update_prices_component__["a" /* UpdatePricesComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_12__ledcommands_ledcommands_component__["a" /* LedcommandsComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__crc16_crc16_component__["a" /* Crc16Component */],
            __WEBPACK_IMPORTED_MODULE_11__fileuploader_fileuploader_component__["a" /* FileuploaderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__ledcommands_ledcommands_component__["a" /* LedcommandsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__update_prices_update_prices_component__["a" /* UpdatePricesComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngxf_uploader__["a" /* NgxfUploaderModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_13__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__angular_common__["DecimalPipe"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/crc16/crc16.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/crc16/crc16.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  crc16 works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/crc16/crc16.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Crc16Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Crc16Component = (function () {
    function Crc16Component() {
        this.data = "";
    }
    Crc16Component.prototype.ngOnInit = function () {
        var crc16 = this.generateCRC(this.data);
        console.log("crc result: " + crc16);
    };
    Crc16Component.prototype.generateCRC = function (data) {
        var crc = 0x00;
        var j, i;
        var c;
        var result = "";
        data = data.split(",");
        for (i = 0; i < data.length; i++) {
            c = data[i];
            if (c > 255) {
                throw new RangeError();
            }
            crc = crc ^ (c << 8);
            for (j = 0; j < 8; j++) {
                if (crc & 0x8000)
                    crc = ((crc << 1) ^ 0x1021);
                else
                    crc = crc << 1;
            }
        }
        result = ((crc ^ 0) & 0xFFFF).toString(16);
        //result = "0x"+result.substr(0,2) + "," + "0x"+result.substr(2,2)
        result = this.formatHEX(result.substr(0, 2)) + "," + this.formatHEX(result.substr(2, 2));
        return "," + result.toLocaleUpperCase();
    };
    Crc16Component.prototype.formatHEX = function (value) {
        value = value.toUpperCase();
        if (value.length < 2)
            value = "0" + value;
        return "0x" + value;
    };
    return Crc16Component;
}());
Crc16Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-crc16',
        template: __webpack_require__("../../../../../src/app/crc16/crc16.component.html"),
        styles: [__webpack_require__("../../../../../src/app/crc16/crc16.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Crc16Component);

//# sourceMappingURL=crc16.component.js.map

/***/ }),

/***/ "../../../../../src/app/fileuploader/fileuploader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fileuploader/fileuploader.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- File input for upload without using the plugin. -->\n<input id=\"file\" type=\"file\" style=\"height:30px\" />\n<!-- button to trigger the file upload when submitted -->\n<br>\n<img src=\"../assets/images/uploadIcon2.png\" class=\"btn btn-success btn-s\" (click)=\"upload()\" style=\"width:50px; height:50px\">"

/***/ }),

/***/ "../../../../../src/app/fileuploader/fileuploader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileuploaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var URL = 'http://localhost:8000/upload';
var FileuploaderComponent = (function () {
    function FileuploaderComponent(http, el) {
        this.http = http;
        this.el = el;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: URL, itemAlias: 'file' });
    }
    FileuploaderComponent.prototype.ngOnInit = function () {
        //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        //overide the onCompleteItem property of the uploader so we are 
        //able to deal with the server response.
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log("ImageUpload:uploaded:", item, status, response);
        };
    };
    //the function which handles the file upload without using a plugin.
    FileuploaderComponent.prototype.upload = function () {
        //locate the file element meant for the file upload.
        var inputEl = this.el.nativeElement.querySelector('#file');
        //get the total amount of files attached to the file input.
        var fileCount = inputEl.files.length;
        //create a new fromdata instance
        var formData = new FormData();
        //check if the filecount is greater than zero, to be sure a file was selected.
        if (fileCount > 0) {
            //append the key name 'file' with the first file in the element
            formData.append('file', inputEl.files.item(0));
            console.log("files...");
            console.log(this.el);
            //call the angular http method
            this.http
                .post(URL, formData).map(function (res) { return res.json(); }).subscribe(
            //map the success function and alert the response
            function (success) {
                alert(success.status);
            }, function (error) {
                alert(error.status);
            });
        }
    };
    return FileuploaderComponent;
}());
FileuploaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fileuploader',
        template: __webpack_require__("../../../../../src/app/fileuploader/fileuploader.component.html"),
        styles: [__webpack_require__("../../../../../src/app/fileuploader/fileuploader.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], FileuploaderComponent);

var _a, _b;
//# sourceMappingURL=fileuploader.component.js.map

/***/ }),

/***/ "../../../../../src/app/ledcommands/ledcommands.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-grid-tile {\r\n    background: #C5CAE9;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ledcommands/ledcommands.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n\n    <span>Gas Led Control</span>\n    <span class=\"example-spacer\"></span>\n    <button md-button [mdMenuTriggerFor]=\"appMenu\"><md-icon>menu</md-icon> Menu</button>\n\n</md-toolbar>\n\n<md-menu #appMenu=\"mdMenu\">\n    <button md-menu-item> Settings </button>\n    <button md-menu-item> Help </button>\n</md-menu>\n\n\n<table style=\"width:100%; background-color: #c5c9e8\">\n    <tr style=\" height:60px\">\n        <th></th>\n        <th>Preciador LED</th>\n        <th></th>\n    </tr>\n    <tr>\n        <td style=\"width:30%; text-align: center; background-color: rgba(0, 151, 19, .5)\">\n            <md-input-container class=\"md-block\">\n                <input mdInput placeholder=\"Magna\" [(ngModel)]=\"magna\">\n            </md-input-container>\n        </td>\n        <td style=\"width:30%; text-align: center; background-color: rgba(190, 30, 45, .5)\">\n            <md-input-container>\n                <input mdInput placeholder=\"Premium\" [(ngModel)]=\"premium\">\n            </md-input-container>\n        </td>\n        <td style=\"width:30%; text-align: center; background-color: rgba(34, 31, 30, .5)\">\n            <md-input-container>\n                <input mdInput placeholder=\"Diesel\" [(ngModel)]=\"diesel\">\n            </md-input-container>\n        </td>\n    </tr>\n\n</table>\n\n<table style=\"width:100%; background-color: #c5c9e8\">\n\n    <tr style=\" height:10px\">\n\n    </tr>\n    <tr>\n        <td></td>\n        <td style=\"text-align: center;\">\n            <app-fileuploader></app-fileuploader>\n            <td></td>\n    </tr>\n    <tr style=\" height:70px\">\n\n    </tr>\n    <tr>\n        <td></td>\n        <td style=\"text-align: center;\">\n            <button md-raised-button (click)=\"publishPrices()\">Publicar Precios en Preciador LED</button></td>\n        <td></td>\n    </tr>\n    <tr style=\" height:60px\">\n\n    </tr>\n</table>"

/***/ }),

/***/ "../../../../../src/app/ledcommands/ledcommands.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LedcommandsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crc16_crc16_component__ = __webpack_require__("../../../../../src/app/crc16/crc16.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LedcommandsComponent = (function () {
    function LedcommandsComponent(http, decPipe, route) {
        this.http = http;
        this.decPipe = decPipe;
        this.route = route;
        this.magna = "0.0";
        this.premium = "0.0";
        this.diesel = "0.0";
        this.crc16 = new __WEBPACK_IMPORTED_MODULE_2__crc16_crc16_component__["a" /* Crc16Component */]();
    }
    LedcommandsComponent.prototype.ngOnInit = function () {
        var cmd = "";
        var crc16 = new __WEBPACK_IMPORTED_MODULE_2__crc16_crc16_component__["a" /* Crc16Component */]();
        console.log("Router ... ");
        console.log(this.route);
        this.route.params
            .subscribe(function (params) {
            console.log(params); // reading url parameters
        });
        console.log("Oninit Led Commands...");
        this.getPricesFromFile();
    };
    LedcommandsComponent.prototype.publishPrices = function () {
        // 0xFE       0x0F       0x01           0x01             0x01     0x08    0x01 0x02 0x03 0x04 0x05 0x06 0x07 0x08  0xFF 	     0x56   0x4A
        //  ↓	         ↓          ↓              ↓                ↓        ↓       ↓	  ↓    ↓    ↓    ↓    ↓    ↓	  ↓     ↓           ↓      ↓
        // guide	    15      485address  displaying content  power-off  content   1	  2		 3	  4		 5	  6    7	  8   End mark	 CRC16 check code  
        //       total bytes                  function          save     length
        console.log("Set price called...");
        console.log(this.magna + "  " + this.premium + "  " + this.diesel);
        var cmd = "";
        var part1 = "0xFE";
        var totalBytes = "";
        var part2 = "0x01,0x01,0x01";
        var contentLength = "";
        var dataValue = "";
        var thisRef = this;
        dataValue = this.getPriceHex(this.magna) + "," + this.getPriceHex(this.premium) + "," + this.getPriceHex(this.diesel) + ",";
        //**************************** */
        //dataValue = "0x10,0x19,0x12,0x03,0x16,0x11,0x01,0x17,0x11,0x16,";
        //dataValue = "0x01,0x19,0x03,0x07,0x10,0x14,0x06,0x10,"
        //**************************** */
        contentLength = this.formatHEX((dataValue.split(",").length - 1).toString(16));
        totalBytes = this.formatHEX((Number.parseInt(contentLength) + 7).toString(16)); //Adds 7 due to that is the number of fixed parameters in command
        cmd = part1 + "," + totalBytes + "," + part2 + "," + contentLength + "," + dataValue + "0xFF";
        cmd = cmd + this.crc16.generateCRC(cmd);
        console.log("price cmd " + cmd);
        this.http.get('http://localhost:8000/serialport/' + cmd).subscribe(function (data) {
            // Read the result field from the JSON response.
            console.log("java call log data...");
            console.log(data);
        });
        return cmd;
    };
    LedcommandsComponent.prototype.getPricesFromFile = function () {
        var _this = this;
        console.log("Get prices from File called...");
        var thisRef = this;
        this.http.get('http://localhost:8000/archivo/a').subscribe(function (data) {
            // Read the result field from the JSON response.
            var obj = data;
            _this.parseFileCRE(obj.prices);
            //this.setPrices();
        });
    };
    LedcommandsComponent.prototype.updatePrices_getPrices = function () {
        var _this = this;
        console.log("Get prices from File called...");
        var thisRef = this;
        this.http.get('http://localhost:8000/archivo/a').subscribe(function (data) {
            // Read the result field from the JSON response.
            var obj = data;
            _this.parseFileCRE(obj.prices);
            _this.publishPrices();
        });
    };
    LedcommandsComponent.prototype.updatePriceListFile = function () {
        console.log("Copy price File from GasControl called...");
        var thisRef = this;
        this.http.get('http://localhost:8000/copyfile/a').subscribe(function (data) {
            // Read the result field from the JSON response.
            var obj = data;
            thisRef.getPricesFromFile();
        });
    };
    LedcommandsComponent.prototype.parseFile = function (data) {
        var rows = [];
        rows = data.split('\n');
        console.log("in parse...");
        console.log(rows.length);
        var thisRef = this;
        rows.forEach(function (row) {
            var columns = [];
            if (row.includes("PREMIUM") || row.includes("MAGNA") || row.includes("DIESEL")) {
                columns = row.split("\",\"");
                var product = columns[0].replace("\"", "");
                switch (product) {
                    case "MAGNA":
                        thisRef.magna = columns[4].replace("\"", "");
                        break;
                    case "PREMIUM":
                        thisRef.premium = columns[4].replace("\"", "");
                        break;
                    case "DIESEL":
                        thisRef.diesel = columns[4].replace("\"", "");
                        break;
                }
            }
        });
    };
    LedcommandsComponent.prototype.parseFileCRE = function (data) {
        var rows = [];
        rows = data.split('\n');
        console.log("in parse CRE ....");
        console.log(rows.length);
        var thisRef = this;
        rows.forEach(function (row) {
            var columns = [];
            if (row.includes(",,,AGUASCALIENTES")) {
                columns = row.split(",");
                console.log("prices row found....");
                console.log(columns);
                thisRef.magna = columns[4].replace("$", "");
                thisRef.premium = columns[5].replace("$", "");
                thisRef.diesel = columns[6].replace("$", "");
            }
        });
    };
    LedcommandsComponent.prototype.getPriceHex = function (price) {
        var digit1, digit2, digit3, digit4;
        var val1, val2, val3, val4;
        price = this.decPipe.transform(price, "2.2-2");
        var result = "";
        console.log("setting price: >>" + price);
        //apagar digito 0x10* //
        //digito con punto decimal valor debe ser superior a 0x10 eg. "3."  0x14
        //formato general para un tablero 88.88 (dos entero, dos decimales) sera 0x11,0x11,0x11,0x11 (Cuatro posiciones hexadecimales)
        //Cada digito tiene el siguiente comportamiento: 0x10 = apagar digito; valor del digito = 0x11 + valor. Ejem para mostar un 5: 0x11 + 0x05  = 0x16
        //0x10 = apagar digito; cero = 0x11; 1 = 0x12; etc.
        //Ejemplo completo: mostrar el precio 20.45 ==>  0x13, 0x11, 0x15, 0x16      
        if (price.length == 5) {
            digit1 = price.substr(0, 1);
            digit2 = price.substr(1, 1);
            digit3 = price.substr(3, 1);
            digit4 = price.substr(4, 1);
        }
        if (digit1 == "0")
            val1 = 16; //0x10
        else
            val1 = 17 + parseInt(digit1, 10);
        val2 = 17 + parseInt(digit2, 10);
        val3 = 17 + parseInt(digit3, 10);
        val4 = 17 + parseInt(digit4, 10);
        digit1 = this.formatHEX(val1.toString(16));
        digit2 = this.formatHEX(val2.toString(16));
        digit3 = this.formatHEX(val3.toString(16));
        digit4 = this.formatHEX(val4.toString(16));
        result = digit1 + "," + digit2 + "," + digit3 + "," + digit4;
        return result;
    };
    /**
      getPriceHex(price:string, pricePos:number){
          var digit1, digit2, digit3, digit4;
          var decimalPartHex = "";
          var integerPartHex = "";
    
          var result = "";
    
          console.log("piping -> " + this.decPipe.transform(price, "2.2-2"));
    
          price = this.decPipe.transform(price, "2.2-2");
    
          if(price.length == 5){
            digit1 = price.substr(0,1);
            digit2 = price.substr(1,1); //(Number.parseInt(price.substr(1,1),10) + 11).toString(16);
            digit3 = price.substr(3,1);
            digit4 = price.substr(4,1); //(Number.parseInt(price.substr(4,1),10) + 11).toString(16);
    
    
    
            // If digit3 = 0 then it means decimal part is less than one
            // In this case command decimal part is as follows: 17 + secondDecimal => convert to hex
            // eg decimal part for number 7.05 should be 17 + 5 = 22 or Hex 0x16
            if( digit3 == "0" && digit4 != "0"){
                decimalPartHex = this.formatHEX((Number.parseInt(digit4,10) + 17).toString(16));
            }
    
            // If number decimal part is .00 then command decimal part is always Hex 0x11
            if(digit3 == "0" && digit4 == "0"){
                decimalPartHex = "0x11";
            }
    
            // When number decimal part is greather or equal than .10 then command decimal part is converted as follows
            // Decimal digit1 is converted to hexadecimal value
            // Decimal digit2 is converted to digit2 + 17 (or 0x11)
            // eg 1.10  Digit 1 from Decimal part = 1 then convert to hex = 0x01
            //          Digit 2 from Decimal part = 0 then 0 + 17 = 17 to hex = 0x11  So command decimal will be 0x01 0x11
            // eg 2.23  Digit 1 from Decimal part = 2 then convert to hex = 0x02
            //          Digit 2 from Decimal part = 3 then 3 + 17 = 20 to hex = 0x14  Sp command decimal will be 0x02 0x14
            if(digit3 != "0"){
                decimalPartHex = this.formatHEX(Number.parseInt(digit3,10).toString(16)) + "," + this.formatHEX((Number.parseInt(digit4,10) + 17).toString(16));
            }
    
            
            // When digit1 in Integer number is equals 0 then command first decimal value will be 0x10 except for second price value which is 0x11
            // Second command digit is converted as follows Digit + 17 to hex
            // eg. Assuming first price value 05.75: First integer command digit =  0x10
            //                                      Second integer command digit = 5 + 17 = 22 to Hex = 0x16   ==> 0x10 0x16
            // eg. Assuming second price value 09.95: First integer command digit =  0x11
            //                                       Second integer command digit = 9 + 17 = 26 to Hex = 0x1A  ==> 0x11 0x1A
            if(digit1 == "0" && digit2=="0"){
              if(pricePos != 2){
                  integerPartHex = "0x10,0x11";
              }
              else {
                  integerPartHex = "0x11";
              }
              //integerPartHex += this.formatHEX((Number.parseInt(digit2,10)+17).toString(16));
            }
            else{
                integerPartHex = this.formatHEX(Number.parseInt(digit1,10).toString(16)) + "," + this.formatHEX((Number.parseInt(digit2,10)+17).toString(16));
            }
    
            result = integerPartHex + "," + decimalPartHex;
    
    
            result = "0x10,0x11,0x11";
            console.log(result);
    
            return result;
          }
      }
    
    **/
    LedcommandsComponent.prototype.setBrigthnes = function (daytime, nighttime) {
        //  0xFE       0x07          0x01             0x02                 0x07	                 0x00          0xFF      0x09    0x08
        //    ↓	        ↓             ↓                ↓                     ↓                    ↓             ↓          ↓      ↓
        //  guide	  total 7byte   485address   brightness function   daytime brightness   Night brightness   End mark   CRC check code
        var part1 = "0xFE,0x07,0x01,0x02,";
        var cmd = part1 + this.formatHEX(daytime.toString(16)) + "," + this.formatHEX(nighttime.toString(16)) + ",0xFF";
        return cmd;
    };
    LedcommandsComponent.prototype.setTime = function (year, month, day, hour, minutes, seconds, dayofweek) {
        //  0xFE   0x0d      0x01       0x03        0x11           0x10  0x01  0x1C  0x09    0x1E    0x14      0x04     0xFF        0x5C  0x6B
        //   ↓      ↓         ↓          ↓           ↓              ↓     ↓     ↓     ↓       ↓       ↓         ↓        ↓           ↓     ↓ 
        // guide  Length  485 address  command  date/time format   2016  Jan.   28  9Hour  minutes  seconds  Thursday  end mark  CRC check code
        // From above example date/time format 0x11 = (1)YYYYMMDD / (1)HH:MM:SS
        // Another example format 0x22 = (2)MMDDYYYY / (2)HH:MM
        //Date format：0  not displayed
        //      1、YYYYMMDD
        //      2、MMDDYYYY
        //      3、DDMMYYYY
        //      4、YYMMDD
        //      5、MMDDYY
        //      6、DDMMYY
        //      7、MMDD
        //      8、DDMM
        //Time format：0  not displayed
        //      1、HH:MM:SS
        //      2、HH:MM
        //      3、WW:HH:MM:SS
        //      4、WW:HH:MM
        var part1 = "0xFE,0x0D,0x01,0x03,0x11,";
        var part2 = this.formatHEX(year.toString(16)) + "," + this.formatHEX(month.toString(16)) + "," + this.formatHEX(day.toString(16)) +
            "," + this.formatHEX(hour.toString(16)) + "," + this.formatHEX(minutes.toString(16)) + "," +
            this.formatHEX(seconds.toString(16)) + "," + this.formatHEX(dayofweek.toString(16));
        var cmd = part1 + part2 + ",0xFF";
        return cmd;
    };
    LedcommandsComponent.prototype.cardTest = function () {
        //  0xFE    0x05        0x01          0xEE         0xFF       0x56   0xC6  
        //   ↓       ↓           ↓             ↓            ↓          ↓      ↓
        // guide   Length    485 address   test command   end mark   CRC check code
        var cmd = "0xFE,0x05,0x01,0xEE,0xFF";
        return cmd;
    };
    LedcommandsComponent.prototype.readBrightnessLevels = function () {
        // 0xFe   0x05      0x01       0x05       0xFF     0x9A  0x8E       
        //  ↓      ↓         ↓          ↓          ↓         ↓    ↓
        //guide  lenght  485address   command   end mark     CRC16
        //Response Format Example
        // 0xFe    0x06      0x01           0x07                  0x00               0xFF      0x31  0x4E    
        //  ↓       ↓         ↓              ↓                     ↓                  ↓         ↓     ↓
        //guide   lenght  485address   daytime brightness   nighttime brightness   end mark   CRC check code
        var cmd = "0xFE,0x05,0x01,0x05,0xFF";
        return cmd;
    };
    LedcommandsComponent.prototype.readTimeValue = function () {
        //  0xFe    0x05      0x01      0x06      0xFF     0xCF 0xDD       
        //   ↓       ↓         ↓         ↓         ↓         ↓   ↓
        // guide   lenght  485address  command   end mark    CRC16
        //Response Format Example
        // 0xFe    0x0B      0x01      0x10  0x01  0x1C  0x09   0x1E    0x14    0x04      0xFF     xB9 0x41   
        //  ↓       ↓         ↓         ↓     ↓     ↓     ↓      ↓       ↓       ↓         ↓        ↓    ↓
        // guide  lenght  485 address  2016  Jan.   28  9hour  30mins  20secs  Thursday  end mark    CRC16 
        var cmd = "0xFE,0x05,0x01,0x06,0xFF";
        return cmd;
    };
    LedcommandsComponent.prototype.readPrices = function () {
        //  0xFE    0x05      0x01      0x04      0xFF      0xA9 0xBF       
        //   ↓       ↓         ↓         ↓         ↓         ↓   ↓
        // guide   lenght  485address  command   end mark    CRC16
        //Response Format Example
        // 0xFE    0x11      0x01     0x0C       0x01   0x12 0x01 0x12 0x02 0x13 0x02 0x13 0x03 0x14 0x03 0x14    0xFF   0xAA 0x71   
        //  ↓       ↓         ↓         ↓         ↓     ↓    ↓    ↓    ↓    ↓    ↓    ↓    ↓    ↓    ↓    ↓        ↓      ↓    ↓
        // guide  lenght  485 address #Prices    Dig1. Dig2 Dig3 Dig4 Dig1 Dig2 Dig3 Dig4 Dig1 Dig2 Dig3 Dig4   end mark   CRC16 
        //                           0x0c / 4   ||    Gas Price 1   ||   Gas Price 2    ||     Gas Price 3   ||
        //                             = 3
        // For Gas Prices digits >= 11 then digit value = v - 11.  v.gr if digit = 12 then digit value = 12 - 11 = 1 
        var cmd = "0xFE,0x05,0x01,0x04,0xFF,0xA9,0xBF";
        this.http.get('http://localhost:8000/serialport/' + cmd).subscribe(function (data) {
            // Read the result field from the JSON response.
            var obj = data;
        });
        return cmd;
    };
    LedcommandsComponent.prototype.opencloseScreen = function (openclose) {
        // 0xfe   0x05      0x01          0x07           0xff        0xfc 0xec
        //  ↓      ↓         ↓             ↓              ↓           ↓    ↓
        // guide lenght  485 addresss  07 close screen  end mark   CRC check code
        // 							               08 open screen
        var cmd = "";
        if (openclose == "close")
            cmd = "0xFE,0x05,0x01,0x07,0xFF";
        else
            cmd = "0xFE,0x05,0x01,0x08,0xFF";
        return cmd;
    };
    LedcommandsComponent.prototype.formatHEX = function (value) {
        value = value.toUpperCase();
        if (value.length < 2)
            value = "0" + value;
        return "0x" + value;
    };
    return LedcommandsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], LedcommandsComponent.prototype, "magna", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], LedcommandsComponent.prototype, "premium", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], LedcommandsComponent.prototype, "diesel", void 0);
LedcommandsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ledcommands',
        template: __webpack_require__("../../../../../src/app/ledcommands/ledcommands.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ledcommands/ledcommands.component.css")]
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["DecimalPipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["DecimalPipe"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], LedcommandsComponent);

var _a, _b, _c;
//# sourceMappingURL=ledcommands.component.js.map

/***/ }),

/***/ "../../../../../src/app/update-prices/update-prices.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/update-prices/update-prices.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  update-prices works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/update-prices/update-prices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatePricesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ledcommands_ledcommands_component__ = __webpack_require__("../../../../../src/app/ledcommands/ledcommands.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdatePricesComponent = (function () {
    function UpdatePricesComponent(http, decPipe, router) {
        this.http = http;
        this.decPipe = decPipe;
        this.router = router;
    }
    UpdatePricesComponent.prototype.ngOnInit = function () {
        var ledComponent = new __WEBPACK_IMPORTED_MODULE_4__ledcommands_ledcommands_component__["a" /* LedcommandsComponent */](this.http, this.decPipe, this.router);
        console.log("update prices component...");
        ledComponent.updatePrices_getPrices();
    };
    return UpdatePricesComponent;
}());
UpdatePricesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-update-prices',
        template: __webpack_require__("../../../../../src/app/update-prices/update-prices.component.html"),
        styles: [__webpack_require__("../../../../../src/app/update-prices/update-prices.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["DecimalPipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["DecimalPipe"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], UpdatePricesComponent);

var _a, _b, _c;
//# sourceMappingURL=update-prices.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map