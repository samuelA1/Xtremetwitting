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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
        this.helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__["JwtHelperService"]();
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var token = localStorage.getItem('token');
        if (!this.helper.isTokenExpired(token))
            return true;
        this.router.navigate(['/login', { returnUrl: state.url }]);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/prevent-changes.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/_guards/prevent-changes.guard.ts ***!
  \**************************************************/
/*! exports provided: PreventChangesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreventChangesGuard", function() { return PreventChangesGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PreventChangesGuard = /** @class */ (function () {
    function PreventChangesGuard() {
    }
    PreventChangesGuard.prototype.canDeactivate = function (component) {
        if (component.f.dirty) {
            return confirm('Are you sure you want to continue? All unsaved changes will be lost');
        }
        return true;
    };
    PreventChangesGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], PreventChangesGuard);
    return PreventChangesGuard;
}());



/***/ }),

/***/ "./src/app/_services/alertify.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/alertify.service.ts ***!
  \***********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
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

var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallback) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallback();
            }
            else { }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl;
        this.helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
    }
    Object.defineProperty(AuthService.prototype, "headers", {
        get: function () {
            var token = localStorage.getItem('token');
            return token ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', token) : null;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.register = function (model) {
        var _this = this;
        return this.http.post(this.apiUrl + 'auth/register', model).toPromise()
            .then(function (res) {
            _this.user = _this.helper.decodeToken(res['token']);
            _this.text = 'Sign out';
            return res;
        });
    };
    AuthService.prototype.login = function (model) {
        var _this = this;
        return this.http.post(this.apiUrl + 'auth/login', model).toPromise()
            .then(function (res) {
            _this.user = _this.helper.decodeToken(res['token']);
            _this.text = 'Sign out';
            return res;
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_services/tweet.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/tweet.service.ts ***!
  \********************************************/
/*! exports provided: TweetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetService", function() { return TweetService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TweetService = /** @class */ (function () {
    function TweetService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl;
        this.tweet = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({ tweet: 'See and read whats going on in the world from twitter daily', owner: { firstName: 'See all great',
                lastName: 'adverts here ',
                username: 'teamtwitter', picture: 'https://picsum.photos/200/300'
            } });
        this.recentTweet = this.tweet.asObservable();
    }
    Object.defineProperty(TweetService.prototype, "headers", {
        get: function () {
            var token = localStorage.getItem('token');
            return token ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', token) : null;
        },
        enumerable: true,
        configurable: true
    });
    TweetService.prototype.addRecentTweet = function (tweet) {
        this.tweet.next(tweet);
    };
    TweetService.prototype.getTweets = function () {
        return this.http.get(this.apiUrl + 'recent', { headers: this.headers }).toPromise();
    };
    TweetService.prototype.postTweet = function (tweet) {
        return this.http.post(this.apiUrl + 'tweet', tweet, { headers: this.headers }).toPromise();
    };
    TweetService.prototype.getUserRecentTweets = function () {
        return this.http.get(this.apiUrl + 'userRecent', { headers: this.headers }).toPromise();
    };
    TweetService.prototype.deleteTweet = function (id) {
        return this.http.delete(this.apiUrl + 'tweet/' + id, { headers: this.headers }).toPromise();
    };
    TweetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TweetService);
    return TweetService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    Object.defineProperty(UserService.prototype, "headers", {
        get: function () {
            var token = localStorage.getItem('token');
            return token ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', token) : null;
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.getAllUsers = function () {
        return this.http.get(this.apiUrl + 'users', { headers: this.headers }).toPromise();
    };
    UserService.prototype.getSuggestions = function () {
        return this.http.get(this.apiUrl + 'follow/suggestions', { headers: this.headers }).toPromise();
    };
    UserService.prototype.followSomeone = function (id) {
        return this.http.post(this.apiUrl + 'follow/follow/' + id, {}, { headers: this.headers }).toPromise();
    };
    UserService.prototype.unfollowSomeone = function (id) {
        return this.http.post(this.apiUrl + 'follow/unfollow/' + id, {}, { headers: this.headers }).toPromise();
    };
    UserService.prototype.getUserTweets = function () {
        return this.http.get(this.apiUrl + 'tweet', { headers: this.headers }).toPromise();
    };
    UserService.prototype.getUserFollowersFollowing = function (id) {
        return this.http.get(this.apiUrl + 'follow/followers/following/' + id, { headers: this.headers }).toPromise();
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.apiUrl + 'user/' + id, { headers: this.headers }).toPromise();
    };
    UserService.prototype.upDateProfile = function (profile) {
        return this.http.post(this.apiUrl + 'profile/profile', profile, { headers: this.headers }).toPromise();
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/addAndGetTweets/addAndGetTweets.component.css":
/*!***************************************************************!*\
  !*** ./src/app/addAndGetTweets/addAndGetTweets.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-body {\r\n    width: 335px;\r\n}\r\n\r\n.card {\r\n    width: 335px;\r\n}\r\n\r\nimg {\r\n    border-radius: 50%;\r\n    width: 40px;\r\n}\r\n\r\ntextarea {\r\n    width: 300px;\r\n    height: 100px;\r\n}\r\n\r\ntextarea {\r\n    border-radius: 30px;\r\n}\r\n\r\n.readyToTweet{\r\n    background-color: #E8F5FD;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .card-body {\r\n        width: 510px;\r\n    }\r\n    \r\n    .card {\r\n        width: 510px;\r\n    }\r\n    textarea {\r\n        width: 450px;\r\n        }\r\n    .btn-primary{\r\n        float: left;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 0px) and  (max-width: 767px) {\r\n    .card {\r\n        margin-left: 13px;\r\n    }\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/addAndGetTweets/addAndGetTweets.component.html":
/*!****************************************************************!*\
  !*** ./src/app/addAndGetTweets/addAndGetTweets.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card readyToTweet\">\n  <div class=\"card-body\">\n    <form #f=\"ngForm\" (ngSubmit)=\"postTweet()\" class=\"text-center\">\n      <div class=\"form-group \">\n          <label for=\"tweet\">What's on your mind?<textarea name=\"tweet\" class=\"form-control\" id=\"tweet\" \n            rows=\"1\" [(ngModel)]=\"tweet.tweet\" (keyup)=\"keepTweet()\">\n          </textarea>\n          </label>\n      </div>\n      <button [disabled]=\"!f.dirty\" type=\"submit\" class=\"btn btn-primary text-center\">Tweet</button>\n  </form> \n  </div>\n</div>\n            \n         \n\n\n<div class=\"card\" *ngFor=\"let tweet of tweets\">\n    <div class=\"card-body list-inline\">\n        <a routerLink=\"/profile/{{tweet.owner?.username}}\" routerLinkActive=\"router-link-active\" (click)=\"profile(tweet.owner?._id)\">\n          <img class=\"list-inline-item\" src=\"{{tweet.owner?.picture}}\" alt=\"{{tweet.owner?.username}}\"\n          class=\"mr-3\">\n        </a>\n        <a routerLink=\"/profile/{{tweet.owner?.username}}\" routerLinkActive=\"router-link-active\" (click)=\"profile(tweet.owner?._id)\">\n          <h6 class=\"card-title list-inline-item\">{{tweet.owner?.firstName | titlecase}} {{tweet.owner?.lastName | titlecase}}\n              <strong>@{{tweet.owner?.username}}</strong></h6>\n        </a>\n        <p class=\"card-text mt-3\">{{tweet.tweet}}</p>\n      <small class=\"text-muted \">{{tweet.dateTweeted | timeAgo}}</small>\n      <button *ngIf=\"tweet.owner?.username == authService.user.user.username\"\n       class=\"btn btn-danger btn-sm  float-right\" type=\"button\" (click)=\"deleteTweet(tweet._id)\">Delete</button>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/addAndGetTweets/addAndGetTweets.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/addAndGetTweets/addAndGetTweets.component.ts ***!
  \**************************************************************/
/*! exports provided: AddAndGetTweetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAndGetTweetsComponent", function() { return AddAndGetTweetsComponent; });
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tweet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/tweet.service */ "./src/app/_services/tweet.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var AddAndGetTweetsComponent = /** @class */ (function () {
    function AddAndGetTweetsComponent(tweetService, alertify, authService, userService) {
        this.tweetService = tweetService;
        this.alertify = alertify;
        this.authService = authService;
        this.userService = userService;
        this.reduce = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tweet = {};
    }
    AddAndGetTweetsComponent.prototype.getTweets = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tweets, recentTweets, huge, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.tweetService.getTweets()];
                    case 1:
                        tweets = _a.sent();
                        return [4 /*yield*/, this.tweetService.getUserRecentTweets()];
                    case 2:
                        recentTweets = _a.sent();
                        if (tweets['success']) {
                            huge = tweets['tweets'].concat(recentTweets['tweets']);
                            this.tweets = huge.sort(function (a, b) { return b.dateTweeted - a.dateTweeted; });
                        }
                        else {
                            this.alertify.message('No tweets');
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.alertify.error(error_1.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AddAndGetTweetsComponent.prototype.postTweet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tweet, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!this.tweetValidation()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.tweetService.postTweet(this.tweet)];
                    case 1:
                        tweet = _a.sent();
                        this.tweets.unshift({ dateTweeted: Date.now(),
                            tweet: this.tweet['tweet'], _id: tweet['tweetId'], owner: { firstName: this.authService.user.user.firstName,
                                lastName: this.authService.user.user.lastName, username: this.authService.user.user.username,
                                picture: this.authService.user.user.picture
                            } });
                        if (tweet['success']) {
                            this.f.reset();
                            this.alertify.success('Tweet created');
                            localStorage.removeItem('tweet');
                            this.reduce.emit(1);
                        }
                        else {
                            this.alertify.error('Unable to create tweet');
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        this.alertify.error('Please enter a tweet');
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        this.alertify.error(error_2.message);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AddAndGetTweetsComponent.prototype.deleteTweet = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.alertify.confirm('Are you sure you want to delete this tweet?', function () {
                    _this.tweetService.deleteTweet(id);
                    _this.tweets.splice(_this.tweets.findIndex(function (t) { return t._id === id; }), 1);
                    _this.alertify.success('Tweet deleted');
                    _this.reduce.emit(-1);
                });
                return [2 /*return*/];
            });
        });
    };
    AddAndGetTweetsComponent.prototype.tweetValidation = function () {
        if (this.tweet.tweet) {
            return true;
        }
        else {
            this.alertify.error('Please enter a tweet');
        }
    };
    AddAndGetTweetsComponent.prototype.profile = function (id) {
        this.userService.userId = id;
        localStorage.setItem('userId', id);
    };
    AddAndGetTweetsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.token = localStorage.getItem('token');
                        return [4 /*yield*/, this.getTweets()];
                    case 1:
                        _a.sent();
                        this.addRecentTweet();
                        this.keepTweet();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddAndGetTweetsComponent.prototype.addRecentTweet = function () {
        var _this = this;
        this.tweetService.recentTweet.subscribe(function (tweetObj) { return _this.tweets.unshift(tweetObj); });
    };
    AddAndGetTweetsComponent.prototype.keepTweet = function () {
        if (this.tweet.tweet) {
            localStorage.setItem('tweet', this.tweet.tweet);
        }
        else if (this.tweet.tweet == '') {
            localStorage.setItem('tweet', '');
        }
        else {
            this.tweet.tweet = localStorage.getItem('tweet');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], AddAndGetTweetsComponent.prototype, "f", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], AddAndGetTweetsComponent.prototype, "reduce", void 0);
    AddAndGetTweetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addAndGetTweets',
            template: __webpack_require__(/*! ./addAndGetTweets.component.html */ "./src/app/addAndGetTweets/addAndGetTweets.component.html"),
            styles: [__webpack_require__(/*! ./addAndGetTweets.component.css */ "./src/app/addAndGetTweets/addAndGetTweets.component.css")]
        }),
        __metadata("design:paramtypes", [_services_tweet_service__WEBPACK_IMPORTED_MODULE_2__["TweetService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]])
    ], AddAndGetTweetsComponent);
    return AddAndGetTweetsComponent;
}());



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
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _app_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        children: [
            { path: 'profile/:id', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"] },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
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

module.exports = ".navbar{\r\n    padding: 0;\r\n}\r\n\r\n.btn-tweet {\r\n    border-radius: 100px;\r\n    margin: 5px;\r\n}\r\n\r\nimg {\r\n    border-radius: 50%;\r\n    width: 50px;\r\n}\r\n\r\ntextarea{\r\n    border-radius: 30px;\r\n    width: 300px;\r\n}\r\n\r\nimg:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.tooltip-inner {\r\n    background-color: white;\r\n    color: black;\r\n    max-width: 400px;\r\n    margin: 5px;\r\n}\r\n\r\n@media screen and (min-width: 0px) and  (max-width: 767px) {\r\n    .img-profile {\r\n        float: right;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <header>\n        <div class=\"navbar navbar-dark bg-dark shadow-sm\">\n          <div class=\"container d-flex justify-content-between\">\n            <a [routerLink]=\"['']\" routerLinkActive=\"router-link-active\"  class=\"navbar-brand d-flex align-items-center\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\"\n               fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"mr-2\">\n               <path d=\"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\"></path>\n               <circle cx=\"12\" cy=\"13\" r=\"4\"></circle></svg>\n              <strong>Twitter</strong>\n            </a>\n            <div *ngIf=\"authService.user?.user.username\">\n              <app-search></app-search>\n            </div>\n            <div class=\"list-inline\">\n                <img src=\"{{authService.user?.user.picture}}\" alt=\"{{authService.user?.user.username}}\"\n                      class=\"mr-3 img-profile\" id=\"dropdownBasic1\" [ngbTooltip]=\"tipContent\" placement=\"bottom\" triggers=\"click\" [autoClose]=\"true\">\n              <button *ngIf=\"authService.user?.user.username\" class=\"btn btn-primary btn-tweet\" (click)=\"openModal(template)\"><strong>Tweet</strong></button>\n            </div>\n          </div>\n        </div>\n      </header>\n\n      <!-- Modal template -->\n      <ng-template #template>\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title pull-left\">Compose new Tweet</h4>\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"confirm()\" >\n            <span aria-hidden=\"true\">&times;</span></button>\n        </div>\n        <div class=\"modal-body\">\n          <form #tweetForm =\"ngForm\" id=\"tweetForm\" >\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <textarea name=\"tweet\" cols=\"10\" rows=\"3\" class=\"form-control\"\n                 placeholder=\"What's happening?\" [(ngModel)]=\"tweet.tweet\"></textarea>\n              </div>\n            </div>\n          </form>\n          <button [disabled]=\"!tweetForm.dirty\" form=\"tweetForm\" type=\"button\" class=\"btn btn-primary\"\n             (click)=\"modalRef.hide();postTweet()\">Save</button>\n        </div>\n      </ng-template>\n\n      <!-- Tooltip template -->\n      <ng-template #tipContent>\n        <div class=\"tooltip-inner\">\n            <p><strong>{{authService.user?.user.firstName | titlecase}}  {{authService.user?.user.lastName | titlecase}}</strong></p>\n            <p class=\"text-muted\">@{{authService.user?.user.username}}</p>\n            <hr>\n            <a [routerLink]=\"['/profile',authService.user?.user._id]\" routerLinkActive=\"router-link-active\" >\n              <p><i class=\"far fa-user\"></i> Profile</p>\n            </a>\n            <a *ngIf=\"authService.user?.user.username\" (click)=\"logout()\" style=\"cursor: pointer\"><i class=\"fas fa-door-open\"></i> logout</a>\n        </div>\n      </ng-template>\n            \n    <router-outlet></router-outlet>\n</div>\n \n"

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
/* harmony import */ var _services_tweet_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_services/tweet.service */ "./src/app/_services/tweet.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var AppComponent = /** @class */ (function () {
    function AppComponent(router, authService, alertify, userService, modalService) {
        this.router = router;
        this.authService = authService;
        this.alertify = alertify;
        this.userService = userService;
        this.modalService = modalService;
        this.title = 'twitter';
        this.helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
        this.tweet = {};
        this.token = localStorage.getItem('token');
        authService.user = this.helper.decodeToken(this.token);
        authService.text = 'Sign out';
    }
    AppComponent.prototype.logout = function () {
        this.router.navigate(['/login']);
        this.authService.text = '';
        this.authService.user.user = {};
        localStorage.clear();
        this.alertify.success('Logout successful');
    };
    AppComponent.prototype.postTweet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tweet, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!this.tweetValidation()) return [3 /*break*/, 2];
                        this.userService.addRecentTweet({ dateTweeted: Date.now(),
                            tweet: this.tweet['tweet'], owner: { firstName: this.authService.user.user.firstName,
                                lastName: this.authService.user.user.lastName, username: this.authService.user.user.username,
                                picture: this.authService.user.user.picture
                            } });
                        return [4 /*yield*/, this.userService.postTweet(this.tweet)];
                    case 1:
                        tweet = _a.sent();
                        if (tweet['success']) {
                            this.alertify.success('Tweet created');
                        }
                        else {
                            this.alertify.error('Unable to create tweet');
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        this.alertify.error('Please enter a tweet');
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        this.alertify.error(error_1.message);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.tweetValidation = function () {
        if (this.tweet.tweet) {
            return true;
        }
        else {
            this.alertify.error('Please enter a tweet');
        }
    };
    AppComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    AppComponent.prototype.confirm = function () {
        var _this = this;
        if (this.tweet.tweet) {
            this.alertify.confirm('Are you sure you want to discard this tweet?', function () {
                _this.modalRef.hide();
            });
        }
        else {
            this.modalRef.hide();
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"],
            _services_tweet_service__WEBPACK_IMPORTED_MODULE_0__["TweetService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]])
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
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_tweet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services/tweet.service */ "./src/app/_services/tweet.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _guards_prevent_changes_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_guards/prevent-changes.guard */ "./src/app/_guards/prevent-changes.guard.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../app/home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _addAndGetTweets_addAndGetTweets_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./addAndGetTweets/addAndGetTweets.component */ "./src/app/addAndGetTweets/addAndGetTweets.component.ts");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _suggestions_suggestions_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./suggestions/suggestions.component */ "./src/app/suggestions/suggestions.component.ts");
/* harmony import */ var _followers_followers_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./followers/followers.component */ "./src/app/followers/followers.component.ts");
/* harmony import */ var _following_following_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./following/following.component */ "./src/app/following/following.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _app_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _suggestions_suggestions_component__WEBPACK_IMPORTED_MODULE_20__["SuggestionsComponent"],
                _addAndGetTweets_addAndGetTweets_component__WEBPACK_IMPORTED_MODULE_17__["AddAndGetTweetsComponent"],
                time_ago_pipe__WEBPACK_IMPORTED_MODULE_18__["TimeAgoPipe"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_19__["SearchComponent"],
                _suggestions_suggestions_component__WEBPACK_IMPORTED_MODULE_20__["SuggestionsComponent"],
                _followers_followers_component__WEBPACK_IMPORTED_MODULE_21__["FollowersComponent"],
                _following_following_component__WEBPACK_IMPORTED_MODULE_22__["FollowingComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_23__["ProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot()
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"],
                _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
                _guards_prevent_changes_guard__WEBPACK_IMPORTED_MODULE_9__["PreventChangesGuard"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"],
                _services_tweet_service__WEBPACK_IMPORTED_MODULE_1__["TweetService"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/followers/followers.component.css":
/*!***************************************************!*\
  !*** ./src/app/followers/followers.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-outline-primary {\r\n    border-radius: 100px;\r\n}\r\n\r\n.btn-primary {\r\n    border-radius: 100px;\r\n}"

/***/ }),

/***/ "./src/app/followers/followers.component.html":
/*!****************************************************!*\
  !*** ./src/app/followers/followers.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"followers.length === 0\">\n  <h1>Not being followered by anyone yet</h1>\n</div>\n<div *ngFor=\"let follower of followers\" class=\"card mb-3 mr-3\" style=\"width: 18rem; display: inline-block;\" \n      >\n    <div *ngIf=\"followers.length == 1 && follower._id == authService.user?.user._id\">\n        <h1>You're the user following him</h1>\n    </div>\n    <div *ngIf=\"follower._id != authService.user?.user._id\">\n      <a routerLink=\"/profile/{{follower?.username}}\" routerLinkActive=\"router-link-active\" (click)=\"profile(follower?._id)\">\n        <img class=\"card-img-top\" src=\"{{follower?.picture}}\" alt=\"follower?.username\" style=\"height: 100px;\">\n      </a>\n      <div class=\"card-body\">\n          <button *ngIf=\"follower?.both\" type=\"button\" class=\"btn btn-primary float-right\" (click)=\"unfollow(follower?._id)\">unfollow</button>\n          <button *ngIf=\"!follower?.both && authService.user?.user._id == userId\" type=\"button\" class=\"btn btn-outline-primary float-right\"\n          (click)=\"follow(follower?._id)\">follow</button>\n          <a routerLink=\"/profile/{{follower?.username}}\" routerLinkActive=\"router-link-active\" (click)=\"profile(follower?._id)\">\n            <strong>{{follower?.firstName | titlecase}} {{follower?.lastName | titlecase}}</strong>\n          </a>\n          <br>\n          <small class=\"text-muted text-center\">@{{follower?.username}}</small>\n        <div class=\"list-inline text-center\">\n          <small class=\"list-inline-item mr-3\"><strong>Tweets</strong></small>\n          <small class=\"list-inline-item mr-3\"><strong>Following</strong></small>\n          <small class=\"list-inline-item mr-3\"><strong>Followers</strong></small>\n        </div>\n        <div class=\"list-inline text-center\">\n            <h4 class=\"list-inline-item mr-5\">{{follower?.tweets?.length}}</h4>\n            <h4 class=\"list-inline-item mr-5\">{{follower?.following?.length}}</h4>\n            <h4 class=\"list-inline-item mr-5\">{{follower?.followers?.length}}</h4>\n        </div>\n        <small class=\"text-center text-muted\">Follows you</small>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/followers/followers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/followers/followers.component.ts ***!
  \**************************************************/
/*! exports provided: FollowersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowersComponent", function() { return FollowersComponent; });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var FollowersComponent = /** @class */ (function () {
    function FollowersComponent(userService, alertify, authService) {
        this.userService = userService;
        this.alertify = alertify;
        this.authService = authService;
        this.toReduce = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    FollowersComponent.prototype.getFollowers = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var follow;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.getUserFollowersFollowing(id)];
                    case 1:
                        follow = _a.sent();
                        this.followers = follow['followers'];
                        return [2 /*return*/];
                }
            });
        });
    };
    FollowersComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFollowers(this.userId)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FollowersComponent.prototype.follow = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var found;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.followSomeone(id)];
                    case 1:
                        _a.sent();
                        this.alertify.success('You just followed another user');
                        this.toReduce.emit(1);
                        found = this.followers.find(function (u) { return u._id == id; });
                        this.followers.push(Object.assign(found, { both: true }));
                        return [2 /*return*/];
                }
            });
        });
    };
    FollowersComponent.prototype.unfollow = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var found;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.unfollowSomeone(id)];
                    case 1:
                        _a.sent();
                        this.alertify.success('You just unfollowed another user');
                        this.toReduce.emit(-1);
                        found = this.followers.find(function (u) { return u._id == id; });
                        this.followers.push(Object.assign(found, { both: false }));
                        return [2 /*return*/];
                }
            });
        });
    };
    // route() {
    //   window.location.reload();
    // }
    FollowersComponent.prototype.profile = function (id) {
        this.userService.userId = id;
        localStorage.setItem('userId', id);
        window.location.reload();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", Object)
    ], FollowersComponent.prototype, "toReduce", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Object)
    ], FollowersComponent.prototype, "userId", void 0);
    FollowersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-followers',
            template: __webpack_require__(/*! ./followers.component.html */ "./src/app/followers/followers.component.html"),
            styles: [__webpack_require__(/*! ./followers.component.css */ "./src/app/followers/followers.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], FollowersComponent);
    return FollowersComponent;
}());



/***/ }),

/***/ "./src/app/following/following.component.css":
/*!***************************************************!*\
  !*** ./src/app/following/following.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-outline-primary {\r\n    border-radius: 100px;\r\n}\r\n\r\n.btn-primary {\r\n    border-radius: 100px;\r\n}"

/***/ }),

/***/ "./src/app/following/following.component.html":
/*!****************************************************!*\
  !*** ./src/app/following/following.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"followings.length == 0 \">\n  <h1>Not following anyone yet</h1>\n</div>\n\n<div *ngFor=\"let following of followings\" class=\"card mb-3 mr-3\" style=\"width: 18rem; display: inline-block;\" >\n    <div *ngIf=\"followings?.length == 1 && following._id == authService.user?.user._id\">\n        <h1>You're the user he's following</h1>\n    </div>\n   <div *ngIf=\"following._id != authService.user?.user._id\">\n    <a routerLink=\"/profile/{{following?.username}}\" routerLinkActive=\"router-link-active\" (click)=\"profile(following?._id)\">\n      <img class=\"card-img-top\" src=\"{{following?.picture}}\" alt=\"following?.username\" style=\"height: 100px;\">\n    </a>\n    <div class=\"card-body\">\n        <button *ngIf=\"authService.user?.user._id == userId\" type=\"button\" class=\"btn btn-primary float-right\"\n         (click)=\"unfollow(following?._id)\">unfollow</button>\n        <a routerLink=\"/profile/{{following?.username}}\" routerLinkActive=\"router-link-active\" (click)=\"profile(following?._id)\">\n          <strong>{{following?.firstName | titlecase}} {{following?.lastName | titlecase}}</strong>\n        </a>\n        <br>\n        <small class=\"text-muted text-center\">@{{following?.username}}</small>\n      <div class=\"list-inline text-center\">\n        <small class=\"list-inline-item mr-3\"><strong>Tweets</strong></small>\n        <small class=\"list-inline-item mr-3\"><strong>Following</strong></small>\n        <small class=\"list-inline-item mr-3\"><strong>Followers</strong></small>\n      </div>\n      <div class=\"list-inline text-center\">\n        <h4 class=\"list-inline-item mr-5\">{{following?.tweets?.length}}</h4>\n        <h4 class=\"list-inline-item mr-5\">{{following?.following?.length}}</h4>\n        <h4 class=\"list-inline-item mr-5\">{{following?.followers?.length}}</h4>\n      </div>\n      <small class=\"text-center text-muted\">Following</small>\n    </div>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/following/following.component.ts":
/*!**************************************************!*\
  !*** ./src/app/following/following.component.ts ***!
  \**************************************************/
/*! exports provided: FollowingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingComponent", function() { return FollowingComponent; });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var FollowingComponent = /** @class */ (function () {
    function FollowingComponent(userService, alertify, authService) {
        this.userService = userService;
        this.alertify = alertify;
        this.authService = authService;
        this.toReduce = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FollowingComponent.prototype.getFollowing = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var follow;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.getUserFollowersFollowing(id)];
                    case 1:
                        follow = _a.sent();
                        this.followings = follow['following'];
                        return [2 /*return*/];
                }
            });
        });
    };
    FollowingComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFollowing(this.userId)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FollowingComponent.prototype.unfollow = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.unfollowSomeone(id)];
                    case 1:
                        _a.sent();
                        this.alertify.success('You just unfollowed another user');
                        this.followings.splice(this.followings.findIndex(function (u) { return u._id == id; }), 1);
                        this.toReduce.emit(-1);
                        return [2 /*return*/];
                }
            });
        });
    };
    FollowingComponent.prototype.profile = function (id) {
        this.userService.userId = id;
        localStorage.setItem('userId', id);
        window.location.reload();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], FollowingComponent.prototype, "toReduce", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], FollowingComponent.prototype, "userId", void 0);
    FollowingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-following',
            template: __webpack_require__(/*! ./following.component.html */ "./src/app/following/following.component.html"),
            styles: [__webpack_require__(/*! ./following.component.css */ "./src/app/following/following.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], FollowingComponent);
    return FollowingComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nimg {\r\n    border-radius: 50%;\r\n    width: 80px;\r\n}\r\n\r\n\r\n\r\n@media screen and (min-width: 0px) and (max-width: 1023px) {\r\n    .card { display: none;}   \r\n  }\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div role=\"main\">\n\n  <section *ngIf=\"!token\" class=\" text-center\">\n    <div class=\"container\">\n      <h1 class=\"jumbotron-heading\">Join and follow Celebrities and Entrepreneurs</h1>\n      <p class=\"lead text-muted\">It's free and will always be, signup now and enjoy a new social experience</p>\n      <p>\n        <a [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\"  class=\"btn btn-primary my-2 mr-2\">\n          Login</a>\n        <a [routerLink]=\"['/register']\" routerLinkActive=\"router-link-active\"  class=\"btn btn-secondary my-2\">\n          Register</a>\n      </p>\n    </div>\n  </section>\n\n  <div *ngIf=\"token\">\n    <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-3\">\n              <div class=\"card\">\n                  <div class=\"card-body\">\n                    <div class=\"text-center\">\n                        <a routerLink=\"/profile/{{authService.user?.user.username}}\" routerLinkActive=\"router-link-active\" (click)=\"profile(authService.user?.user._id)\">\n                          <img src=\"{{authService.user?.user.picture}}\" alt=\"{{authService.user?.user.username}}\">\n                        </a>\n                      <br>\n                      <a routerLink=\"/profile/{{authService.user?.user.username}}\" routerLinkActive=\"router-link-active\" (click)=\"profile(authService.user?.user._id)\">\n                        <strong>{{authService.user?.user.firstName | titlecase}} {{authService.user?.user.lastName | titlecase}}</strong>\n                      </a>\n                      \n                      <br>\n                      <small class=\"text-muted text-center\">@{{authService.user?.user.username}}</small>\n                    </div>\n                    <div class=\"list-inline text-center\">\n                      <small class=\"list-inline-item mr-3\"><strong>Tweets</strong></small>\n                      <small class=\"list-inline-item mr-3\"><strong>Following</strong></small>\n                      <small class=\"list-inline-item mr-3\"><strong>Followers</strong></small>\n                    </div>\n                    <div class=\"list-inline text-center\">\n                      <a [routerLink]=\"['/profile', authService.user?.user.username, {change: 1}]\" routerLinkActive=\"router-link-active\" (click)=\"profile(authService.user?.user._id)\" >\n                        <h4 style=\"color:#1DA1F2\" class=\"list-inline-item mr-5\">{{numberOfTweets}}</h4>\n                      </a>\n                      <a [routerLink]=\"['/profile', authService.user?.user.username, {change: 2}]\" routerLinkActive=\"router-link-active\" (click)=\"profile(authService.user?.user._id)\" >\n                        <h4 style=\"color:#1DA1F2\" class=\"list-inline-item mr-5\">{{numberOfFollowing}}</h4>\n                      </a>\n                      <a [routerLink]=\"['/profile', authService.user?.user.username, {change: 3}]\" routerLinkActive=\"router-link-active\" (click)=\"profile(authService.user?.user._id)\" >\n                        <h4 style=\"color:#1DA1F2\" class=\"list-inline-item mr-5\">{{numberOfFollowers}}</h4>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card mt-5\" style=\"width: 16rem;background-color: #E8F5FD\">\n                    <div class=\"card-body\">\n                        <p *ngIf=\"bio\" class=\"text-muted\">{{bio | titlecase}}</p>\n                        <p *ngIf=\"location\" class=\"text-muted\"><i class=\"fas fa-map-marker-alt mr-3\">\n                          {{location | titlecase}}</i></p>\n                        <p class=\"text-muted\"><i class=\"far fa-calendar-alt mr-3\">\n                            Joined {{authService.user?.user.dateCreated | date : 'longDate'}}</i></p>\n                    </div>\n                  </div>\n          </div>\n            <div class=\"col-lg-6\">\n              <app-addAndGetTweets (reduce)=reduceSomething($event)></app-addAndGetTweets>\n            </div>\n            <div class=\"col-lg-3\">\n              <app-suggestions (reduce)=reduceSomething($event)></app-suggestions>\n            </div>\n        </div>\n    </div>\n  </div>\n\n\n\n</div>\n"

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
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.token = localStorage.getItem('token');
        if (this.authService.user) {
            this.getUserTweets(this.authService.user.user._id);
        }
    };
    HomeComponent.prototype.getUserTweets = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var tweets, follow;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.getUserTweets()];
                    case 1:
                        tweets = _a.sent();
                        return [4 /*yield*/, this.userService.getUserFollowersFollowing(id)];
                    case 2:
                        follow = _a.sent();
                        this.numberOfTweets = tweets['tweets'].length;
                        this.bio = tweets['bio'];
                        this.location = tweets['location'];
                        this.numberOfFollowers = follow['followers'].length;
                        this.numberOfFollowing = follow['following'].length;
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.profile = function (id) {
        this.userService.userId = id;
        localStorage.setItem('userId', id);
    };
    HomeComponent.prototype.reduceSomething = function (model) {
        if (model == -1) {
            this.numberOfTweets -= 1;
        }
        else if (model == 1) {
            this.numberOfTweets += 1;
        }
        else if (model == 2) {
            this.numberOfFollowing += 1;
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container \">\n  <div class=\"row\">\n    <div class=\"col-lg-4 offset-lg-4 bg-dark auth-form\">\n        <form #f=\"ngForm\" (ngSubmit)=\"login()\">\n            <div class=\"form-group\">\n              <label for=\"email\">Email</label>\n              <input type=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\"\n              name=\"email\" [(ngModel)]=\"model.email\">\n              <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"password\">Password</label>\n              <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" \n              name=\"password\" [(ngModel)]=\"model.password\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n          </form>\n          <small class=\"form-text text-muted\">New to Twitter? <a [routerLink]=\"['/register']\" routerLinkActive=\"router-link-active\" >\n            Sign up now</a></small>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService, route, alertify) {
        this.router = router;
        this.authService = authService;
        this.route = route;
        this.alertify = alertify;
        this.model = {};
        this.helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (res) {
            _this.returnUrl = res['returnUrl'] || '/';
        });
    };
    LoginComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!this.loginValidation()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.authService.login(this.model)];
                    case 1:
                        user = _a.sent();
                        user['success'] ? (this.alertify.success('Login successful'),
                            localStorage.setItem('token', user['token']),
                            this.router.navigateByUrl(this.returnUrl))
                            : this.alertify.message(user['message']);
                        return [3 /*break*/, 3];
                    case 2:
                        this.alertify.error('Check your input fields');
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        this.alertify.error('Unable to login. Check your email and password');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.loginValidation = function () {
        if (this.model.email) {
            if (this.model.password) {
                return true;
            }
            else {
                this.alertify.message('Enter your password');
            }
        }
        else {
            this.alertify.message('Enter your email');
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-image-top {\r\n    background-color: #e9ecef;\r\n}\r\n\r\n.img-profile {\r\n    width: 200px;\r\n}\r\n\r\nimg {\r\n    border-radius: 50%;\r\n}\r\n\r\n.card-body-body {\r\n    width: 410px;\r\n}\r\n\r\n.card-you {\r\n    width: 410px;\r\n}\r\n\r\n.img-tweet {\r\n    width: 40px;\r\n}\r\n\r\n.tabChange > h4 {\r\n    color:  #1DA1F2;\r\n    border-bottom: 3px solid #1DA1F2;\r\n}\r\n\r\n.unChange {\r\n    color: black;\r\n}\r\n\r\n.btn-primary, .btn-outline-primary, .btn-outline-secondary {\r\n    border-radius: 100px;\r\n}\r\n\r\n.clearfix { \r\n    display: block; \r\n    height: 0; \r\n    clear: both;\r\n }\r\n\r\n@media screen and (min-width: 0px) and  (max-width: 767px) {\r\n    .button-change {\r\n        width: 40px;\r\n    }\r\n\r\n    .list-inline {\r\n        float: left;\r\n    }\r\n\r\n    .card-body-body {\r\n        width: 380px;\r\n    }\r\n    \r\n    .card-you {\r\n        width: 380px;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: #E8F5FD\">\n    <div class=\"card\">\n        <div class=\"card-image-top text-center\">\n            <img src=\"{{user?.picture}}\" alt=\"{{user?.username}}\" class=\"img-profile\">\n            <br>\n            <strong class=\"display-4\">{{user?.firstName | titlecase}} {{user?.lastName | titlecase}}</strong>\n            <br>\n            <h5 class=\"text-muted text-center\">@{{user?.username}}</h5>\n        </div>\n        <div class=\"card-header\">\n            <div class=\"list-inline text-center\">\n                <small class=\"list-inline-item mr-3\"><strong>Tweets</strong></small>\n                <small class=\"list-inline-item mr-3\"><strong>Following</strong></small>\n                <small class=\"list-inline-item mr-3\"><strong>Followers</strong></small>\n            </div>\n            <div class=\"float-right clearfix mr-5 button-change\">\n              <button *ngIf=\"toFollow\" type=\"button\" class=\"btn btn-outline-primary  \" (click)=\"follow(user?._id)\">Follow</button>\n              <button *ngIf=\"user?._id == authService.user?.user._id\" type=\"button\" class=\"btn btn-outline-secondary\" \n              (click)=\"openModal(template)\">Edit profile</button>\n              <button *ngIf=\"!toFollow && user?._id != authService.user?.user._id \" type=\"button\" class=\"btn btn-primary  \"\n                (click)=\"unfollow(user?._id)\" (mouseover)=\"statusChange='unfollow'\" \n                (mouseleave)=\"statusChange='following'\">{{statusChange | titlecase}}</button>\n            </div>\n            <div class=\"list-inline text-center\">\n              <a class=\"btn\" (click)=\"change(1)\" [ngClass]=\"tabChange == 1 ? 'tabChange' : 'unChange'\"  >\n                <h4  class=\"list-inline-item mr-3\">{{numberOfTweets}}</h4>\n              </a>\n              <a class=\"btn\" (click)=\"change(2)\" [ngClass]=\"tabChange == 2 ? 'tabChange' : 'unChange'\">\n                <h4  class=\"list-inline-item ml-2\">\n                  {{numberOfFollowing}}</h4>\n              </a>\n              <a  class=\"btn\" (click)=\"change(3)\" [ngClass]=\"tabChange == 3 ? 'tabChange' : 'unChange'\">\n                <h4  class=\"list-inline-item ml-5\">\n                  {{numberOfFollowers}}</h4>\n              </a>\n            </div>\n        </div>\n    </div>\n    <br>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n            <p class=\"text-muted\">{{user?.profile?.bio | titlecase}}</p>\n            <p *ngIf=\"user?.profile?.location\" class=\"text-muted\"><i class=\"fas fa-map-marker-alt mr-2\">\n              {{user?.profile?.location | titlecase}}</i></p>\n            <p class=\"text-muted\"><i class=\"far fa-calendar-alt\">\n                Joined {{user?.dateCreated | date : 'longDate'}}</i></p>\n        </div>\n        <div class=\"col-md\">\n          <div *ngIf=\"tweets?.length == 0 && tabChange ==1 \">\n            <h1>No tweets yet</h1>\n          </div>\n          <div *ngIf=\"tabChange == 1\">\n            <div  class=\"card card-you\" *ngFor=\"let tweet of tweets\">\n              <div *ngIf=\"tabChange ==1\" class=\"card-body card-body-body list-inline\">\n                  <a routerLink=\"/profile/{{user.username}}\" routerLinkActive=\"router-link-active\" (click)=\"me(user._id)\">\n                    <img class=\"list-inline-item img-tweet\" src=\"{{user.picture}}\" alt=\"{{user.username}}\"\n                    class=\"mr-3\">\n                  </a>\n                  <a routerLink=\"/profile/{{user.username}}\" routerLinkActive=\"router-link-active\" (click)=\"me(user._id)\">\n                    <h6 class=\"card-title list-inline-item\">{{user.firstName | titlecase}} {{user.lastName | titlecase}}\n                        <strong>@{{user.username}}</strong></h6>\n                  </a>\n                  <p class=\"card-text mt-3\">{{tweet.tweet}}</p>\n                <small class=\"text-muted \">{{tweet.dateTweeted | date : 'longDate'}}</small>\n              </div>\n          </div>\n          </div>\n          <div *ngIf=\"tabChange == 2\">\n            <app-following [userId]=\"userId\" (toReduce) =reduce($event)></app-following>\n          </div>\n          <div *ngIf=\"tabChange == 3\">\n              <app-followers [userId]=\"userId\" (toReduce) =reduce($event)></app-followers>\n          </div>\n        </div>\n        <div class=\"col-md-3\" *ngIf=\"tabChange == 1\" >\n            <app-suggestions [toRemove]=\"userId\"></app-suggestions>\n        </div>\n      </div>\n    </div>\n</div>\n\n\n<!-- Modal window -->\n<ng-template #template>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Compose new Tweet</h4>\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span></button>\n    </div>\n    <div class=\"modal-body\">\n      <form #profileForm =\"ngForm\" id=\"profileForm\" >\n        <div class=\"form-row\">\n            <div class=\"col\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"First name\" name=\"firstName\" [(ngModel)]=\"profile.firstName\">\n            </div>\n            <div class=\"col\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Last name\" name=\"lastName\" [(ngModel)]=\"profile.lastName\">\n            </div>\n          </div>\n          <br>\n          <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Bio\" name=\"bio\" [(ngModel)]=\"profile.bio\">\n          </div>\n          <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Location\" name=\"location\" [(ngModel)]=\"profile.location\">\n          </div>\n          <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Website\" name=\"website\" [(ngModel)]=\"profile.website\">\n          </div>\n      </form>\n      <button [disabled]=\"!profileForm.dirty\" form=\"profileForm\" type=\"button\" class=\"btn btn-primary\"\n         (click)=\"modalRef.hide();updateProfile()\">Save</button>\n    </div>\n  </ng-template>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, alertify, route, modalService, authService) {
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
        this.modalService = modalService;
        this.authService = authService;
        this.tabChange = 1;
        this.profile = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userAlternate, userAlternate;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userAlternate = this.userId || localStorage.getItem('userId');
                        this.userId = this.userService.userId || userAlternate;
                        userAlternate = this.userId || localStorage.getItem('userId');
                        this.route.params.subscribe(function (res) { _this.tabChange = res['change'] || 1; });
                        return [4 /*yield*/, this.getUser(userAlternate)];
                    case 1:
                        _a.sent();
                        this.canFollow();
                        this.statusChange = 'following';
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent.prototype.getUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.getUser(id)];
                    case 1:
                        user = _a.sent();
                        try {
                            if (user['success']) {
                                this.user = user['user'];
                                this.profile = Object.assign({}, {
                                    firstName: user['user'].firstName,
                                    lastName: user['user'].lastName,
                                    bio: user['user'].profile.bio,
                                    location: user['user'].profile.location,
                                    website: user['user'].profile.website
                                });
                                this.tweets = user['tweets'];
                                this.numberOfTweets = user['user'].tweets.length;
                                this.numberOfFollowers = user['numFollowers'];
                                this.numberOfFollowing = user['numFollowing'];
                            }
                            else {
                                this.alertify.error('Could not get user information or user does not exist');
                            }
                        }
                        catch (error) {
                            this.alertify.error(error.message);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent.prototype.change = function (changes) {
        this.tabChange = changes;
    };
    ProfileComponent.prototype.canFollow = function () {
        return __awaiter(this, void 0, void 0, function () {
            var suggestions, suggested;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.getSuggestions()];
                    case 1:
                        suggestions = _a.sent();
                        suggested = suggestions['suggestions'];
                        if (suggested.some(function (e) { return e._id == _this.userId; })) {
                            this.toFollow = true;
                        }
                        else {
                            this.toFollow = false;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent.prototype.follow = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.followSomeone(id)];
                    case 1:
                        _a.sent();
                        this.alertify.success('You just followed another user');
                        this.numberOfFollowing += 1;
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent.prototype.unfollow = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.unfollowSomeone(id)];
                    case 1:
                        _a.sent();
                        this.alertify.success('You just unfollowed another user');
                        this.numberOfFollowing -= 1;
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent.prototype.reduce = function (model) {
        if (model == -1) {
            this.numberOfFollowing -= 1;
        }
        else if (model == 1) {
            this.numberOfFollowing += 1;
        }
    };
    // Modal window
    ProfileComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    ProfileComponent.prototype.updateProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var update, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userService.upDateProfile(this.profile)];
                    case 1:
                        update = _a.sent();
                        if (update['success']) {
                            this.alertify.success('Your profile has been updated');
                            this.user = Object.assign({ picture: this.user.picture, _id: this.user._id, username: this.user.username }, {
                                firstName: this.profile.firstName,
                                lastName: this.profile.lastName,
                                profile: { bio: this.profile.bio,
                                    location: this.profile.location,
                                    website: this.profile.website }
                            });
                        }
                        else {
                            this.alertify.error('Your profile could not be updated');
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.alertify.error(error_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent.prototype.me = function (id) {
        this.userService.userId = id;
        localStorage.setItem('userId', id);
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container \">\n    <div class=\"row\">\n      <div class=\"col-lg-4 offset-lg-4 bg-dark auth-form\">\n          <form #f=\"ngForm\" (ngSubmit)=\"register()\">\n              <div class=\"form-group\" >\n                  <label for=\"firstName\">First Name</label>\n                  <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"First Name\"\n                  name=\"firstName\" [(ngModel)]=\"user.firstName\">\n                </div>\n              <div class=\"form-group\">\n                  <label for=\"lastName\">Last Name</label>\n                  <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Last Name\"\n                  name=\"lastName\" [(ngModel)]=\"user.lastName\">\n              </div>\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Email\" \n                    name=\"email\" [(ngModel)]=\"user.email\">\n                    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n                  </div>\n              <div class=\"form-group\">\n                <label for=\"email\">Username</label>\n                <input type=\"text\" class=\"form-control\" id=\"email\"  placeholder=\"Username\"\n                name=\"username\" [(ngModel)]=\"user.username\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" \n                name=\"password\" [(ngModel)]=\"user.password\">\n              </div>\n              <button  type=\"submit\" class=\"btn btn-primary\">Submit</button>\n            </form>\n            <small class=\"form-text text-muted\">Already have an account? <a [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\" >\n              Login now</a></small>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router, alertify) {
        this.authService = authService;
        this.router = router;
        this.alertify = alertify;
        this.user = {};
    }
    RegisterComponent.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!this.loginValidation()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.authService.register(this.user)];
                    case 1:
                        user = _a.sent();
                        user['success'] ? (this.alertify.success('Registration successful'),
                            localStorage.setItem('token', user['token']),
                            this.router.navigate(['']))
                            : this.alertify.message(user['message']);
                        return [3 /*break*/, 3];
                    case 2:
                        this.alertify.error('Check your input fields');
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        this.alertify.error(error_1.message);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    RegisterComponent.prototype.loginValidation = function () {
        if (this.user.email) {
            if (this.user.password) {
                if (this.user.firstName) {
                    if (this.user.lastName) {
                        if (this.user.username) {
                            return true;
                        }
                        else {
                            this.alertify.error('Enter your username');
                        }
                    }
                    else {
                        this.alertify.error('Enter your last name');
                    }
                }
                else {
                    this.alertify.error('Enter your first name');
                }
            }
            else {
                this.alertify.error('Enter your password');
            }
        }
        else {
            this.alertify.error('Enter your email');
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_0__["AlertifyService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input{\r\n    border-radius: 30px;\r\n    width: 300px;\r\n}\r\n\r\nimg {\r\n    border-radius: 50%;\r\n    width: 40px;\r\n}"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col\">\n      <div ngbDropdown class=\"d-inline-block\">\n        <input [(ngModel)]=\"searchTweet.search\" name=\"search\" (keyup)=\"search()\" type=\"text\" id=\"dropdownBasic1\" ngbDropdownToggle class=\"form-control\" placeholder=\"Search...\">\n        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n          <div *ngFor=\"let user of users\" class=\"ml-2\">\n              <a routerLink=\"/profile/{{user?._id}}\" routerLinkActive=\"router-link-active\" (click)=\"route()\">\n                <img class=\"list-inline-item\" src=\"{{user?.picture}}\" alt=\"{{user?.username}}\"\n              class=\"mr-2\">\n            <h6 class=\"card-title list-inline-item\">{{user?.firstName | titlecase}} {{user?.lastName | titlecase}}\n              <strong class=\"mr-3\">@{{user?.username}}</strong></h6>\n              </a>\n              <hr>\n          </div>\n          <small class=\"text-muted ml-4\">Search all people for <strong>{{searchTweet.search}}</strong></small>\n        </div>\n      </div>\n  </div>\n</div>\n  \n  "

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent(userService) {
        this.userService = userService;
        this.searchTweet = {};
    }
    SearchComponent.prototype.search = function () {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.getAllUsers()];
                    case 1:
                        users = _a.sent();
                        this.allUsers = users['user'];
                        this.users = (this.searchTweet.search) ? this.allUsers.filter(function (u) { return u.firstName.toLowerCase()
                            .includes(_this.searchTweet.search.toLowerCase()); }) : this.unFiltered;
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.route = function () {
        window.location.reload();
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/suggestions/suggestions.component.css":
/*!*******************************************************!*\
  !*** ./src/app/suggestions/suggestions.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    border-radius: 50%;\r\n    width: 50px;\r\n}\r\n\r\n.card-body {\r\n    width: 335px;\r\n}\r\n\r\n.card {\r\n    width: 335px;\r\n}\r\n\r\n.btn {\r\n    border-radius: 100px;\r\n}\r\n\r\n@media screen and (min-width: 0px) and (max-width: 1024px) {\r\n    .card { display: none; }  \r\n  }"

/***/ }),

/***/ "./src/app/suggestions/suggestions.component.html":
/*!********************************************************!*\
  !*** ./src/app/suggestions/suggestions.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" >\n  <h4 class=\"text-center mt-3\">Who to follow?</h4>\n    <div class=\"card-body list-inline\" *ngFor=\"let user of suggestions\">\n        <div class=\"float-left\">\n            <a  routerLinkActive=\"router-link-active\" (click)=\"route(user?._id, user?.username)\">\n              <img class=\"list-inline-item\" src=\"{{user?.picture}}\" alt=\"{{user?.username}}\"\n            class=\"mr-3\">\n            </a>\n        </div>\n       <div class=\"float-left\">\n          <a  routerLinkActive=\"router-link-active\" (click)=\"route(user?._id, user?.username)\">\n            <h6 class=\"card-title list-inline-item\">{{user?.firstName | titlecase}} {{user?.lastName | titlecase}}\n            <strong>@{{user?.username}}</strong></h6>\n          </a>\n          <br>\n          <button type=\"button\" class=\"btn btn-outline-primary mt-1 btn-sm\" (click)=\"follow(user._id)\">Follow</button>\n          <hr>\n       </div>\n    </div>\n    <p class=\"text-center\"><strong>Made by Samuel Essim</strong></p>\n    <p class=\"text-center text-muted\">© 2018 Twitter</p>\n  </div>\n"

/***/ }),

/***/ "./src/app/suggestions/suggestions.component.ts":
/*!******************************************************!*\
  !*** ./src/app/suggestions/suggestions.component.ts ***!
  \******************************************************/
/*! exports provided: SuggestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionsComponent", function() { return SuggestionsComponent; });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var SuggestionsComponent = /** @class */ (function () {
    function SuggestionsComponent(userService, alertify, authService, router) {
        this.userService = userService;
        this.alertify = alertify;
        this.authService = authService;
        this.router = router;
        this.reduce = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    SuggestionsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var suggestion;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.getSuggestions()];
                    case 1:
                        suggestion = _a.sent();
                        this.suggestions = suggestion['suggestions'];
                        this.filterSuggestions();
                        return [2 /*return*/];
                }
            });
        });
    };
    SuggestionsComponent.prototype.follow = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.followSomeone(id)];
                    case 1:
                        _a.sent();
                        this.suggestions.splice(this.suggestions.findIndex(function (u) { return u._id == id; }), 1);
                        this.alertify.success('You just followed another user');
                        this.reduce.emit(2);
                        return [2 /*return*/];
                }
            });
        });
    };
    SuggestionsComponent.prototype.filterSuggestions = function () {
        var _this = this;
        if (this.toRemove && this.toRemove !== this.authService.user.user._id) {
            this.suggestions.splice(this.suggestions.findIndex(function (u) { return u._id == _this.toRemove; }), 1);
        }
        else {
            this.suggestions = this.suggestions;
        }
    };
    SuggestionsComponent.prototype.route = function (id, name) {
        this.userService.userId = id;
        localStorage.setItem('userId', id);
        this.router.navigate(['/profile', "" + name]).then(() => {
            window.location.reload();
        })
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])('toRemove'),
        __metadata("design:type", Object)
    ], SuggestionsComponent.prototype, "toRemove", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        __metadata("design:type", Object)
    ], SuggestionsComponent.prototype, "reduce", void 0);
    SuggestionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-suggestions',
            template: __webpack_require__(/*! ./suggestions.component.html */ "./src/app/suggestions/suggestions.component.html"),
            styles: [__webpack_require__(/*! ./suggestions.component.css */ "./src/app/suggestions/suggestions.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_1__["AlertifyService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SuggestionsComponent);
    return SuggestionsComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'api/'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Florence Eya\Documents\GitHub\Xtremetwitting\mvpClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map