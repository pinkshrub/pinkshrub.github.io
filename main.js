(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lists/lists.component */ "./src/app/lists/lists.component.ts");
/* harmony import */ var _calendars_calendars_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendars/calendars.component */ "./src/app/calendars/calendars.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _construction_construction_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./construction/construction.component */ "./src/app/construction/construction.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: "", pathMatch: "full", redirectTo: "/dojo/calendars/mean" },
    { path: "dojo", component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "olio", component: _construction_construction_component__WEBPACK_IMPORTED_MODULE_6__["ConstructionComponent"] },
    { path: "dojo/resources", component: _lists_lists_component__WEBPACK_IMPORTED_MODULE_3__["ListsComponent"], children: [
            { path: "", pathMatch: "full", redirectTo: "/dojo/resources/mid/mean" },
            { path: ":phase", children: [
                    { path: ":list", component: _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"] }
                ] }
        ] },
    // {path: "dojo/resources/:phase/:list", component: ConstructionComponent},
    { path: "dojo/calendars/:stack", component: _calendars_calendars_component__WEBPACK_IMPORTED_MODULE_4__["CalendarsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* header */\r\nheader{\r\n    position: relative;\r\n    border-top: 15px;\r\n}\r\nheader h1{\r\n    display: inline;\r\n}\r\nheader>a{\r\n    position: absolute;\r\n    right: 0;\r\n    top: 25%;\r\n    text-decoration: none;\r\n}\r\n/* nav bar touch ups */\r\nnav>a{\r\n    width: 25%;\r\n    display: inline-block;\r\n    text-align: center;\r\n    text-decoration: none;\r\n}\r\n.selected{\r\n    background-color: dodgerblue;\r\n    color: white;\r\n    border-radius: 3px;\r\n    padding: 2px;\r\n}\r\n/* dividers */\r\n.divider{\r\n    border-top: 1px solid #eee;\r\n    margin: 5px 0;\r\n}\r\n/* footer */\r\nfooter{\r\n    padding: 5px 0;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <header>\n        <h1><span>Dojo</span><span>.</span><span>Shrub</span></h1><a [routerLink]=\"['']\">HUB</a>\n        <div class=\"divider\"></div>\n        <nav>\n            <a [routerLink]=\"['dojo']\" (click)=\"setCurLink('dojo')\"><span [ngClass]=\"activeLink('dojo')\">Home</span></a>\n            <a [routerLink]=\"['dojo','calendars','mean']\" (click)=\"setCurLink('calendars')\"><span [ngClass]=\"activeLink('calendars')\">Calendars</span></a>\n            <a [routerLink]=\"['dojo','resources','mid']\" (click)=\"setCurLink('resources')\"><span [ngClass]=\"activeLink('resources')\">Resources</span></a>\n            <a [routerLink]=\"['olio']\" (click)=\"setCurLink('olio')\"><span [ngClass]=\"activeLink('olio')\">OLIO</span></a>\n        </nav>\n        <div class=\"divider\"></div>\n    </header>\n    <router-outlet></router-outlet>\n    <footer>\n        <div class=\"divider\"></div>\n        <nav>\n            <a href=\"https://github.com/pinkshrub\">github</a>\n            <a href=\"/\">aweber@codingdojo.com</a>\n            <a href=\"https://www.linkedin.com/in/alan-weber-44a550122/\">linkedIn</a>\n            <a href=\"http://dojoquestions.fun\">dojoquestions</a>\n        </nav>\n    </footer>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.curLink = "calendars";
    }
    AppComponent.prototype.activeLink = function (link) {
        return {
            selected: (this.curLink === link)
        };
    };
    AppComponent.prototype.setCurLink = function (link) {
        var valid = (['dojo', 'calendars', 'resources', 'olio'].indexOf(link) !== -1);
        this.curLink = valid ? link : 'dojo';
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _calendars_calendars_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendars/calendars.component */ "./src/app/calendars/calendars.component.ts");
/* harmony import */ var _olio_olio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./olio/olio.component */ "./src/app/olio/olio.component.ts");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lists/lists.component */ "./src/app/lists/lists.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _day_day_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./day/day.component */ "./src/app/day/day.component.ts");
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./calendar.service */ "./src/app/calendar.service.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _construction_construction_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./construction/construction.component */ "./src/app/construction/construction.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _calendars_calendars_component__WEBPACK_IMPORTED_MODULE_6__["CalendarsComponent"],
                _olio_olio_component__WEBPACK_IMPORTED_MODULE_7__["OlioComponent"],
                _lists_lists_component__WEBPACK_IMPORTED_MODULE_8__["ListsComponent"],
                _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_9__["CalendarComponent"],
                _day_day_component__WEBPACK_IMPORTED_MODULE_10__["DayComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_12__["ListComponent"],
                _construction_construction_component__WEBPACK_IMPORTED_MODULE_13__["ConstructionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]
            ],
            providers: [_calendar_service__WEBPACK_IMPORTED_MODULE_11__["CalendarService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calendar.service.ts":
/*!*************************************!*\
  !*** ./src/app/calendar.service.ts ***!
  \*************************************/
/*! exports provided: CalendarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarService", function() { return CalendarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mean */ "./src/app/mean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarService = /** @class */ (function () {
    function CalendarService() {
    }
    CalendarService.prototype.getCal = function (stack) {
        return Object(_mean__WEBPACK_IMPORTED_MODULE_1__["meanCalendar"])();
    };
    CalendarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CalendarService);
    return CalendarService;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.component.css":
/*!*************************************************!*\
  !*** ./src/app/calendar/calendar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* week nav bar */\r\nnav>a{\r\n    display: inline-block;\r\n    width: 25%;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n}\r\n.active{\r\n    background-color: dodgerblue;\r\n    border-radius: 3px;\r\n    padding: 2px;\r\n    color: white; \r\n}\r\n.divider{\r\n    border-top: 1px solid #eee;\r\n    margin: 3px 0;\r\n}\r\n/* table styles */\r\ntbody tr{\r\n    padding: 0;\r\n}\r\ntbody tr ul{\r\n    height: 75px;\r\n    margin: 0;\r\n}\r\n.scrolly{\r\n    overflow-y: scroll;\r\n}\r\n.scrolly::-webkit-scrollbar-thumb{\r\n    background: dodgerblue;\r\n    border-radius: 3px;\r\n}\r\n.scrolly::-webkit-scrollbar{\r\n    width: 5px;\r\n    \r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/calendar/calendar.component.html":
/*!**************************************************!*\
  !*** ./src/app/calendar/calendar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"calendar\">\n  <nav>\n    <a (click)=\"setWeek(0)\" [ngClass]=\"amIActive(0)\">Week 1</a>\n    <a (click)=\"setWeek(1)\" [ngClass]=\"amIActive(1)\">Week 2</a>\n    <a (click)=\"setWeek(2)\" [ngClass]=\"amIActive(2)\">Week 3</a>\n    <a (click)=\"setWeek(3)\" [ngClass]=\"amIActive(3)\">Week 4</a>\n  </nav>\n  <div class=\"divider\"></div>\n  <div class=\"week\">\n    <table>\n      <thead>\n        <tr>\n          <th><!-- for deetz --></th>\n          <th>Monday</th>\n          <th>Tuesday</th>\n          <th>Wednesday</th>\n          <th>Thursday</th>\n          <th>Friday</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let block of schedule_blocks\">\n          <td>{{ block }}</td>\n          <td>\n            <ul class=\"scrolly\">\n              <li *ngFor=\"let item of cur_cal['weeks'][week][0][block]\"><span>{{item}}</span></li>\n            </ul>\n          </td>\n          <td>\n            <ul class=\"scrolly\">\n              <li *ngFor=\"let item of cur_cal['weeks'][week][1][block]\"><span>{{item}}</span></li>\n            </ul>\n          </td>\n          <td>\n            <ul class=\"scrolly\">\n              <li *ngFor=\"let item of cur_cal['weeks'][week][2][block]\"><span>{{item}}</span></li>\n            </ul>\n          </td>\n          <td>\n            <ul class=\"scrolly\">\n              <li *ngFor=\"let item of cur_cal['weeks'][week][3][block]\"><span>{{item}}</span></li>\n            </ul>\n          </td>\n          <td>\n            <ul class=\"scrolly\">\n              <li *ngFor=\"let item of cur_cal['weeks'][week][4][block]\"><span>{{item}}</span></li>\n            </ul>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/calendar/calendar.component.ts":
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.component.ts ***!
  \************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../calendar.service */ "./src/app/calendar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(_datebook) {
        this._datebook = _datebook;
        this.schedule_blocks = ["objectives",
            "algorithms",
            "lecture",
            "collab",
            "lunch",
            "afternoon",
            "eod",
            "reading"];
    }
    CalendarComponent.prototype.ngOnInit = function () {
        this.week = 0;
        this.cur_cal = this._datebook.getCal("mean");
        // console.log(this.cur_cal);
    };
    CalendarComponent.prototype.setWeek = function (num) {
        this.week = num % 4;
    };
    CalendarComponent.prototype.amIActive = function (wk) {
        return {
            active: (wk == this.week)
        };
    };
    CalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.css */ "./src/app/calendar/calendar.component.css")]
        }),
        __metadata("design:paramtypes", [_calendar_service__WEBPACK_IMPORTED_MODULE_1__["CalendarService"]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/calendars/calendars.component.css":
/*!***************************************************!*\
  !*** ./src/app/calendars/calendars.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* calendars nav bar */\r\nnav{\r\n    margin: 3px 0;\r\n}\r\nnav>a{\r\n    width: calc(100%/6);\r\n    text-align: center;\r\n    display: inline-block;\r\n    box-sizing: border-box;\r\n}\r\n.active{\r\n    background-color: dodgerblue;\r\n    border-radius: 3px;\r\n    padding: 2px;\r\n    color: white;\r\n}\r\n.divider{\r\n    border-top: 1px solid #eee;\r\n}"

/***/ }),

/***/ "./src/app/calendars/calendars.component.html":
/*!****************************************************!*\
  !*** ./src/app/calendars/calendars.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"row\">\n  <nav>\n    <a (click)=\"showCalendar('mean')\" [ngClass]=\"amIActive('webfun')\">Web Fun.</a>\n    <a (click)=\"showCalendar('mean')\" [ngClass]=\"amIActive('python')\">python</a>\n    <a (click)=\"showCalendar('mean')\" [ngClass]=\"amIActive('csharp')\">C#</a>\n    <a (click)=\"showCalendar('mean')\" [ngClass]=\"amIActive('mean')\">MEAN</a>\n    <a (click)=\"showCalendar('mean')\" [ngClass]=\"amIActive('java')\">Java</a>\n    <a (click)=\"showCalendar('mean')\" [ngClass]=\"amIActive('career')\">Career</a>\n  </nav>\n  <div class=\"divider\"></div>\n  <app-calendar></app-calendar>\n</main>"

/***/ }),

/***/ "./src/app/calendars/calendars.component.ts":
/*!**************************************************!*\
  !*** ./src/app/calendars/calendars.component.ts ***!
  \**************************************************/
/*! exports provided: CalendarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarsComponent", function() { return CalendarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarsComponent = /** @class */ (function () {
    function CalendarsComponent(_route) {
        this._route = _route;
    }
    CalendarsComponent.prototype.ngOnInit = function () {
        this.showCalendar();
    };
    CalendarsComponent.prototype.showCalendar = function () {
        console.log(this._route.params.subscribe(function (params) { return console.log(params['stack']); }));
        this.cur_cal = 'mean';
    };
    CalendarsComponent.prototype.amIActive = function (calendar) {
        var res = {};
        if (calendar == this.cur_cal) {
            res['active'] = true;
        }
        return res;
    };
    CalendarsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calendars',
            template: __webpack_require__(/*! ./calendars.component.html */ "./src/app/calendars/calendars.component.html"),
            styles: [__webpack_require__(/*! ./calendars.component.css */ "./src/app/calendars/calendars.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CalendarsComponent);
    return CalendarsComponent;
}());



/***/ }),

/***/ "./src/app/construction/construction.component.css":
/*!*********************************************************!*\
  !*** ./src/app/construction/construction.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/construction/construction.component.html":
/*!**********************************************************!*\
  !*** ./src/app/construction/construction.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>This page is Under Construction, I appreciate your patience.</h1>\n</div>"

/***/ }),

/***/ "./src/app/construction/construction.component.ts":
/*!********************************************************!*\
  !*** ./src/app/construction/construction.component.ts ***!
  \********************************************************/
/*! exports provided: ConstructionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstructionComponent", function() { return ConstructionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConstructionComponent = /** @class */ (function () {
    function ConstructionComponent() {
    }
    ConstructionComponent.prototype.ngOnInit = function () {
    };
    ConstructionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-construction',
            template: __webpack_require__(/*! ./construction.component.html */ "./src/app/construction/construction.component.html"),
            styles: [__webpack_require__(/*! ./construction.component.css */ "./src/app/construction/construction.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConstructionComponent);
    return ConstructionComponent;
}());



/***/ }),

/***/ "./src/app/day/day.component.css":
/*!***************************************!*\
  !*** ./src/app/day/day.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/day/day.component.html":
/*!****************************************!*\
  !*** ./src/app/day/day.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"day\">\n  <h3>Monday</h3>\n  <div class=\"period\" (click)=\"show('goals')\">\n    <span *ngIf=\"!show_goals\">Goals</span>\n    <ul *ngIf=\"show_goals\">\n      <li *ngFor=\"let i of day_data['goals']\">{{i}}</li>\n    </ul>\n  </div>\n  <div class=\"period\">\n    <span (click)=\"show('algorithms')\">Algorithms</span>\n    <ul *ngIf=\"show_algos\">\n      <li *ngFor=\"let i of day_data['algorithms']\">{{i}}</li>\n    </ul>\n  </div>\n  <div class=\"period\">\n    <span (click)=\"show('lecture')\">Lecture</span>\n    <ul *ngIf=\"show_lecture\">\n      <li *ngFor=\"let i of day_data['lecture']\">{{i}}</li>\n    </ul>\n  </div>\n  <div class=\"period\">\n    <span (click)=\"show('collab')\">Group Activity</span>\n    <ul *ngIf=\"show_collab\">\n      <li *ngFor=\"let i of day_data['collab']\">{{i}}</li>\n    </ul>\n  </div>\n  <div class=\"period\">\n    <span (click)=\"show('lunch')\">Lunch</span>\n    <ul *ngIf=\"show_lunch\">\n      <li *ngFor=\"let i of day_data['lunch']\">{{i}}</li>\n    </ul>\n  </div>\n  <div class=\"period\">\n    <span (click)=\"show('afternoon')\">Afternoon</span>\n    <ul *ngIf=\"show_afternoon\">\n      <li *ngFor=\"let i of day_data['afternoon']\">{{i}}</li>\n    </ul>\n  </div>\n  <div class=\"period\">\n    <span (click)=\"show('eod')\">End of Day</span>\n    <ul *ngIf=\"show_eod\">\n      <li *ngFor=\"let i of day_data['eod']\">{{i}}</li>\n    </ul>\n  </div>\n  <div class=\"period\">\n    <span (click)=\"show('reading')\">Readings</span>\n    <ul *ngIf=\"show_reading\">\n      <li *ngFor=\"let i of day_data['reading']\">{{i}}</li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/day/day.component.ts":
/*!**************************************!*\
  !*** ./src/app/day/day.component.ts ***!
  \**************************************/
/*! exports provided: DayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayComponent", function() { return DayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DayComponent = /** @class */ (function () {
    function DayComponent() {
    }
    DayComponent.prototype.ngOnInit = function () {
        this.show_goals = false;
        this.show_algos = false;
        this.show_lecture = false;
        this.show_collab = false;
        this.show_lunch = false;
        this.show_afternoon = false;
        this.show_eod = false;
        this.show_reading = false;
    };
    DayComponent.prototype.show = function (section) {
        console.log("toggling " + section);
        switch (section) {
            case "goals": {
                this.show_goals = !this.show_goals;
                break;
            }
            case "algorithms": {
                this.show_algos = !this.show_algos;
                break;
            }
            case "lecture": {
                this.show_lecture = !this.show_lecture;
                break;
            }
            case "collab": {
                this.show_collab = !this.show_collab;
                break;
            }
            case "lunch": {
                this.show_lunch = !this.show_lunch;
                break;
            }
            case "afternoon": {
                this.show_afternoon = !this.show_afternoon;
                break;
            }
            case "eod": {
                this.show_eod = !this.show_eod;
                break;
            }
            case "reading": {
                this.show_reading = !this.show_reading;
                break;
            }
            default: {
                break;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DayComponent.prototype, "day_data", void 0);
    DayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-day',
            template: __webpack_require__(/*! ./day.component.html */ "./src/app/day/day.component.html"),
            styles: [__webpack_require__(/*! ./day.component.css */ "./src/app/day/day.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DayComponent);
    return DayComponent;
}());



/***/ }),

/***/ "./src/app/home/datas.ts":
/*!*******************************!*\
  !*** ./src/app/home/datas.ts ***!
  \*******************************/
/*! exports provided: Blurbs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blurbs", function() { return Blurbs; });
var Blurbs = {
    helloBlurb: "Hi! My name is Alan. For the past few years I've been involved with the Coding Dojo Community as a student, TA, Online Instructor and Onsite Instructor. This is a place where I share some helpful things for people that are varying stages of their dojo adventure. While this site is perhaps most geared towards those that are currenty students at Coding Dojo Seattle, it has a little bit for those that are starting their journeys or looking post-dojo as well. It is not an official site and isn't for admissions information, go<a href='https://codingdojo.com'> here </a>, but is a motley collection of helpful dojo things.",
    calendarBlurb: "The calendars section is probably what you are here for. Head on over to find information detailing what'll usually be going down daily in each stack. Information is included about algorithms, lectures, and extra learning sessions. Note that these are generic and may not include holidays or other atypical schedule wrinkles.",
    resourcesBlurb: "Coding Dojo has a lot of fantastic content, but it can feel like you aren't getting the full picture on some topics. I've collected a few resources that I have found neat or educational and linked them here. The pace of the program can also leave you struggling with certain concepts, algorithms, assignments or what's going on. I've organized these resources for a variety of topics the should be helpful to students before, during, and after their program.",
    olioBlurb: "This section contains extra resources that aren't directly related to specific chunks of dojo curriculum or parts of your time at the dojo. The content here primarily consists of various gist that I've assembled that provide light introductions to relevant topics that the dojo curriculum is light on. This includes stuff like a brief intorduction to testing, Alexa development, and OOP"
};


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tile{\r\n    /* background-color: green;  */\r\n}\r\n\r\nul{\r\n    /* height: 200px; */\r\n}\r\n\r\nli{\r\n    margin-top: 15px;\r\n    box-sizing: border-box;\r\n    min-height: 50px;\r\n    list-style: none;\r\n}\r\n\r\nli.selected{\r\n    min-height: 100px;\r\n}\r\n\r\nh3{\r\n    /* display: block; */\r\n    /* height: 45px;\r\n    margin-top:calc((100% - 45px)/2); */\r\n    text-align: center;\r\n}\r\n\r\n.selected>h3{\r\n    display: none;\r\n}\r\n\r\n.tile p{\r\n    display: none;\r\n}\r\n\r\n.tile.selected p{\r\n    display: block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=\"row\">\n    <article class=\"one-half column\">\n        <h2>Welcome to dojo.shrub!</h2>\n      <p>\n        {{helloText}}\n      </p>\n      <p>Alan</p>\n    </article>\n    <ul class=\"one-half column\">\n    <li [ngClass]=\"amIInfo('calendars')\" (click)=\"setInfo('calendars')\">\n      <h3 class=\"button whole column\">Calendars</h3>\n      <div>\n        <p>{{ calendarText }}</p>\n      </div>\n    </li>\n    <li [ngClass]=\"amIInfo('lists')\" (click)=\"setInfo('lists')\">\n      <h3 class=\"button whole column\">Resources</h3>\n      <div>\n        <p>{{ resourcesText }}</p>\n      </div>\n    </li>\n    <li [ngClass]=\"amIInfo('olio')\" (click)=\"setInfo('olio')\">\n      <h3 class=\"button whole column\">Olio</h3>\n      <div>\n        <p>{{ olioText }}</p>\n      </div>\n    </li>\n  </ul>\n</div>\n</main>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datas */ "./src/app/home/datas.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        var _this = this;
        this.helloText = _datas__WEBPACK_IMPORTED_MODULE_1__["Blurbs"].helloBlurb;
        this.calendarText = _datas__WEBPACK_IMPORTED_MODULE_1__["Blurbs"].calendarBlurb;
        this.resourcesText = _datas__WEBPACK_IMPORTED_MODULE_1__["Blurbs"].resourcesBlurb;
        this.olioText = _datas__WEBPACK_IMPORTED_MODULE_1__["Blurbs"].olioBlurb;
        this.idle = function () { return ({ idle: (_this.info_box === "") }); };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.info_box = "";
    };
    HomeComponent.prototype.setInfo = function (val) {
        this.info_box = val == this.info_box ? "" : val;
    };
    HomeComponent.prototype.amIInfo = function (val) {
        return {
            selected: (val == this.info_box),
            tile: true
        };
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/library.ts":
/*!****************************!*\
  !*** ./src/app/library.ts ***!
  \****************************/
/*! exports provided: Library */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Library", function() { return Library; });
var Library = {
    pre: {
        description: "This list is geared towards those that are at the beginning of their coding adventures. You'll find resources to help you apply to the dojo, prepare for you first stack, and to just get your feet wet in general. A lot of the stuff here isn't going to be just about coding but will include resources to help make your learning experience better and feel more directed. The place to start!",
        lists: [
            {
                title: "dojo-prep",
                description: "",
                list: [
                    {
                        title: "Learning How to Learn",
                        description: "A Free MOOC that provides information and sound reasoning supporting some very basic techniques to increase your ability to learn.",
                        link: "https://www.coursera.org/learn/learning-how-to-learn"
                    },
                    {
                        title: "Dojo Academy",
                        description: "Introductory content, lectures, and projects with Coding Dojo",
                        link: "http://www.codingdojo.com/academy"
                    },
                    {
                        title: "Algorithm App",
                        description: "A Coding Dojo provided place to go through an introduction to basic algorithms and concepts",
                        link: "http://algorithm.codingdojo.com/"
                    }
                ]
            },
            {
                title: "basic skillz",
                description: "",
                list: [
                    {
                        title: "Get Gud w/ Git",
                        description: "A Collection of content by Mary Rose Cook about implementing git",
                        link: "https://maryrosecook.com/blog/post/git-in-six-hundred-words"
                    },
                    {
                        title: "Learn to Navigate",
                        description: "A Game developed at MIT to introduce you to basic terminal commands",
                        link: "http://www.mprat.org/Terminus/"
                    },
                    {
                        title: "Thinking like a computer",
                        description: "A series of lectures delivered as part of Harvard's CS 150 series",
                        link: "https://online-learning.harvard.edu/course/cs50-introduction-computer-science"
                    }
                ]
            }
        ]
    },
    mid: {
        description: "The lists here are geared towards students that are currently in the dojo and working through one of the various stacks. You'll find neat external content for each stack, but it'll be biased towards the stacks and topics I am most fond/familiar with.",
        lists: [
            {
                title: "Web Fun.",
                description: "",
                list: [
                    { title: "HTML5 doctor",
                        description: "Understand what each element does!",
                        link: "http://html5doctor.com/"
                    },
                    { title: "Learn CSS tricks!",
                        description: "A place for learning rad new css things",
                        link: "https://css-tricks.com/"
                    }
                ]
            },
            {
                title: "Python",
                description: "",
                list: [
                    { title: "PYTHONTESTINGGOATAHHHHHH!",
                        description: "learn about TDD and django",
                        link: "http://www.obeythetestinggoat.com/"
                    },
                    { title: "DjangoGirls",
                        description: "Get better at django!",
                        link: "https://tutorial.djangogirls.org/en/"
                    }
                ]
            },
            {
                title: "C#",
                description: "",
                list: [
                    { title: "LINQ",
                        description: "You probably aren't doing it enough",
                        link: "http://www.obeythetestinggoat.com/"
                    },
                    { title: "C# design patterns",
                        description: "A good place to start at a good blog",
                        link: "https://www.c-sharpcorner.com/UploadFile/bd5be5/design-patterns-in-net/"
                    }
                ]
            },
            {
                title: "Java",
                description: "",
                list: [
                    { title: "Effective Java",
                        description: "shhhhhhhh!",
                        link: "https://github.com/seteda/books/blob/master/java_book/Effective%20Java%20-%20Programming%20Language%20Guide.pdf"
                    },
                    { title: "DOCS",
                        description: "learn",
                        link: "https://docs.oracle.com/javase/7/docs/api/"
                    }
                ]
            },
            {
                title: "Mean",
                description: "",
                list: [
                    { title: "Wingolog",
                        description: "Fantastically varied and detailed information, but I do enjoy the v8 engine content",
                        link: "http://wingolog.org/tags/v8"
                    },
                    { title: "How does Node do things?",
                        description: "Curious what single threaded non event blocking jargon words mean?",
                        link: "https://codeburst.io/how-node-js-single-thread-mechanism-work-understanding-event-loop-in-nodejs-230f7440b0ea"
                    },
                    { title: "Eloquent javascript",
                        description: "A lovely book to get more familiar with JS",
                        link: "https://eloquentjavascript.net/"
                    },
                    { title: "Angular developer map",
                        description: "Where do you go after the platform runs out?",
                        link: "https://github.com/sulco/angular-developer-roadmap?utm_source=mybridge&utm_medium=blog&utm_campaign=read_more"
                    },
                    { title: "Callbacks, Promises, Observables & async/await",
                        description: "We use these things. Learn why.",
                        link: "https://www.academind.com/learn/javascript/callbacks-vs-promises-vs-rxjs-vs-async-awaits/"
                    },
                    { title: "Managing State in Angular",
                        description: "Tired of throwing stuff into components & services willy-nilly? Level up!",
                        link: "https://blog.nrwl.io/managing-state-in-angular-applications-22b75ef5625f"
                    },
                    { title: "Why a NOSQL database?",
                        description: "A great look at NoSQL and why it is",
                        link: "https://www.couchbase.com/resources/why-nosql"
                    }
                ]
            },
            {
                title: "Project Week",
                description: "",
                list: [
                    { title: "Git Work Flows",
                        description: "Learn to Work Together",
                        link: "https://www.atlassian.com/git/tutorials/comparing-workflows"
                    },
                    { title: "AGILE & SCRUM",
                        description: "Learn a little about agile & scrum",
                        link: "https://blog.trello.com/beginners-guide-scrum-and-agile-project-management"
                    }
                ]
            }
        ]
    },
    post: {
        description: "This lists are for the graduates or, more generally, those that already have the basics down and are looking for continued education pathsl or some resources on getting into the indeustry.",
        lists: [
            {
                title: "learning",
                description: "",
                list: [
                    {
                        title: "Geeks for Geeks",
                        description: "An awesome place to learn algorithms",
                        link: "https://www.geeksforgeeks.org/"
                    },
                    {
                        title: "Free Code Camp",
                        description: "If you've made it this far without encountering it...woah",
                        link: "https://medium.freecodecamp.org/"
                    },
                    {
                        title: "Medium",
                        description: "A lovely place, here is there programming section",
                        link: "https://medium.com/tag/programming"
                    }
                ]
            },
            {
                title: "jobbing",
                description: "",
                list: [
                    {
                        title: "Indeed - a job website",
                        description: "A website with some job opportunities.",
                        link: "https://www.indeed.com/prime"
                    },
                    {
                        title: "Hacker News",
                        description: "Like reddit but in-tune with the industry. See what people are talking about",
                        link: "https://news.ycombinator.com/"
                    },
                    {
                        title: "Cracking the Coding Interview",
                        description: "CTCI's resources for jobbing",
                        link: "http://www.crackingthecodinginterview.com/resources.html"
                    }
                ]
            }
        ]
    }
};


/***/ }),

/***/ "./src/app/list.ts":
/*!*************************!*\
  !*** ./src/app/list.ts ***!
  \*************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
var List = /** @class */ (function () {
    function List(title) {
        this.title = title;
        this.list = [];
    }
    List.prototype.addListItem = function (item) {
        this.list.push(item);
    };
    List.prototype.addListItems = function (items) {
        // console.log("listing!")
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var i = items_1[_i];
            // console.log(i);
            this.list.push(i);
        }
        // console.log(this.list);
        return this;
    };
    return List;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li{\r\n    list-style: none;\r\n    text-align: center;\r\n    display: block;\r\n}\r\n\r\nli a{\r\n    text-decoration: none;\r\n}\r\n\r\nh4{\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h4>{{ _list.title }}</h4>\n  <ul>\n    <li *ngFor=\"let item of _list.list\" class=\"button\">\n      <a href=\"{{item.link}}\">{{ item.title }}</a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list */ "./src/app/list.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = /** @class */ (function () {
    function ListComponent() {
    }
    ListComponent.prototype.ngOnInit = function () {
        // console.log(this._list)
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _list__WEBPACK_IMPORTED_MODULE_1__["List"])
    ], ListComponent.prototype, "_list", void 0);
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/lists/lists.component.css":
/*!*******************************************!*\
  !*** ./src/app/lists/lists.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main{\r\n    height: 450px;\r\n    padding-top: 15px;\r\n}\r\n\r\n.listbutt{\r\n    width: 50%;\r\n    box-sizing: border-box;\r\n}"

/***/ }),

/***/ "./src/app/lists/lists.component.html":
/*!********************************************!*\
  !*** ./src/app/lists/lists.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"row\">\n <section class=\"navigating one-half column\">\n  <!-- list selection -->\n  <nav>\n    <button class=\"four columns\" (click)=\"setPhase('pre')\">pre-dojo</button>\n    <button class=\"four columns\" (click)=\"setPhase('mid')\">mid-dojo</button>\n    <button class=\"four columns\" (click)=\"setPhase('post')\">post-dojo</button>\n  </nav>\n  <!-- list info -->\n  <div>\n    <h3>{{ _phase }}</h3>\n    <p>{{ library[_phase]['description'] }}</p>\n    <nav>\n      <button class=\"listbutt\" *ngFor=\"let list of library[_phase]['lists']\" (click)=\"setCurList(list.title)\">{{list.title}}</button>\n    </nav>\n  </div>\n </section>\n <section class=\"list-display one-half column\">\n   <app-list [_list]=\"curList\"></app-list>\n </section>\n</main>"

/***/ }),

/***/ "./src/app/lists/lists.component.ts":
/*!******************************************!*\
  !*** ./src/app/lists/lists.component.ts ***!
  \******************************************/
/*! exports provided: ListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsComponent", function() { return ListsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../library */ "./src/app/library.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListsComponent = /** @class */ (function () {
    function ListsComponent() {
        this.library = _library__WEBPACK_IMPORTED_MODULE_1__["Library"];
    }
    ListsComponent.prototype.ngOnInit = function () {
        this.setPhase("mid");
    };
    ListsComponent.prototype.setPhase = function (phase) {
        if (phase in this.library) {
            this._phase = phase;
            if (this._phase == "post") {
                this._list = "jobbing";
            }
            else if (this._phase == "pre") {
                this._list = "dojo-prep";
            }
            else {
                this._phase = "mid";
                this._list = "Mean";
            }
        }
        else {
            this._phase = "mid";
            this._list = "Mean";
        }
        this.setCurList(this._list);
    };
    ListsComponent.prototype.setCurList = function (listName) {
        var phase = this._phase;
        for (var _i = 0, _a = this.library[phase]['lists']; _i < _a.length; _i++) {
            var list = _a[_i];
            if (list['title'] === listName) {
                this.curList = list;
            }
        }
    };
    ListsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lists',
            template: __webpack_require__(/*! ./lists.component.html */ "./src/app/lists/lists.component.html"),
            styles: [__webpack_require__(/*! ./lists.component.css */ "./src/app/lists/lists.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListsComponent);
    return ListsComponent;
}());



/***/ }),

/***/ "./src/app/mean.ts":
/*!*************************!*\
  !*** ./src/app/mean.ts ***!
  \*************************/
/*! exports provided: meanCalendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meanCalendar", function() { return meanCalendar; });
function meanCalendar() {
    return {
        name: "MEAN",
        weeks: [
            [
                {
                    day: "Monday",
                    date: null,
                    objectives: ["MEAN Stack overview", "scope & this", "ES6 goodies", "Asynch JS part I"],
                    algorithms: ["II: Arrays II", "III: Sorts"],
                    lecture: ["Dojo Way", "MEAN", "JavaScript", "'Pre' Content"],
                    collab: ["Trivia!"],
                    lunch: ["Eat the foods!"],
                    afternoon: ["Open Lab"],
                    eod: ["End of JS Fundamentals"],
                    reading: ["JS OOP", "ES6 OOP"]
                },
                {
                    day: "Tuesday",
                    date: null,
                    objectives: [],
                    algorithms: ["II: Arrays II", "III: Sorts"],
                    lecture: ["OOP in JS", "prototypes", "applications"],
                    collab: ["Ninja, Wizard, Samurai"],
                    lunch: ["Foods"],
                    afternoon: ["Open Lab"],
                    eod: [""],
                    reading: [""]
                },
                {
                    day: "Wednesday",
                    date: null,
                    objectives: [
                        "Introduce Node",
                        "Introduce Express",
                    ],
                    algorithms: [
                        "II: Arrays II",
                        "III: Sorts"
                    ],
                    lecture: [
                        "Introde Node",
                        "Introduce NPM",
                        "modules!",
                    ],
                    collab: ["Cars & Cats"],
                    lunch: ["Eat the foods!"],
                    afternoon: ["Introduce Express",
                        "Cars & Cats",
                        "Open Lab"],
                    eod: ["End of JS Fundamentals"],
                    reading: ["JS OOP", "ES6 OOP"]
                },
                {
                    day: "Thursday",
                    date: null,
                    objectives: [
                        "Moving data with express",
                        "via URL",
                        "via POST",
                        "HTTP verbs"
                    ],
                    algorithms: [
                        "II: Lists II",
                        "III: Sorts"
                    ],
                    lecture: [
                        "Form Submission",
                        "Request Response cycle redux",
                        "URL data"
                    ],
                    collab: ["Ninja Gold"],
                    lunch: ["Eat the foods!"],
                    afternoon: [
                        "Open Lab"
                    ],
                    eod: ["Survey Form"],
                    reading: ["Sockets"]
                },
                {
                    day: "Friday",
                    date: null,
                    objectives: [
                        "Socket Hackathon",
                        "Express Catch Up"
                    ],
                    algorithms: [
                        "II: Linked Lists II",
                        "III: Sorts"
                    ],
                    lecture: [
                        "Socketathon"
                    ],
                    collab: ["Socketathon"],
                    lunch: ["Eat the foods!"],
                    afternoon: ["3:30 Hackathon Presentations"],
                    eod: ["Group Chat"],
                    reading: [
                        "Mongo DB",
                        "mongoose intro"
                    ]
                }
            ],
            [
                {
                    day: "Monday",
                    date: null,
                    objectives: ["Introduce MongoDB",
                        "Introduce Mongoose"],
                    algorithms: ["II: Arrays II",
                        "III: Set Operations"],
                    lecture: ["Intro NoSQL dbs",
                        "Introduce MongoDB",
                        "Pre-Quiz-Bizz"],
                    collab: ["Intro 2 MongoDB"],
                    lunch: ["Eat the foods!"],
                    afternoon: ["Intro Mongoose",
                        "Associations",
                        "Validations",
                        "Queries"],
                    eod: ["Log & Reg"],
                    reading: ["Authentication",
                        "Associations"]
                },
                {
                    day: "Tuesday",
                    date: null,
                    objectives: ["Fuller understanding of Mongoose",
                        "Authentication Concepts",
                        "APIs & JSON"],
                    algorithms: ["II: Recursion",
                        "III: Set Operations",
                        "Practice OOP design w/ implementation"],
                    lecture: ["Mongoose lifecycle hooks",
                        "Asynchronouse JavaScript, pt. II",
                        "Virtuals",
                        "Authentication",
                        "Custom Validations"],
                    collab: ["Ninja Gold High Scores (no unique names)"],
                    lunch: ["Eat the foods!"],
                    afternoon: ["Open Lab"],
                    eod: ["Restful Task API"],
                    reading: ["Modularization",
                        "Restful Routing",
                        "Debugging TypeScript",
                        "Angular"]
                },
                {
                    day: "Wednesday",
                    date: null,
                    objectives: ["Introduce Fully Organized Mean",
                        "Overview Modularization + Why",
                        "Introduce TypeScript & Angular Syntaxes",
                        "Components & Services"],
                    algorithms: ["II: Recursion",
                        "III: Priority Queues"],
                    lecture: ["Modularization: why?",
                        "Restful Tasks API demo",
                        "Intro MEAN",
                        "Typescript",
                        "File & Project Structure"],
                    collab: ["Hello Angular",
                        "Typescript OOP"],
                    lunch: ["Eat the foods!"],
                    afternoon: ["Introduction to Angular pt. II",
                        "Typescript & Angular syntaxes",
                        "Handling Asynchronous Code",
                        "Services & Components & Modules"],
                    eod: ["API"],
                    reading: ["Up to Inputs",
                        "Observables",
                        "Events"]
                },
                {
                    day: "Thursday",
                    date: null,
                    objectives: ["Moving Data Around",
                        "Why services & Observables",
                        "Events",
                        "Data-Binding"],
                    algorithms: ["II: Recursion",
                        "III: Heaps"],
                    lecture: ["Talk through data management & movement",
                        "Events"],
                    collab: ["Ninja Gold"],
                    lunch: ["Eat the foods!"],
                    afternoon: ["Open Lab"],
                    eod: ["RESTful Tasks CRUD"],
                    reading: ["Routing"]
                },
                {
                    day: "Friday",
                    date: null,
                    objectives: ["Introduce Navigation",
                        "Recap MEAN Concepts"],
                    algorithms: ["II: Recursion",
                        "III: Heap Applications"],
                    lecture: ["Routing & URL as state",
                        "Recap: Observables & Promises",
                        "Route Params"],
                    collab: ["Ninja Gold w/pages"],
                    lunch: ["Eat the foods!"],
                    afternoon: ["Open Lab"],
                    eod: ["Weather API"],
                    reading: ["Nested Routes",
                        "Forms & Validations"]
                }
            ],
            [
                {
                    day: "Monday",
                    date: null,
                    objectives: ["Address larger misconceptions",
                        "Recap Routing & Form submission",
                        "Nested Routing&Components",],
                    algorithms: ["II: Linked Lists II",
                        "III: Hash Tables"],
                    lecture: ["Routing",
                        "Nested Routing",
                        "Front-End & Back-End validations"],
                    collab: ["Ninja Gold Redux???"],
                    lunch: ["Eat the foods!"],
                    afternoon: ["Open Lab"],
                    eod: ["Authors"],
                    reading: ["Review Mongoose",
                        "Review Angular"]
                },
                {
                    day: "Tuesday",
                    date: null,
                    objectives: ["Open Work Day"],
                    algorithms: ["II: SLLs II",
                        "III: Hash Tables"],
                    lecture: ["Dojo Way", "MEAN", "JavaScript", "'Pre' Content"],
                    collab: ["Trivia!"],
                    lunch: ["Eat the foods!"],
                    afternoon: ["Open Lab"],
                    eod: ["End of JS Fundamentals"],
                    reading: ["JS OOP", "ES6 OOP"]
                },
                {
                    day: "Wednesday",
                    date: null,
                    objectives: ["Deployment"],
                    algorithms: ["II: SLLs II",
                        "III: Tries"],
                    lecture: ["Deployment"],
                    collab: ["Ninja Gold on the Webs"],
                    lunch: ["Eat the foods!"],
                    afternoon: ["Open Lab"],
                    eod: ["Quote Ranks"],
                    reading: []
                },
                {
                    day: "Thursday",
                    date: null,
                    objectives: ["MEAN Recap"],
                    algorithms: ["II: SLLs II",
                        "III: Suffix Trees"],
                    lecture: ["Exam Content Recap"],
                    collab: ["Quote Ranks",
                        "Ilvermorny"],
                    lunch: [""],
                    afternoon: ["Open Lab"],
                    eod: ["Product Manager"],
                    reading: []
                },
                {
                    day: "Friday",
                    date: null,
                    objectives: ["Pass Exam",
                        "Project Week Ready"],
                    algorithms: [],
                    lecture: ["EXXAMminatiONS!!!"],
                    collab: [],
                    lunch: ["Eat the foods!"],
                    afternoon: ["Exam grading",
                        "Project Week HypeFest"],
                    eod: ["Project Week Wireframe OK'd"],
                    reading: []
                }
            ],
            [
                {
                    day: "Monday",
                    date: null,
                    objectives: ["Project Week Review",
                        "Exam Corrections"],
                    algorithms: ["II: BSTs",
                        "III: Graphs"],
                    lecture: [],
                    collab: [],
                    lunch: ["Eat the foods!"],
                    afternoon: ["Open Lab"],
                    eod: [],
                    reading: []
                },
                {
                    day: "Tuesday",
                    date: null,
                    objectives: ["Pass Exam",
                        "Project Progress"],
                    algorithms: ["II: BSTs",
                        "III: Graphs"],
                    lecture: [],
                    collab: [],
                    lunch: ["Eat the foods!"],
                    afternoon: ["Open Lab"],
                    eod: [],
                    reading: []
                },
                {
                    day: "Wednesday",
                    date: null,
                    objectives: ["Project Progress",
                        "Exam Reviews"],
                    algorithms: ["II: BSTs",
                        "III: Graphs"],
                    lecture: [],
                    collab: [],
                    lunch: ["Eat the foods!"],
                    afternoon: ["Open Lab"],
                    eod: [],
                    reading: []
                },
                {
                    day: "Thursday",
                    date: null,
                    objectives: ["Pass Exams",
                        "Project MVP"],
                    algorithms: ["II: BSTs",
                        "III: Graphs"],
                    lecture: [],
                    collab: ["Activity Day!"],
                    lunch: ["Eat the foods!"],
                    afternoon: ["Open Lab"],
                    eod: [],
                    reading: []
                },
                {
                    day: "Friday",
                    date: null,
                    objectives: ["Enjoy Fruits of Labor"],
                    algorithms: ["II: BSTs",
                        "III: Graphs"],
                    lecture: [],
                    collab: ["Project Presentations"],
                    lunch: ["Project Presentations & Pizza"],
                    afternoon: ["Graduation"],
                    eod: ["Next Stacks!!!"],
                    reading: []
                }
            ]
        ]
    };
}
;


/***/ }),

/***/ "./src/app/olio.ts":
/*!*************************!*\
  !*** ./src/app/olio.ts ***!
  \*************************/
/*! exports provided: Olio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Olio", function() { return Olio; });
var Olio = {
    "primary": {
        title: "OOP-y elaborations",
        tag: "from DOJO to real life",
        description: "A reintroduction to OOP concepts, how we used and saw them at Dojo, and what it looks like applying them in the real world.",
        link: "",
        img: "",
    },
    "secondary": [
        {
            title: "Testing",
            tag: "that's a belt exam, right?",
            description: "Testing your code is something that happens everywhere in industry. During the bootcamp, we don't have the time to actually write many tests for our code. This is my testing 101 guide for those looking to be more familiar with some generic concepts and patterns.",
            link: "",
            img: "",
        },
        {
            title: "Design & Architecture",
            tag: "because the world is bigger than Ninja Gold",
            description: "Enterprise companies have more going on than just their client-facing services. There is a lot more that goes on internally and that is used to support the main services. Some light thoughts on the size & structure of real world applications.",
            link: "",
            img: "",
        },
        {
            title: "Dev Ops",
            tag: "Project Week IRL",
            description: "How do teams work in the real world? Project week can't be how it goes down....right?",
            link: "",
            img: "",
        }
    ],
    "tertiary": [
        {
            title: "Alexa",
            tag: "building voice things is fun",
            description: "This is some notes from when I led Alexa design workshops at Coding Dojo",
            link: "",
            img: "",
        },
        {
            title: "Algorithms",
            tag: "why...?",
            description: "A brief blurb on why I think you should be doing algorithms regularly. Even after you get the job.",
            link: "",
            img: "",
        },
        {
            title: "Design Patterns",
            tag: "it may be helpful...",
            description: "Good starting points for solutions to common problems",
            link: "",
            img: "",
        },
        {
            title: "v8 & Node",
            tag: "how does JS do its things?",
            description: "Curious about how JS and Node does the things? Me too!",
            link: "",
            img: "",
        },
        {
            title: "Algorithm Basics",
            tag: "Lunch&Learn: Online",
            description: "Covers some very basic",
            link: "",
            img: "",
        }
    ]
};


/***/ }),

/***/ "./src/app/olio/olio.component.css":
/*!*****************************************!*\
  !*** ./src/app/olio/olio.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/olio/olio.component.html":
/*!******************************************!*\
  !*** ./src/app/olio/olio.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <section>\n    <div>\n      {{ olio.primary | json }}\n    </div>\n    <div *ngFor=\"let story of olio.secondary\">\n      {{story | json}}\n    </div>\n  </section>\n  <section>\n    <ul>\n      <li *ngFor=\"let story of olio.tertiary\">\n        <div>\n          {{ story.title }}\n        </div>\n      </li>\n    </ul>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/olio/olio.component.ts":
/*!****************************************!*\
  !*** ./src/app/olio/olio.component.ts ***!
  \****************************************/
/*! exports provided: OlioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlioComponent", function() { return OlioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _olio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../olio */ "./src/app/olio.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OlioComponent = /** @class */ (function () {
    function OlioComponent() {
    }
    OlioComponent.prototype.ngOnInit = function () {
        this.olio = _olio__WEBPACK_IMPORTED_MODULE_1__["Olio"];
        console.log(this.olio);
    };
    OlioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-olio',
            template: __webpack_require__(/*! ./olio.component.html */ "./src/app/olio/olio.component.html"),
            styles: [__webpack_require__(/*! ./olio.component.css */ "./src/app/olio/olio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OlioComponent);
    return OlioComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Alan Weber\Desktop\alanhub\gitpages\dojoshrub\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map