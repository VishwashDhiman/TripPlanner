webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

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

module.exports = "<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mydatepicker__ = __webpack_require__("../../../../mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_page_main_page_component__ = __webpack_require__("../../../../../src/app/main-page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__new_package_new_package_component__ = __webpack_require__("../../../../../src/app/new-package/new-package.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__train_train_component__ = __webpack_require__("../../../../../src/app/train/train.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: 'newpackage/login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__main_page_main_page_component__["a" /* MainPageComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'login/signup', component: __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'newpackage', component: __WEBPACK_IMPORTED_MODULE_9__new_package_new_package_component__["a" /* NewPackageComponent */] },
    { path: 'trains', component: __WEBPACK_IMPORTED_MODULE_10__train_train_component__["a" /* TrainComponent */] },
    { path: 'signup/home', component: __WEBPACK_IMPORTED_MODULE_6__main_page_main_page_component__["a" /* MainPageComponent */] },
    { path: 'login/signup/home', component: __WEBPACK_IMPORTED_MODULE_6__main_page_main_page_component__["a" /* MainPageComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_16__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_6__main_page_main_page_component__["a" /* MainPageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__new_package_new_package_component__["a" /* NewPackageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__train_train_component__["a" /* TrainComponent */],
                __WEBPACK_IMPORTED_MODULE_16__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2_mydatepicker__["MyDatePickerModule"],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14_ng4_loading_spinner__["Ng4LoadingSpinnerModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__login_service__["a" /* LoginService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService() {
        this.authChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"](); //Sends data onChange
        this.loggedIn = false;
    }
    LoginService.prototype.setData = function (data) {
        this.loggedIn = true;
        this.id = data[0].id;
        this.email = data[1].name;
        var d = this.email.split("@");
        this.email = d[0];
        this.authChange.next(true);
    };
    LoginService.prototype.getLoggin = function () {
        return this.loggedIn;
    };
    LoginService.prototype.getId = function () {
        return this.id;
    };
    LoginService.prototype.setLogout = function () {
        swal('Successfully Logout', "", "success");
        this.id = "";
        this.email = "";
        this.loggedIn = false;
        this.authChange.next(false);
    };
    LoginService.prototype.getEmail = function () {
        return this.email;
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n     -webkit-box-pack: center;\n         -ms-flex-pack: center;\n             justify-content: center; \n    -webkit-box-align: center; \n        -ms-flex-align: center; \n            align-items: center;\n    height: 600px;\n    background-size: auto; \n}\nh3{\n    padding-left:70px; \n    color: aliceblue;\n}\nh4{\n    padding-left: 40px;\n    color: aliceblue;\n}\n.sign{\n    background: white;\n    width:340px;\n    padding:20px;\n    border-radius: 10px;\n    font-family: \"Arial\", Times, serif;\n}\na{\n    color: yellow;\n    size:20px;\n}\n.sign{\n    background-color: rgb(238, 231, 198);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" [ngStyle]=\"{'background-image': 'url(' + path + ')'}\">\n  <div class=\"col-md-4\">\n    <div class=\"row\">\n      <div>\n        <h3>Login to Tour Trip</h3>\n      </div>\n      <div class=\"sign\">\n        <form #LoginForm=\"ngForm\" (ngSubmit)='SubmitTourInformationForm(loginForm)'>\n          <div class=\"form-group\">\n            <label for=\"username\">Email</label>\n            <div class=\"inputGroupContainer\">\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\">\n                  <i class=\"glyphicon glyphicon-envelope\"></i>\n                </span>\n                <input type=\"text\" class=\"form-control\" id=\"emailaddress\" required [(ngModel)]=\"Email\" name=\"email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n                  #email=\"ngModel\">\n\n              </div>\n              <small id=\"emailHelp\" class=\"form-text text-muted\">Never share your email with anyone else.</small>\n              <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\">\n                <div [hidden]=\"!email.hasError('required')\">Email is required</div>\n                <div [hidden]=\"!email.hasError('pattern')\">Email format should be\n                  <small>\n                    <b>joe@abc.com</b>\n                  </small>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"Password\" name=\"pass\" minlength=\"8\" placeholder=\"Password\" #password=\"ngModel\"\n              required>\n          </div>\n          <button class=\"btn btn-block btn-primary\" [disabled]=\"!LoginForm.form.valid\" type=\"submit\">Submit</button>\n        </form>\n      </div>\n\n      <div>\n        <h4>New to Tour Trip?\n          <b>\n            <a routerLink=\"signup\">Register Here</a>\n          </b>\n        </h4>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, router, ser) {
        this.http = http;
        this.router = router;
        this.ser = ser;
        this.path = '/assets/train2.jpg';
        this.Email = "";
        this.Password = "";
        this.logged = false;
    }
    LoginComponent.prototype.SubmitTourInformationForm = function (loginForm) {
        var _this = this;
        var data = {
            "email": this.Email,
            "password": this.Password
        };
        this.http.post('http://localhost:4000/api/login', data, { observe: 'response' })
            .subscribe(function (response) {
            var status = response.status;
            var title = response.body;
            if (title != null) {
                swal("Succesfully Loggined", "", "success");
                _this.ser.setData(title);
                _this.router.navigate(['/home'], { fragment: 'top' });
            }
            else {
                swal("Enter Correct Email and Password", "", "warning");
            }
        }, function (error) {
            swal("Enter Correct Email and Password", "", "error");
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-page/main-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group{\n    padding:50px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-top: 50px;\n}\n#main {\n    height:800px; \n}\ntable{\n    padding:50px;\n    margin-top:200px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width:1200px;\n}\nth{\n    font-size: 20px;\n    color: darkseagreen;\n}\ntd{\n    font-size: 15px;\n    color: darkgray;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-page/main-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"main\" [ngStyle]=\"{'background-image': 'url(' + photo + ')'}\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <form>\n        <div class=\"form-group\">\n          <select class=\"form-control\" [(ngModel)]=\"selectedField\" (change)=\"showData()\" name=\"select\">\n            <option selected>----</option>\n            <option>Flights</option>\n            <option>Trains</option>\n          </select>\n        </div>\n      </form>\n    </div>\n    <div *ngIf=\"train\" class=\"col-md-12\">\n      <table class=\"table table-bordered\">\n        <thead>\n          <th>FROM</th>\n          <th>Train Name</th>\n          <th>Departure Time</th>\n          <th>Arrival Time</th>\n          <th>Duration</th>\n          <th>Train Number</th>\n        </thead>\n        <tr *ngFor=\"let data of data; let i = index\" (click)=\"setClickedRow(i)\" [class.active]=\"i == selectedRow\">\n          <td>{{data.from}}</td>\n          <td>{{data.trainName}}</td>\n          <td>{{data.departureTime}}</td>\n          <td>{{data.arrivalTime}}</td>\n          <td>{{data.duration}}</td>\n          <td>{{data.number}}</td>\n        </tr>\n      </table>\n    </div>\n\n    <div *ngIf=\"flight\" class=\"col-md-12\">\n      <table class=\"table table-bordered\">\n        <thead>\n          <th>AirLines</th>\n          <th>Flight</th>\n          <th>Fare</th>\n          <th>Departure Time</th>\n          <th>Duration</th>\n        </thead>\n        <tr *ngFor=\"let data of data\">\n          <td>{{data.airline}}</td>\n          <td>{{data.flight}}</td>\n          <td>{{data.fare}}</td>\n          <td>{{data.departureTime}}</td>\n          <td>{{data.duration}}</td>\n        </tr>\n      </table>\n    </div>\n\n    <div *ngIf=\"bus\" class=\"col-md-12\">\n      <table class=\"table table-hover table-bordered table-striped\">\n        <thead>\n          <th>FROM</th>\n          <th>Train Name</th>\n          <th>Departure Time</th>\n          <th>Arrival Time</th>\n          <th>Duration</th>\n          <th>Train Number</th>\n          <th>Select</th>\n        </thead>\n        <tr *ngFor=\"let data of arr; let i = index\" (click)=\"setClickedRow(i)\" [class.active]=\"i == selectedRow\">\n          <td>{{data.from_station.name}}-{{data.to_station.name}}</td>\n          <td>{{data.name}}</td>\n          <td>{{data.src_departure_time}}</td>\n          <td>{{data.dest_arrival_time}}</td>\n          <td>{{data.travel_time}}</td>\n          <td>{{data.number}}</td>\n          <td>\n            <input type=\"checkbox\" name=\"check\" (change)=\"check(i)\">\n          </td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/main-page/main-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(spinnerService, http, service, router) {
        this.spinnerService = spinnerService;
        this.http = http;
        this.service = service;
        this.router = router;
        this.photo = "./assets/lamp.jpg";
        this.train = false;
        this.flight = false;
        this.setClickedRow = function (index) {
            this.selectedRow = index;
        };
    }
    MainPageComponent.prototype.showData = function () {
        var _this = this;
        this.id = this.service.getId();
        if (this.id) {
            if (this.selectedField == 'Flights') {
                this.http.get('http://localhost:4000/api/tours?id=' + this.id).subscribe(//get just made the request not send it to server
                function (//get just made the request not send it to server
                    response) {
                    _this.data = response;
                    _this.flight = true;
                    _this.train = false;
                }, function (error) {
                    swal("some error", "", "error");
                });
            }
            else if (this.selectedField == 'Trains') {
                this.http.get('http://localhost:4000/api/train?id=' + this.id).subscribe(//get just made the request not send it to server
                function (//get just made the request not send it to server
                    response) {
                    _this.data = response;
                    console.log(_this.data);
                    _this.train = true;
                    _this.flight = false;
                }, function (error) {
                    alert("some error");
                });
            }
        }
        else {
            swal("Loggin First", "", "warning");
            this.router.navigate(['/login'], { fragment: 'top' });
        }
    };
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__("../../../../../src/app/main-page/main-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-page/main-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__["Ng4LoadingSpinnerService"], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a:hover{\n    -webkit-text-decoration-line: none;\n            text-decoration-line: none;\n}\n\na{\n    color: #000000;\n    font-family: 'Gloria Hallelujah', cursive;\n    font-size: 25px;\n}\n\n#logo{\n    font-size:40px; \n    font-family: 'Berkshire Swash', cursive;\n}\n\n.notLog{\n    margin-left: 450px;\n}\n\n.Log{\n    margin-left:250px;\n    margin-right:50px;\n}\n\n.navbar\n{\n    margin-bottom: 0px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"setSpace()\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"home\">CLearMyTrip</a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav\">\n        <li>\n          <a routerLink=\"newpackage\">Flight</a>\n        </li>\n        <li>\n          <a routerLink=\"trains\">Train</a>\n        </li>\n        <li class=\"notLog\" *ngIf=\"!Loggin\">\n          <a routerLink=\"signup\">SignUp</a>\n        </li>\n        <li *ngIf=\"!Loggin\">\n          <a routerLink=\"login\">LogIn</a>\n        </li>\n        <li class=\"Log\" *ngIf=\"Loggin\"><a>Logged in as {{email}}</a></li>\n        <li *ngIf=\"Loggin\"  (click) = 'logout()'><a>LogOut</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(http, logser, router) {
        this.http = http;
        this.logser = logser;
        this.router = router;
        this.flag = 1;
        this.Loggin = false;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSubs = this.logser.authChange.subscribe(function (user) {
            console.log("adasd" + user);
            _this.Loggin = user;
            if (_this.Loggin == true) {
                _this.email = _this.logser.getEmail();
                console.log(_this.email);
            }
        });
    };
    NavBarComponent.prototype.setSpace = function () {
        if (this.flag == 1) {
            document.getElementById("space").style.marginLeft = "0px";
            this.flag = 0;
        }
        else {
            document.getElementById("space").style.marginLeft = "450px";
            this.flag = 1;
        }
    };
    NavBarComponent.prototype.change = function () {
        var _this = this;
        var id = this.logser.getId();
        this.http.get('http://localhost:4000/api/login').subscribe(function (response) {
            _this.email = response;
            console.log(_this.email);
        }, function (error) {
            swal("some error", "", "error");
        });
    };
    NavBarComponent.prototype.logout = function () {
        this.logser.setLogout();
        this.router.navigate(['/home']);
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/new-package/new-package.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".glyphicon{\n    margin-top: 35px;\n    margin-left:15px;\n}\n#selection{\n    margin-left:200px;\n    border-radius:10px;\n    background-color:rgb(34, 66, 124);\n    color:rgb(109, 175, 201);\n}\n#round{\n    margin-left:20px;\n    border-radius:10px;\n    background-color:rgb(41, 64, 112);\n    color:rgb(109, 175, 201);\n}\n#date{\n    margin-top:100px;\n}\n.ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n}\n.ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n}\n#data{\n      margin-top:150px;\n}\n#flight{\n      margin-top:50px;\n}\n.table tr.active td {\n    background-color:#123456 !important;\n    color: white;\n}\ntd{\n    font-size: 15px;\n      color: rgb(78, 26, 2);\n      \n}\nth{\n    font-size: 20px;\n    color: rgb(15, 1, 66);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-package/new-package.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" [ngStyle]=\"{'background-image': 'url(' + photo + ')'}\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <form #bookingForm=\"ngForm\">\n        <div class=\"form-group col-md-2\">\n          <label for=\"source\">From</label>\n          <select #selectOption1 (change)='getSourceValue(selectOption1.value)' [(ngModel)]=\"source\" name=\"sour\" class='form-control'\n            required>\n            <option *ngFor=\"let category of categories\" [value]=\"category.id\">{{category.name}}</option>\n          </select>\n        </div>\n        <div class=\"col-md-1\">\n          <i class=\"glyphicon glyphicon-transfer\"></i>\n        </div>\n        <div class=\"form-group col-md-2\">\n          <label for=\"dest\">To</label>\n          <select #selectOption (change)='getDestValue(selectOption.value)' [(ngModel)]=\"destination\" name=\"dest\" class='form-control'\n            required>\n            <option *ngFor=\"let category of categories\" [value]=\"category.id\">{{category.name}}</option>\n          </select>\n        </div>\n\n        <div class=\"col-md-3\">\n          <label for=\"adults\">Adults</label>\n          <select id=\"adultsSelect\" class=\"form-control\" [(ngModel)]=\"adults\" name=\"adults\" required>\n            <option>0</option>\n            <option selected>1</option>\n            <option>2</option>\n            <option>3</option>\n            <option>4</option>\n            <option>5</option>\n            <option>6</option>\n            <option>7</option>\n            <option>8</option>\n            <option>9</option>\n          </select>\n        </div>\n        <div class=\"col-md-4\">\n          <label for=\"children\">Children</label>\n          <select id=\"childSelect\" class=\"form-control\" [(ngModel)]=\"childrens\" name=\"child\" required>\n            <option selected>0</option>\n            <option>1</option>\n            <option>2</option>\n            <option>3</option>\n            <option>4</option>\n            <option>5</option>\n            <option>6</option>\n            <option>7</option>\n            <option>8</option>\n            <option>9</option>\n          </select>\n        </div>\n        <div class=\"col-md-12\">\n\n        </div>\n        <div class=\"col-md-3\">\n          <label class=\"date\">Depart on</label>\n          <my-date-picker name=\"mydate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"Arrivaldate\" required></my-date-picker>\n        </div>\n        <div class=\"col-md-6\" *ngIf=\"dispReturn\">\n          <label class=\"date\">Return on</label>\n          <my-date-picker name=\"mydate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"Departuredate\" required></my-date-picker>\n        </div>\n        <div class=\"col-md-10\"></div>\n        <div class=\"col-md-2\" id=\"flight\">\n\n          <button class=\"btn btn-primary\" [disabled]=\"!bookingForm.form.valid\" (click)=\"showflights()\">Show Flights</button>\n        </div>\n      </form>\n    </div>\n    <div class=\"col-md-12\" id=\"div_img\">\n      <ng4-loading-spinner></ng4-loading-spinner>\n    </div>\n    <div class=\"col-md-12\" id=\"data\">\n      <div class=\"col-md-12\" *ngIf=\"!showData\">\n        <h3>No Data Found</h3>\n      </div>\n      <div *ngIf=\"showData\">\n        <table class=\"table table-bordered\">\n          <thead>\n            <th>AirLines</th>\n            <th>Flight</th>\n            <th>Fare</th>\n            <th>Departure Time</th>\n            <th>Duration</th>\n            <th>Select</th>\n          </thead>\n          <tr *ngFor=\"let data of arr; let i = index\" (click)=\"setClickedRow(i)\" [class.active]=\"i == selectedRow\">\n            <td>{{data.airline}}</td>\n            <td>{{source}}-{{destination}}</td>\n            <td>{{data.fare.totalfare}}</td>\n            <td>{{data.deptime}}</td>\n            <td>{{data.duration}}</td>\n            <td>\n              <input type=\"checkbox\" name=\"name1\" class=\"checkbox\" (change)=\"check(i)\" />&nbsp;</td>\n          </tr>\n        </table>\n        <br>\n        <button class=\"btn btn-primary\" *ngIf=\"loggedIn && selected\" (click)=\"bookFlight()\">Book Flights</button>\n        <button class=\"btn btn-primary\" *ngIf=\"notLogin && selected\" (click)=\"bookFlight()\">Book Flights</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/new-package/new-package.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPackageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var now = new Date();
var NewPackageComponent = /** @class */ (function () {
    function NewPackageComponent(http, spinnerService, service, router) {
        this.http = http;
        this.spinnerService = spinnerService;
        this.service = service;
        this.router = router;
        this.photo = "./assets/plane3.jpg";
        this.selected = false;
        this.source = "";
        this.destination = "";
        this.dispReturn = false;
        this.dispArrival = true;
        this.adults = 1;
        this.childrens = 0;
        this.notLogin = true;
        this.loggedIn = false;
        this.mytime = new Date();
        this.showData = false;
        this.marked = new Array(12).fill(0);
        this.arr = [];
        this.flights = { "data": [] };
        this.categories = [
            { id: 'YYZ', name: 'Toronto' },
            { id: 'HND', name: 'Tokyo' },
            { id: 'WAS', name: 'Washington, D.C.' },
            { id: 'DXB', name: 'Dubai' },
            { id: "DEL", name: 'Delhi' },
            { id: 'FRA', name: 'Frankfurt' },
            { id: 'MRS', name: 'Marignane' },
            { id: 'LAX', name: 'Los Angeles International' },
            { id: 'ZBC', name: 'Birmingham' }
        ];
        this.currentYear = this.mytime.getUTCFullYear();
        this.currentDate = this.mytime.getUTCDate() - 1;
        this.currentMonth = this.mytime.getUTCMonth() + 1; //months from 1-12
        this.app_id = "c66591e4";
        this.api_key = "89d9830bfee0cb120f65ef19e5ed1fce";
        this.base_url = "https://developer.goibibo.com";
        this.myDatePickerOptions = {
            disableUntil: { year: this.currentYear, month: this.currentMonth, day: this.currentDate },
            dateFormat: 'yyyy.mm.dd'
        };
        this.setClickedRow = function (index) {
            this.selectedRow = index;
        };
    }
    NewPackageComponent.prototype.getSourceValue = function (value) {
        console.log(value);
        this.source = value;
    };
    NewPackageComponent.prototype.getDestValue = function (value) {
        console.log(value);
        this.destination = value;
    };
    NewPackageComponent.prototype.addReturn = function () {
        this.dispReturn = false;
        document.getElementById("round").style.backgroundColor = "rgb(34, 66, 124)";
        document.getElementById("selection").style.backgroundColor = "white";
    };
    NewPackageComponent.prototype.returnDetails = function () {
        this.dispReturn = true;
        document.getElementById("round").style.backgroundColor = "white";
        document.getElementById("selection").style.backgroundColor = "rgb(34, 66, 124)";
    };
    NewPackageComponent.prototype.call = function () {
        var _this = this;
        var api_search = this.base_url + '/api/search/?app_id=' + this.app_id + '&app_key=' + this.api_key;
        var url = api_search + '&source=' + this.source + '&destination=' + this.destination +
            '&dateofdeparture=' + this.str + '&adults=' + this.adults + '&children' + this.childrens + '&counter=100';
        this.http.get(url).subscribe(//get just made the request not send it to server
        function (//get just made the request not send it to server
            response) {
            console.log(response);
            _this.databaseTable = response;
            for (var i = 0; i < 12; i++) {
                console.log(_this.databaseTable.data.onwardflights[i].airline);
                _this.arr[i] = _this.databaseTable.data.onwardflights[i];
            }
            _this.showData = true;
            _this.spinnerService.hide();
        }, function (error) {
            alert("some error");
            _this.spinnerService.hide();
        });
    };
    NewPackageComponent.prototype.showflights = function () {
        this.spinnerService.show();
        if (this.source != this.destination) {
            this.str = this.Arrivaldate.formatted.replace(".", "");
            this.str = this.str.replace(".", "");
            this.call();
        }
        else {
            swal("Source and destination are same", "", "error");
            this.spinnerService.hide();
        }
        for (var i = 0; i < this.flights.data.length; i++) {
            console.log(this.flights.data[i]);
        }
    };
    NewPackageComponent.prototype.check = function (i) {
        var c = 0;
        if (this.marked[i] == 0)
            this.marked[i] = 1;
        else
            this.marked[i] = 0;
        for (var j = 0; j < 12; j++)
            if (this.marked[j] == 1)
                c = 1;
        if (c)
            this.selected = true;
        else
            this.selected = false;
    };
    NewPackageComponent.prototype.bookFlight = function () {
        var _this = this;
        var res;
        res = this.service.getLoggin();
        this.notLogin = !res;
        this.loggedIn = res;
        if (!this.notLogin) {
            for (var i = 0; i < 15; i++) {
                if (this.marked[i] == 1) {
                    var httpHeaders = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Contant-Type': 'application/json' });
                    var id = this.service.getId();
                    var data = {
                        "id": id,
                        "airline": this.arr[i].airline,
                        "flight": this.source + "-" + this.destination,
                        "fare": this.arr[i].fare.totalfare,
                        "departureTime": this.arr[i].deptime,
                        "duration": this.arr[i].duration
                    };
                    this.http.post('http://localhost:4000/api/tours', data, { observe: 'response' })
                        .subscribe(function (response) {
                        var status = response.status;
                        console.log(response);
                        var title = response.body;
                        console.log(title);
                        swal("Data Saved", "", "success");
                        _this.router.navigate(['/home'], { fragment: 'top' });
                    }, function (error) {
                        swal("Some Error", "", "error");
                    });
                }
            }
        }
        else {
            swal("Not Logged", "", "warning");
            this.router.navigate(['/login'], { fragment: 'top' });
        }
    };
    NewPackageComponent.prototype.ngOnInit = function () {
    };
    NewPackageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-package',
            template: __webpack_require__("../../../../../src/app/new-package/new-package.component.html"),
            inputs: ['child'],
            styles: [__webpack_require__("../../../../../src/app/new-package/new-package.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], NewPackageComponent);
    return NewPackageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#back{\n    height: 600px;\n    background-size: auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div id = \"back\" [ngStyle]=\"{'background-image': 'url(' + path + ')'}\">\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
        this.path = "./assets/page1.jpg";
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid{    \n    display: -webkit-box;    \n    display: -ms-flexbox;    \n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; \n   -webkit-box-align: center; \n       -ms-flex-align: center; \n           align-items: center;\n   height: 600px;\n   background-size: auto; \n}\n.login{ \n    background-color: rgb(233, 240, 247);\n    width:400px;\n    padding:15px;\n    border-radius: 10px;\n    font-family: \"Arial\", Times, serif;\n}\na{\n    color:white;\n}\n#background{\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"background\" [ngStyle]=\"{'background-image': 'url(' + path + ')'}\">\n  <div class=\"row\">\n    <div class=\"col-md-4 login\">\n      <div class=\"col-md-12 text\">\n        <h1>\n          Build for travellers\n        </h1>\n      </div>\n      <div class=\"col-md-12\">\n        <form #SignupForm=\"ngForm\" (ngSubmit)='SubmitTourInformationForm(SignupForm)' data-toggle=\"validator\">\n          <div class=\"form-group\">\n            <label class=\" control-label\">E-Mail</label>\n            <div class=\"inputGroupContainer\">\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\">\n                  <i class=\"glyphicon glyphicon-envelope\"></i>\n                </span>\n                <input type=\"text\" class=\"form-control\" id=\"emailaddress\" required [(ngModel)]=\"Email\" name=\"email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n                  #email=\"ngModel\">\n              </div>\n              <small id=\"emailHelp\" class=\"form-text text-muted\">Never share your email with anyone else.</small>\n              <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\">\n                <div [hidden]=\"!email.hasError('required')\">Email is required</div>\n                <div [hidden]=\"!email.hasError('pattern')\">Email format should be\n                  <small>\n                    <b>joe@abc.com</b>\n                  </small>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"name\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"password\" required [(ngModel)]=\"Password\" name=\"password\" minlength=\"8\" #password=\"ngModel\">\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"!SignupForm.form.valid\">Sign up for Tour Travel</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(http, router, service) {
        this.http = http;
        this.router = router;
        this.service = service;
        this.logged = false;
        this.path = "./assets/sig.jpg";
        this.UserName = "";
        this.Email = "";
        this.Password = "";
    }
    SignupComponent.prototype.SubmitTourInformationForm = function (SignupForm) {
        var _this = this;
        var httpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Contant-Type': 'application/json' });
        var data = {
            "email": this.Email,
            "password": this.Password
        };
        this.http.post('http://localhost:4000/api/signup', data, { observe: 'response' })
            .subscribe(function (response) {
            var status = response.status;
            var title = response.body;
            if (response.body != null) {
                swal("Succesfully Registered", "", "success");
                _this.service.setData(title);
                _this.router.navigate(['/home'], { fragment: 'top' });
            }
            else {
                swal("User Exists with this id", "", "warning");
            }
        }, function (error) {
            swal("Some Error", "", "error");
        });
    };
    SignupComponent.prototype.getLogg = function () {
        return this.logged;
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/train/train.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".book{\n    margin-top:50px;\n    margin-left:550px;    \n    width:200px;\n}\n.data{\n    margin-bottom:20px;\n}\n.ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n}\n.ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n}\n.show{\n      margin-top:100px;\n}\n.table tr.active td {\n    background-color:#123456 !important;\n    color: white;\n}\nlabel{\n      color: rgb(7, 98, 158);\n      size: 20px;\n}\nth{\n    font-size: 20px;\n    color: rgb(4, 69, 107)\n}\ntd{\n    font-size: 15px;\n    color: rgb(39, 118, 192);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/train/train.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" [ngStyle]=\"{'background-image': 'url(' + photo + ')'}\">\n  <div class=\"col-md-12\">\n    <form #bookingForm=\"ngForm\" (ngSubmit)='SubmitTourInformationForm(tourForm)'>\n      <div class=\"data\">\n        <div class=\"form-group col-md-4\">\n          <label for=\"Source\">From</label>\n          <select #selectOption (change)='getSourceValue(selectOption.value)' [(ngModel)]=\"source\" name=\"sour\" class='form-control'\n            required>\n            <option *ngFor=\"let category of categories\" [value]=\"category.id\">{{category.name}}</option>\n          </select>\n        </div>\n        <div class=\"form-group col-md-4\">\n          <label for=\"Destination\">To</label>\n          <br>\n          <select #selectOption1 (change)='getDestValue(selectOption1.value)' [(ngModel)]=\"destination\" name=\"dest\" class='form-control'\n            required>\n            <option *ngFor=\"let category of categories\" [value]=\"category.id\">{{category.name}}</option>\n          </select>\n        </div>\n\n        <div class=\"form-group col-md-4\">\n          <label class=\"date\">Date</label>\n          <my-date-picker name=\"mydate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"date\" required></my-date-picker>\n        </div>\n      </div>\n\n      <div class=\"form-group col-md-12 book\">\n        <button class=\"btn btn-primary\" [disabled]=\"!bookingForm.form.valid\" (click)=\"ShowTrains()\">Show Trains</button>\n      </div>\n    </form>\n  </div>\n  <div class=\"col-md-12\" id=\"div_img\">\n    <ng4-loading-spinner></ng4-loading-spinner>\n  </div>\n  <div *ngIf=\"dummyData\">\n    <h3>No data found</h3>\n  </div>\n  <div *ngIf=\"againRequest\">\n    <h3>Sorry!!There might be error with our server Please Request again</h3>\n  </div>\n  <div *ngIf=\"noTrain\">\n    <h3>There is no train of ths route</h3>\n  </div>\n  <div class=\"col-md-12 show\" *ngIf=\"showTable\">\n    <br>\n    <br>\n    <div>\n      <table class=\"table table-bordered\">\n        <thead>\n          <th>FROM</th>\n          <th>Train Name</th>\n          <th>Departure Time</th>\n          <th>Arrival Time</th>\n          <th>Duration</th>\n          <th>Train Number</th>\n          <th>Select</th>\n        </thead>\n        <tr *ngFor=\"let data of arr; let i = index\" (click)=\"setClickedRow(i)\" [class.active]=\"i == selectedRow\">\n          <td>{{data.from_station.name}}-{{data.to_station.name}}</td>\n          <td>{{data.name}}</td>\n          <td>{{data.src_departure_time}}</td>\n          <td>{{data.dest_arrival_time}}</td>\n          <td>{{data.travel_time}}</td>\n          <td>{{data.number}}</td>\n          <td>\n            <input type=\"checkbox\" name=\"check\" (change)=\"check(i)\">\n          </td>\n        </tr>\n      </table>\n      <br>\n      <button class=\"btn btn-primary\" *ngIf=\"loggedIn && selected\" (click)=\"bookFlight()\">Book Flights</button>\n      <button class=\"btn btn-primary\" *ngIf=\"notLogin && selected\" (click)=\"bookFlight()\">Book Flights</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/train/train.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TrainComponent = /** @class */ (function () {
    function TrainComponent(http, service, router, spinnerService) {
        this.http = http;
        this.service = service;
        this.router = router;
        this.spinnerService = spinnerService;
        this.photo = "./assets/train4.jpg";
        this.destination = "";
        this.adults = 0;
        this.base_url = "https://api.railwayapi.com";
        this.key = "8uorlkq7jv";
        this.arr = [];
        this.showTable = false;
        this.noTrain = false;
        this.againRequest = false;
        this.dummyData = true;
        this.notLogin = true;
        this.loggedIn = false;
        this.mytime = new Date();
        this.categories = [
            { id: 'AI', name: 'Adipur' },
            { id: 'AD', name: 'Adoni' },
            { id: 'ANDI', name: 'Delhi' },
            { id: 'AGA', name: 'Agra' },
            { id: "PTA", name: 'Patiala' },
            { id: 'AHH', name: 'Ahmadgarh' },
            { id: 'SBC', name: 'Bangalore' },
            { id: 'BSPN', name: 'Bassi Pathanam' },
            { id: 'PNVL', name: 'Mumbai' }
        ];
        this.currentYear = this.mytime.getUTCFullYear();
        this.currentDate = this.mytime.getUTCDate() - 1;
        this.currentMonth = this.mytime.getUTCMonth() + 1;
        this.myDatePickerOptions = {
            disableUntil: { year: this.currentYear, month: this.currentMonth, day: this.currentDate },
            dateFormat: 'dd-mm-yyyy'
        };
        this.marked = new Array(15).fill(0);
        this.setClickedRow = function (index) {
            this.selectedRow = index;
        };
    }
    TrainComponent.prototype.getSourceValue = function (value) {
        console.log(value);
        this.source = value;
    };
    TrainComponent.prototype.getDestValue = function (value) {
        console.log(value);
        this.destination = value;
    };
    TrainComponent.prototype.ShowTrains = function () {
        var _this = this;
        this.spinnerService.show();
        this.str = this.date.formatted.replace(".", "");
        this.str = this.str.replace(".", "-");
        var api_search = this.base_url + '/v2/between/source/' + this.source + '/dest/' + this.destination +
            '/date/' + this.str + '/apikey/' + this.key + '/';
        this.http.get(api_search).subscribe(//get just made the request not send it to server
        function (//get just made the request not send it to server
            response) {
            console.log(response);
            _this.dummyData = false;
            if (response.response_code == 200) {
                _this.databaseTable = response;
                for (var i = 0; i < _this.databaseTable.trains.length; i++) {
                    _this.arr[i] = _this.databaseTable.trains[i];
                }
                _this.showTable = true;
                _this.noTrain = false;
                _this.againRequest = false;
            }
            else if (response.response_code == 210) {
                _this.dummyData = false;
                _this.noTrain = true;
                _this.showTable = false;
                _this.againRequest = false;
            }
            else if (response.response_code == 405) {
                _this.dummyData = false;
                _this.againRequest = true;
                _this.noTrain = false;
                _this.showTable = false;
            }
            _this.spinnerService.hide();
        }, function (error) {
            swal("some error while connecting", "", "error");
        });
    };
    TrainComponent.prototype.check = function (i) {
        var c = 0;
        if (this.marked[i] == 0)
            this.marked[i] = 1;
        else
            this.marked[i] = 0;
        for (var j = 0; j < this.databaseTable.trains.length; j++)
            if (this.marked[j] == 1)
                c = 1;
        if (c)
            this.selected = true;
        else
            this.selected = false;
    };
    TrainComponent.prototype.bookFlight = function () {
        var _this = this;
        var res;
        res = this.service.getLoggin();
        this.notLogin = !res;
        this.loggedIn = res;
        if (!this.notLogin) {
            for (var i = 0; i < this.databaseTable.trains.length; i++) {
                if (this.marked[i] == 1) {
                    var httpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Contant-Type': 'application/json' });
                    var id = this.service.getId();
                    var data = {
                        "id": id,
                        "from": this.arr[i].from_station.name + "-" + this.arr[i].to_station.name,
                        "trainName": this.arr[i].name,
                        "departureTime": this.arr[i].src_departure_time,
                        "arrivalTime": this.arr[i].dest_arrival_time,
                        "duration": this.arr[i].travel_time,
                        "number": this.arr[i].number
                    };
                    this.http.post('http://localhost:4000/api/train', data, { observe: 'response' })
                        .subscribe(function (response) {
                        var status = response.status;
                        var title = response.body;
                        swal("Data Saved", "", "success");
                        _this.router.navigate(['/home'], { fragment: 'top' });
                    }, function (error) {
                        swal("Some Error", "", "error");
                    });
                }
            }
        }
        else {
            swal("Not Logged", "", "warning");
            this.router.navigate(['/login'], { fragment: 'top' });
        }
    };
    TrainComponent.prototype.ngOnInit = function () {
    };
    TrainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-train',
            template: __webpack_require__("../../../../../src/app/train/train.component.html"),
            styles: [__webpack_require__("../../../../../src/app/train/train.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], TrainComponent);
    return TrainComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map