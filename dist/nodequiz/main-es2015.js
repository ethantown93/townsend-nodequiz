(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!***************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- /*\r\n============================================\r\n; Author: Ethan Townsend\r\n; Date:   8/12/2019\r\n; Description: web-425\r\n;===========================================\r\n*/  -->\r\n<app-nav></app-nav>\r\n\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/components/cumulative-summary/cumulative-summary.component.html":
/*!************************************************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/components/cumulative-summary/cumulative-summary.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- /*\n============================================\n; Author: Ethan Townsend\n; Date:   8/12/2019\n; Description: web-425\n;===========================================\n*/  -->\n\n<h2>Your Quiz Scores:</h2>\n\n<mat-card class='summary-card'>\n    <div *ngFor='let result of results.results'>\n        <mat-accordion multi='true'>\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <h4>{{result.quizName}}</h4>\n                </mat-expansion-panel-header>\n                <p><strong>Employee ID:</strong> {{ result.employeeId }}</p>\n                <p><strong>Score:</strong> {{ result.score }}%</p>\n            </mat-expansion-panel>\n        </mat-accordion>\n    </div>\n</mat-card>\n\n<h2>All Employee Quiz Scores</h2>\n\n<mat-card class='table-card'> \n\n    <table class=\"table table-hover\">\n        <thead>\n            <tr>\n                <th scope=\"col\">Employee ID</th>\n                <th scope=\"col\">Quiz Name</th>\n                <th scope=\"col\">Quiz ID</th>\n                <th scope=\"col\">Score</th>\n            </tr>\n        </thead>\n        <tbody *ngFor = 'let results of allResults.results'>\n            <tr>\n                <td>{{ results.employeeId }}</td>\n                <td>{{ results.quizName }}</td>\n                <td>{{ results.quizId }}</td>\n                <td [ngClass]=\"{'failing': results.score <= 40, 'marginal': results.score >= 41 && results.score <= 70, 'passing': results.score >= 71}\">{{ results.score }}%</td>\n            </tr>\n        </tbody>\n    </table>\n</mat-card>");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html":
/*!******************************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- /*\r\n============================================\r\n; Author: Ethan Townsend\r\n; Date:   8/12/2019\r\n; Description: web-425\r\n;===========================================\r\n*/  -->\r\n<mat-card class='dashboard-card'>\r\n    <h1>Select Your Quiz!</h1>\r\n\r\n    <div class='dashboard'>\r\n        <mat-accordion multi = 'true'>\r\n            <mat-expansion-panel *ngFor = 'let quizz of quizzes'>\r\n                <mat-expansion-panel-header>\r\n                    <p class='title'>{{ quizz.title }}</p>\r\n                </mat-expansion-panel-header>\r\n                <p>{{ quizz.description }}</p>\r\n                <mat-action-row>\r\n                    <a routerLink ='/presentation/{{ quizz.id }}'><button mat-raised-button color='accent' ><strong>Continue to Presentation</strong></button></a>\r\n                </mat-action-row>\r\n            </mat-expansion-panel>\r\n        </mat-accordion>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/components/error-handler/error-handler.component.html":
/*!**************************************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/components/error-handler/error-handler.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- /*\r\n============================================\r\n; Author: Ethan Townsend\r\n; Date:   8/12/2019\r\n; Description: web-425\r\n;===========================================\r\n*/ -->\r\n\r\n<h1 mat-dialog-title>Incorrect Employee ID.</h1>\r\n<div mat-dialog-content><p class='mat-body-1'>{{ data.message }}</p></div>\r\n<div mat-dialog-actions>\r\n    <button mat-raised-button mat-dialog-close color='primary'><mat-icon>keyboard_return</mat-icon></button>\r\n</div>\r\n");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/components/error-not-found/error-not-found.component.html":
/*!******************************************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/components/error-not-found/error-not-found.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- /*\r\n============================================\r\n; Author: Ethan Townsend\r\n; Date:   8/12/2019\r\n; Description: web-425\r\n;===========================================\r\n*/  -->\r\n\r\n\r\n<div class='error-container' and fxLayoutAlign=\"center\">\r\n    <mat-card class='error-card'>\r\n        <h1><strong>404</strong></h1>\r\n        <h3>The page you have found does not exist. Please navigate back to the dashboard.</h3>\r\n        <button mat-raised-button color='accent' routerLink='/dashboard'>Go to Dashboard</button>\r\n    </mat-card>\r\n</div>");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!********************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- /*\r\n============================================\r\n; Author: Ethan Townsend\r\n; Date:   8/12/2019\r\n; Description: web-425\r\n;===========================================\r\n*/  -->\r\n\r\n\r\n<div class='home-container' and fxLayoutAlign=\"center\">\r\n    <mat-card class='home-card'>\r\n        <h1>Welcome to NodeQuiz!</h1>\r\n        <h3>You're not logged in. Please navigate to the login page.</h3>\r\n        <button mat-raised-button color='accent' routerLink='/login'>Go to Login</button>\r\n    </mat-card>\r\n</div>");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!**********************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- /*\r\n============================================\r\n; Author: Ethan Townsend\r\n; Date:   8/12/2019\r\n; Description: web-425\r\n;===========================================\r\n*/  -->\r\n\r\n\r\n<div class='login-container' and fxLayoutAlign=\"center\">\r\n        <mat-card class='login-card'>\r\n            <h1>Welcome to NodeQuiz!</h1>\r\n            <h3>Please Log in using a valid Employee ID</h3>\r\n            <form class='form'> \r\n                <mat-form-field>\r\n                    <input matInput [(ngModel)]='loginUserData.id' type='text' name='id' placeholder='Please enter your employee ID' #id='ngModel' required minlength='4'>\r\n                    <mat-error *ngIf='id.invalid'>Please enter a valid ID</mat-error>\r\n                </mat-form-field>\r\n                <button mat-raised-button color='accent' (click)='loginUser()'>Submit</button>\r\n            </form>\r\n        </mat-card>\r\n    </div>");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html":
/*!******************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- /*\r\n============================================\r\n; Author: Ethan Townsend\r\n; Date:   8/12/2019\r\n; Description: web-425\r\n;===========================================\r\n*/ -->\r\n\r\n\r\n<mat-toolbar class='menu' role='header' color='primary'>\r\n    <mat-toolbar-row>\r\n      <div class='left' fxFlex='75%'>\r\n        <span class='logo'>\r\n            <!-- <mat-icon class='home_icon'>home</mat-icon> -->\r\n          NodeQuiz\r\n        </span>\r\n      </div>\r\n      <div class='right' fxFlex='25%'>\r\n        <ul>\r\n          <li *ngIf=\"!authService.loggedIn()\">\r\n            <a mat-button routerLink='/' routerLinkActive='mat-accent' [routerLinkActiveOptions]=\"{ exact: true }\">Home</a>\r\n          </li>\r\n          <li *ngIf='!authService.loggedIn()'>\r\n            <a mat-button routerLink='/login' routerLinkActive='mat-accent'>Login <mat-icon>account_box</mat-icon></a>\r\n          </li>\r\n          <li *ngIf='authService.loggedIn()'>\r\n            <a mat-button routerLink='/dashboard' routerLinkActive='mat-accent'>Dashboard</a>\r\n          </li>\r\n          <li *ngIf='authService.loggedIn()'>\r\n            <a mat-button routerLink='/cumulative-summary' routerLinkActive='mat-accent'>Cumulative Scores</a>\r\n          </li>\r\n          <li *ngIf='authService.loggedIn()'>\r\n            <a mat-button (click)='authService.onLogout()'>Logout <mat-icon>exit_to_app</mat-icon></a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/components/presentations/presentations.component.html":
/*!**************************************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/components/presentations/presentations.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- /*\r\n============================================\r\n; Author: Ethan Townsend\r\n; Date:   8/12/2019\r\n; Description: web-425\r\n;===========================================\r\n*/  -->\r\n\r\n<div class='carousel-container'>\r\n    <mat-card class='presentation-card'>\r\n        <carousel class='carousel' [interval]=\"false\">\r\n            <slide *ngFor=\"let slide of presentation; let index=index\">\r\n            <img [src]=\"slide.name\" alt=\"image slide\" style=\"display: block; width: 100%;\">\r\n            </slide>\r\n        </carousel>\r\n    </mat-card>\r\n<br/>\r\n<a routerLink ='/quiz/{{ presentationId }}'><button mat-raised-button color='accent' ><strong>Take the Quiz</strong></button></a>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/components/quiz/quiz.component.html":
/*!********************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/components/quiz/quiz.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- /*\r\n============================================\r\n; Author: Ethan Townsend\r\n; Date:   8/12/2019\r\n; Description: web-425\r\n;===========================================\r\n*/ -->\r\n\r\n<div class='quiz-container' *ngIf='quiz'>\r\n\r\n    <h3 class='quiz-h3'>{{ quiz.quiz.quiz_name }} </h3>\r\n\r\n    <form #form='ngForm' (submit)='onSubmit(form.value); form.reset()'>\r\n        <mat-card class='quiz-card' *ngFor='let questions of quizQuestions; let i = index'>\r\n            <h3>{{i + 1}}. {{ questions.question }} </h3>\r\n                <div *ngFor='let item of questions.question_answers'>\r\n\r\n                        <input [(ngModel)]='q[questions.id]' [(ngModel)]='a[questions.name]' [checked]='q[questions.id]' value='{{item.id}};{{item.isCorrect}}' name='a{{ questions.id }}' type='radio'/>\r\n                            {{ item.answer }}\r\n                </div>\r\n        </mat-card>\r\n        <div class='btn-container'>\r\n            <a routerLink='/presentation/{{ quizId }}' fxLayoutAlign=\"center\"><button mat-raised-button color='accent'><strong>Back to\r\n                Presentation</strong></button></a>\r\n            <button type='submit' class='submit-btn' mat-raised-button color='primary'>Submit</button>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/components/summary/summary.component.html":
/*!**************************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/components/summary/summary.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- /*\n============================================\n; Author: Ethan Townsend\n; Date:   8/12/2019\n; Description: web-425\n;===========================================\n*/  -->\n<div class='dialog-container'>\n    <mat-dialog-content>\n        <h4>Quiz Summary:</h4>\n    </mat-dialog-content>\n\n    <mat-dialog-actions>\n        \n        <p>You scored a: <span [ngClass]=\"{'failing': score <= 40, 'marginal': score >= 41 && score <= 70, 'passing': score >= 71}\"><strong>{{ score }}%</strong></span> </p>\n        <br/>\n        <p>{{ message }}</p>\n        <button mat-raised-button (click)='onClose()' color='primary'>Confirm</button>\n    </mat-dialog-actions>\n</div>");

/***/ }),

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_error_not_found_error_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/error-not-found/error-not-found.component */ "./src/app/components/error-not-found/error-not-found.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _components_presentations_presentations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/presentations/presentations.component */ "./src/app/components/presentations/presentations.component.ts");
/* harmony import */ var _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/quiz/quiz.component */ "./src/app/components/quiz/quiz.component.ts");
/* harmony import */ var _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/summary/summary.component */ "./src/app/components/summary/summary.component.ts");
/* harmony import */ var _components_cumulative_summary_cumulative_summary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/cumulative-summary/cumulative-summary.component */ "./src/app/components/cumulative-summary/cumulative-summary.component.ts");
/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/












const routes = [
    {
        path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'dashboard',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'presentation/:id', component: _components_presentations_presentations_component__WEBPACK_IMPORTED_MODULE_8__["PresentationsComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'summary/:id/:score', component: _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_10__["SummaryComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'cumulative-summary', component: _components_cumulative_summary_cumulative_summary_component__WEBPACK_IMPORTED_MODULE_11__["CumulativeSummaryComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'quiz/:id', component: _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_9__["QuizComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: '404', component: _components_error_not_found_error_not_found_component__WEBPACK_IMPORTED_MODULE_5__["ErrorNotFoundComponent"]
    },
    {
        path: "**", redirectTo: '/404'
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: []
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\r\n============================================\r\n; Author: Ethan Townsend\r\n; Date:   8/12/2019\r\n; Description: web-425\r\n;===========================================\r\n*/ \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztDQU1DIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG47IEF1dGhvcjogRXRoYW4gVG93bnNlbmRcclxuOyBEYXRlOiAgIDgvMTIvMjAxOVxyXG47IERlc2NyaXB0aW9uOiB3ZWItNDI1XHJcbjs9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiovIFxyXG4iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'nodequizz';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _components_error_not_found_error_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/error-not-found/error-not-found.component */ "./src/app/components/error-not-found/error-not-found.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "../node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "../node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "../node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "../node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ "../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../error-interceptor */ "./src/error-interceptor.ts");
/* harmony import */ var _components_error_handler_error_handler_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/error-handler/error-handler.component */ "./src/app/components/error-handler/error-handler.component.ts");
/* harmony import */ var _components_presentations_presentations_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/presentations/presentations.component */ "./src/app/components/presentations/presentations.component.ts");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "../node_modules/ngx-bootstrap/carousel/fesm2015/ngx-bootstrap-carousel.js");
/* harmony import */ var _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/quiz/quiz.component */ "./src/app/components/quiz/quiz.component.ts");
/* harmony import */ var _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/summary/summary.component */ "./src/app/components/summary/summary.component.ts");
/* harmony import */ var _components_cumulative_summary_cumulative_summary_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/cumulative-summary/cumulative-summary.component */ "./src/app/components/cumulative-summary/cumulative-summary.component.ts");
/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/






























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
            _components_error_not_found_error_not_found_component__WEBPACK_IMPORTED_MODULE_8__["ErrorNotFoundComponent"],
            _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
            _components_error_handler_error_handler_component__WEBPACK_IMPORTED_MODULE_22__["ErrorHandlerComponent"],
            _components_presentations_presentations_component__WEBPACK_IMPORTED_MODULE_23__["PresentationsComponent"],
            _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_25__["QuizComponent"],
            _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_26__["SummaryComponent"],
            _components_cumulative_summary_cumulative_summary_component__WEBPACK_IMPORTED_MODULE_27__["CumulativeSummaryComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_24__["CarouselModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"]
        ],
        providers: [_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_21__["ErrorInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [_components_error_handler_error_handler_component__WEBPACK_IMPORTED_MODULE_22__["ErrorHandlerComponent"], _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_26__["SummaryComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/




let AuthGuard = class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (this.auth.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/




let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.loginUrl = '/api/login';
        this.quizUrl = '/api/quiz/';
        this.resultsUrl = '/api/post';
        this.summaryUrl = '/api/summary/';
        this.allResults = '/api/cumulative-results';
    }
    getAllResults() {
        return this.http.get(this.allResults);
    }
    postQuiz(data) {
        console.log(data + ' from servie');
        return this.http.post(this.resultsUrl, data);
    }
    login(user) {
        return this.http.post(this.loginUrl, user);
    }
    getResults(employeeId) {
        console.log(employeeId);
        return this.http.get(this.summaryUrl + employeeId);
    }
    getQuiz(quizId) {
        return this.http.get(this.quizUrl + quizId);
    }
    loggedIn() {
        return !!localStorage.getItem('token');
    }
    getToken() {
        return localStorage.getItem('token');
    }
    onLogout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/components/cumulative-summary/cumulative-summary.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/cumulative-summary/cumulative-summary.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\r\n============================================\r\n; Author: Ethan Townsend\r\n; Date:   8/12/2019\r\n; Description: web-425\r\n;===========================================\r\n*/ \r\n\r\nh2 {\r\n    text-align: center;\r\n    margin-top: 40px;\r\n} \r\n\r\n.summary-card{\r\n    box-shadow: 2px 2px 10px 10px rgb(158, 158, 158);\r\n    width: 75%;\r\n    margin: auto;\r\n    margin-top: 40px;\r\n} \r\n\r\n.table-card {\r\n    box-shadow: 2px 2px 10px 10px rgb(158, 158, 158);\r\n    width: 75%;\r\n    margin: auto;\r\n    margin-top: 40px;\r\n    margin-bottom: 40px;\r\n} \r\n\r\nmat-expansion-panel {\r\n    width: 90%;\r\n    margin: auto;\r\n    background-color: rgba(207, 207, 207, 0.616);\r\n} \r\n\r\np, h4 {\r\n    margin-top: 5px;\r\n} \r\n\r\n.passing {\r\n    color: green;\r\n} \r\n\r\n.failing {\r\n    color: red;\r\n} \r\n\r\n.marginal {\r\n    color: orange;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdW11bGF0aXZlLXN1bW1hcnkvY3VtdWxhdGl2ZS1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztDQU1DOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdEQUFnRDtJQUNoRCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdEQUFnRDtJQUNoRCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VtdWxhdGl2ZS1zdW1tYXJ5L2N1bXVsYXRpdmUtc3VtbWFyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuOyBBdXRob3I6IEV0aGFuIFRvd25zZW5kXHJcbjsgRGF0ZTogICA4LzEyLzIwMTlcclxuOyBEZXNjcmlwdGlvbjogd2ViLTQyNVxyXG47PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qLyBcclxuXHJcbmgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LWNhcmR7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggMTBweCByZ2IoMTU4LCAxNTgsIDE1OCk7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLnRhYmxlLWNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IDEwcHggcmdiKDE1OCwgMTU4LCAxNTgpO1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNywgMjA3LCAyMDcsIDAuNjE2KTtcclxufVxyXG5cclxucCwgaDQge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4ucGFzc2luZyB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5mYWlsaW5nIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5tYXJnaW5hbCB7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/cumulative-summary/cumulative-summary.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/cumulative-summary/cumulative-summary.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CumulativeSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CumulativeSummaryComponent", function() { return CumulativeSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/




let CumulativeSummaryComponent = class CumulativeSummaryComponent {
    constructor(auth, http) {
        this.auth = auth;
        this.http = http;
        this.results = {};
        this.allResults = {};
    }
    ngOnInit() {
        this.getUser();
        this.auth.getResults(this.employeeId).subscribe(res => {
            if (res) {
                this.results = res;
                console.log(this.results);
            }
        });
        this.auth.getAllResults().subscribe(res => {
            console.log(res);
            if (res) {
                this.allResults = res;
            }
            else {
                console.log('error');
            }
        });
    }
    getUser() {
        this.employeeId = localStorage.getItem('user');
        console.log(this.employeeId);
    }
};
CumulativeSummaryComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
CumulativeSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cumulative-summary',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cumulative-summary.component.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/components/cumulative-summary/cumulative-summary.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cumulative-summary.component.css */ "./src/app/components/cumulative-summary/cumulative-summary.component.css")).default]
    })
], CumulativeSummaryComponent);



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\r\n============================================\r\n; Author: Ethan Townsend\r\n; Date:   8/12/2019\r\n; Description: web-425\r\n;===========================================\r\n*/ \r\n\r\nmat-card {\r\n    width: 75%;\r\n    margin: auto;\r\n    margin-top: 100px;\r\n} \r\n\r\n.dashboard-card {\r\n     box-shadow: 2px 2px 10px 10px rgb(158, 158, 158);\r\n} \r\n\r\n.title {\r\n    font-size: 18px;\r\n} \r\n\r\nh1, p {\r\n    text-align: center;\r\n    margin-top: 20px;\r\n} \r\n\r\n.dashboard {\r\n    margin-top: 30px;\r\n} \r\n\r\nmat-expansion-panel {\r\n    width: 70%;\r\n    margin: auto;\r\n    background-color: rgba(207, 207, 207, 0.616);\r\n} \r\n\r\na {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztDQU1DOztBQUVEO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7S0FDSyxnREFBZ0Q7QUFDckQ7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbjsgQXV0aG9yOiBFdGhhbiBUb3duc2VuZFxyXG47IERhdGU6ICAgOC8xMi8yMDE5XHJcbjsgRGVzY3JpcHRpb246IHdlYi00MjVcclxuOz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKi8gXHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtY2FyZCB7XHJcbiAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IDEwcHggcmdiKDE1OCwgMTU4LCAxNTgpO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG5oMSwgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA3LCAyMDcsIDIwNywgMC42MTYpO1xyXG59XHJcblxyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../quiz.service */ "./src/app/quiz.service.ts");

/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/


let DashboardComponent = class DashboardComponent {
    constructor(quizService) {
        this.quizService = quizService;
    }
    ngOnInit() {
        this.quizzes = this.quizService.getQuizzes();
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/components/error-handler/error-handler.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/error-handler/error-handler.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\r\n============================================\r\n; Author: Ethan Townsend\r\n; Date:   8/12/2019\r\n; Description: web-425\r\n;===========================================\r\n*/\r\n\r\nbutton {\r\n    margin: auto;\r\n}\r\n\r\nh1, p {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lcnJvci1oYW5kbGVyL2Vycm9yLWhhbmRsZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0NBTUM7O0FBRUQ7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lcnJvci1oYW5kbGVyL2Vycm9yLWhhbmRsZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbjsgQXV0aG9yOiBFdGhhbiBUb3duc2VuZFxyXG47IERhdGU6ICAgOC8xMi8yMDE5XHJcbjsgRGVzY3JpcHRpb246IHdlYi00MjVcclxuOz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKi9cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmgxLCBwIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/error-handler/error-handler.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/error-handler/error-handler.component.ts ***!
  \*********************************************************************/
/*! exports provided: ErrorHandlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerComponent", function() { return ErrorHandlerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../node_modules/@angular/material/esm2015/material.js");
/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/



let ErrorHandlerComponent = class ErrorHandlerComponent {
    constructor(data) {
        this.data = data;
        this.message = 'A gosh darn error has done occured ayyyut';
    }
    ngOnInit() {
    }
};
ErrorHandlerComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ErrorHandlerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error-handler',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error-handler.component.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/components/error-handler/error-handler.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error-handler.component.css */ "./src/app/components/error-handler/error-handler.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ErrorHandlerComponent);



/***/ }),

/***/ "./src/app/components/error-not-found/error-not-found.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/error-not-found/error-not-found.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\r\n============================================\r\n; Author: Ethan Townsend\r\n; Date:   8/12/2019\r\n; Description: web-425\r\n;===========================================\r\n*/\r\n\r\nh1, h3 {\r\n    margin: 20px;\r\n}\r\n\r\nmat-card {\r\n    width: 50%;\r\n    margin-top: 100px;\r\n    text-align: center;\r\n}\r\n\r\n.error-card {\r\n    box-shadow: 2px 2px 10px 10px rgb(158, 158, 158);\r\n}\r\n\r\nbutton {\r\n    margin-top: 15px;\r\n    width: 20%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lcnJvci1ub3QtZm91bmQvZXJyb3Itbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztDQU1DOztBQUVEO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3Itbm90LWZvdW5kL2Vycm9yLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuOyBBdXRob3I6IEV0aGFuIFRvd25zZW5kXHJcbjsgRGF0ZTogICA4LzEyLzIwMTlcclxuOyBEZXNjcmlwdGlvbjogd2ViLTQyNVxyXG47PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qL1xyXG5cclxuaDEsIGgzIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZXJyb3ItY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggMTBweCByZ2IoMTU4LCAxNTgsIDE1OCk7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgd2lkdGg6IDIwJTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/error-not-found/error-not-found.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/error-not-found/error-not-found.component.ts ***!
  \*************************************************************************/
/*! exports provided: ErrorNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorNotFoundComponent", function() { return ErrorNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/


let ErrorNotFoundComponent = class ErrorNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
ErrorNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error-not-found.component.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/components/error-not-found/error-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error-not-found.component.css */ "./src/app/components/error-not-found/error-not-found.component.css")).default]
    })
], ErrorNotFoundComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\r\n============================================\r\n; Author: Ethan Townsend\r\n; Date:   8/12/2019\r\n; Description: web-425\r\n;===========================================\r\n*/\r\n\r\nh1, h3 {\r\n    margin: 20px;\r\n}\r\n\r\nmat-card {\r\n    width: 50%;\r\n    margin-top: 100px;\r\n    text-align: center;\r\n}\r\n\r\n.home-card {\r\n    box-shadow: 2px 2px 10px 10px rgb(158, 158, 158);\r\n}\r\n\r\nbutton {\r\n    margin-top: 15px;\r\n    width: 15%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0NBTUM7O0FBRUQ7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbjsgQXV0aG9yOiBFdGhhbiBUb3duc2VuZFxyXG47IERhdGU6ICAgOC8xMi8yMDE5XHJcbjsgRGVzY3JpcHRpb246IHdlYi00MjVcclxuOz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKi9cclxuXHJcbmgxLCBoMyB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmhvbWUtY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggMTBweCByZ2IoMTU4LCAxNTgsIDE1OCk7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgd2lkdGg6IDE1JTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\r\n============================================\r\n; Author: Ethan Townsend\r\n; Date:   8/12/2019\r\n; Description: web-425\r\n;===========================================\r\n*/\r\n\r\nh1, h3 {\r\n    margin: 20px;\r\n}\r\n\r\nmat-card {\r\n    width: 50%;\r\n    margin-top: 100px;\r\n    text-align: center;\r\n}\r\n\r\n.login-card {\r\n    box-shadow: 2px 2px 10px 10px rgb(158, 158, 158);\r\n}\r\n\r\nmat-form-field {\r\n    width: 90%;\r\n}\r\n\r\nbutton {\r\n    margin-top: 15px;\r\n    width: 15%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Q0FNQzs7QUFFRDtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG47IEF1dGhvcjogRXRoYW4gVG93bnNlbmRcclxuOyBEYXRlOiAgIDgvMTIvMjAxOVxyXG47IERlc2NyaXB0aW9uOiB3ZWItNDI1XHJcbjs9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiovXHJcblxyXG5oMSwgaDMge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAxMHB4IHJnYigxNTgsIDE1OCwgMTU4KTtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB3aWR0aDogMTUlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/

/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/




let LoginComponent = class LoginComponent {
    constructor(auth, router, http) {
        this.auth = auth;
        this.router = router;
        this.http = http;
        this.loginUserData = { id: '' };
        this.loginData = this.loginUserData;
    }
    loginUser() {
        console.log(this.loginData);
        this.auth.login(this.loginData).subscribe(res => {
            console.log(res);
            localStorage.setItem('token', res.token),
                localStorage.setItem('user', res.payload.subject);
            this.router.navigate(['/dashboard']);
        }, err => console.log(err));
    }
    ngOnInit() {
    }
};
LoginComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/nav/nav.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/nav/nav.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\r\n============================================\r\n; Author: Ethan Townsend\r\n; Date:   8/12/2019\r\n; Description: web-425\r\n;===========================================\r\n*/ \r\nul {\r\n    text-align: center;\r\n    margin: auto;\r\n} \r\nli, a {\r\n    display: inline-block;\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztDQU1DO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG47IEF1dGhvcjogRXRoYW4gVG93bnNlbmRcclxuOyBEYXRlOiAgIDgvMTIvMjAxOVxyXG47IERlc2NyaXB0aW9uOiB3ZWItNDI1XHJcbjs9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiovIFxyXG51bCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmxpLCBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/



let NavComponent = class NavComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
};
NavComponent.ctorParameters = () => [
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.css */ "./src/app/components/nav/nav.component.css")).default]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/components/presentations/presentations.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/presentations/presentations.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\r\n============================================\r\n; Author: Ethan Townsend\r\n; Date:   8/12/2019\r\n; Description: web-425\r\n;===========================================\r\n*/\r\n\r\n.carousel-container {\r\n    width: 60%;\r\n    margin: auto;\r\n    margin-top: 30px;\r\n    text-align: center;\r\n}\r\n\r\n.btn {\r\n    width: 30%;\r\n    min-height: 50px;\r\n    display: inline-block;\r\n    font-size: 18px;\r\n}\r\n\r\n.presentation-card {\r\n    box-shadow: 2px 2px 10px 10px rgb(158, 158, 158);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmVzZW50YXRpb25zL3ByZXNlbnRhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0NBTUM7O0FBRUQ7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0RBQWdEO0FBQ3BEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcmVzZW50YXRpb25zL3ByZXNlbnRhdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbjsgQXV0aG9yOiBFdGhhbiBUb3duc2VuZFxyXG47IERhdGU6ICAgOC8xMi8yMDE5XHJcbjsgRGVzY3JpcHRpb246IHdlYi00MjVcclxuOz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKi9cclxuXHJcbi5jYXJvdXNlbC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5wcmVzZW50YXRpb24tY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggMTBweCByZ2IoMTU4LCAxNTgsIDE1OCk7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/presentations/presentations.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/presentations/presentations.component.ts ***!
  \*********************************************************************/
/*! exports provided: PresentationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationsComponent", function() { return PresentationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../quiz.service */ "./src/app/quiz.service.ts");
/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/




let PresentationsComponent = class PresentationsComponent {
    constructor(activeRoute, quizService) {
        this.activeRoute = activeRoute;
        this.quizService = quizService;
        this.presentation = [];
        this.javascript = [];
        this.rest = [];
        this.tc = [];
        this.javascript = [
            { name: './assets/images/js1.JPG' }, { name: './assets/images/js2.JPG' }, { name: './assets/images/js3.JPG' }, { name: './assets/images/js4.JPG' }, { name: './assets/images/js5.JPG' }, { name: './assets/images/js6.JPG' }, { name: './assets/images/js7.JPG' }, { name: './assets/images/js8.JPG' }, { name: './assets/images/js9.JPG' }, { name: './assets/images/js10.JPG' }, { name: './assets/images/js11.JPG' }, { name: './assets/images/js12.JPG' },
        ];
        this.rest = [
            { name: './assets/images/rest1.JPG' }, { name: './assets/images/rest2.JPG' }, { name: './assets/images/rest3.JPG' }, { name: './assets/images/rest4.JPG' }, { name: './assets/images/rest5.JPG' }, { name: './assets/images/rest6.JPG' }, { name: './assets/images/rest7.JPG' }, { name: './assets/images/rest8.JPG' }, { name: './assets/images/rest9.JPG' }, { name: './assets/images/rest10.JPG' }, { name: './assets/images/rest11.JPG' }, { name: './assets/images/rest12.JPG' },
        ];
        this.tc = [
            { name: './assets/images/tc1.JPG ' }, { name: './assets/images/tc2.JPG ' }, { name: './assets/images/tc3.JPG ' }, { name: './assets/images/tc4.JPG ' }, { name: './assets/images/tc5.JPG ' }, { name: './assets/images/tc6.JPG ' }, { name: './assets/images/tc7.JPG ' }, { name: './assets/images/tc8.JPG ' }, { name: './assets/images/tc9.JPG ' }, { name: './assets/images/tc10.JPG ' }, { name: './assets/images/tc11.JPG ' }, { name: './assets/images/tc12.JPG ' },
        ];
        this.presentationId = parseInt(this.activeRoute.snapshot.paramMap.get('id'));
    }
    newArray() {
        console.log(this.presentationId);
        if (this.presentationId === 101) {
            this.presentation = [...this.javascript];
        }
        if (this.presentationId === 102) {
            this.presentation = [...this.rest];
        }
        if (this.presentationId === 103) {
            this.presentation = [...this.tc];
            console.log(this.presentation);
        }
        else {
            return;
        }
    }
    ngOnInit() {
        this.newArray();
    }
};
PresentationsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"] }
];
PresentationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-presentations',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./presentations.component.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/components/presentations/presentations.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./presentations.component.css */ "./src/app/components/presentations/presentations.component.css")).default]
    })
], PresentationsComponent);



/***/ }),

/***/ "./src/app/components/quiz/quiz.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/quiz/quiz.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\r\n============================================\r\n; Author: Ethan Townsend\r\n; Date:   8/12/2019\r\n; Description: web-425\r\n;===========================================\r\n*/\r\n\r\n.quiz-container {\r\n    margin: auto;\r\n    width: 60%;\r\n    white-space: normal;\r\n}\r\n\r\n.quiz-h3 {\r\n    text-align: center;\r\n    margin-top: 20px;\r\n}\r\n\r\n.quiz-card {\r\n    box-shadow: 2px 2px 10px 10px rgb(158, 158, 158);\r\n    margin: 30px;\r\n}\r\n\r\n.quiz-card:hover {\r\n    box-shadow: 2px 2px 6px 6px rgba(33, 116, 224, 0.541);\r\n}\r\n\r\n.btn-container {\r\n    text-align: center;\r\n}\r\n\r\nbutton {\r\n    margin-bottom: 10px;\r\n    display: inline-block;\r\n    min-width: 165px;\r\n}\r\n\r\na:link{\r\n    text-decoration: none;\r\n}\r\n\r\n.submit-btn {\r\n    min-width: 165px;\r\n    margin-bottom: 50px;\r\n    display: inline-block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWl6L3F1aXouY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0NBTUM7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnREFBZ0Q7SUFDaEQsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFEQUFxRDtBQUN6RDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3F1aXovcXVpei5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuOyBBdXRob3I6IEV0aGFuIFRvd25zZW5kXHJcbjsgRGF0ZTogICA4LzEyLzIwMTlcclxuOyBEZXNjcmlwdGlvbjogd2ViLTQyNVxyXG47PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qL1xyXG5cclxuLnF1aXotY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59XHJcblxyXG4ucXVpei1oMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ucXVpei1jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAxMHB4IHJnYigxNTgsIDE1OCwgMTU4KTtcclxuICAgIG1hcmdpbjogMzBweDtcclxufVxyXG5cclxuLnF1aXotY2FyZDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCA2cHggcmdiYSgzMywgMTE2LCAyMjQsIDAuNTQxKTtcclxufVxyXG5cclxuLmJ0bi1jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1pbi13aWR0aDogMTY1cHg7XHJcbn1cclxuXHJcbmE6bGlua3tcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnN1Ym1pdC1idG4ge1xyXG4gICAgbWluLXdpZHRoOiAxNjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/quiz/quiz.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/quiz/quiz.component.ts ***!
  \***************************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../summary/summary.component */ "./src/app/components/summary/summary.component.ts");
/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/








let QuizComponent = class QuizComponent {
    constructor(dialog, activeRoute, auth, http, router) {
        this.dialog = dialog;
        this.activeRoute = activeRoute;
        this.auth = auth;
        this.http = http;
        this.router = router;
        this.quizQuestions = [];
        this.q = [];
        this.a = [];
        this.summaryScore = {};
        this.newQuizResults = {};
        this.quizId = parseInt(this.activeRoute.snapshot.paramMap.get('id'));
        this.auth.getQuiz(this.quizId).subscribe(res => {
            this.quiz = res;
            this.test();
        }, err => console.log(err));
    }
    test() {
        for (let i = 0; i < this.quiz.quiz.questions.length; i++) {
            this.quizQuestions.push(this.quiz.quiz.questions[i]);
        }
    }
    onSubmit(form) {
        event.preventDefault();
        let quizResults;
        let score = 0;
        quizResults = form;
        // console.log(quizResults)
        let data = JSON.stringify(quizResults);
        // console.log(data)
        let newData = data.split(/[{};:"",]+/, 75);
        console.log(newData);
        loop();
        function loop() {
            for (let i = 0; i < newData.length; i++) {
                if (newData[i] == "true") {
                    score += 10;
                    // console.log(score)
                }
            }
            return score;
        }
        console.log(score);
        this.newQuizResults['employeeId'] = this.employeeId;
        this.newQuizResults['quizId'] = this.quizId;
        this.newQuizResults['score'] = score;
        this.summaryScore['score'] = score;
        console.log(this.summaryScore);
        this.newQuizResults['quizName'] = this.quiz.quiz.quiz_name;
        localStorage.setItem("score", JSON.stringify(score)),
            console.log(this.newQuizResults);
        this.auth.postQuiz(this.newQuizResults).subscribe(res => {
            if (res) {
                console.log(res);
            }
        });
        this.openDialog();
        // this.router.navigate(['/summary/' + this.employeeId + '/' + score]);
    }
    openDialog() {
        let dialogRef = this.dialog.open(_summary_summary_component__WEBPACK_IMPORTED_MODULE_6__["SummaryComponent"]);
        dialogRef.afterClosed().subscribe(res => {
            console.log('dialog closed');
        });
    }
    // openDialog() {
    //   const dialogConfig = new MatDialogConfig();
    //   const quizModal = this.dialog.open(SummaryComponent, {
    //     width: "60%",
    //     height: "90%",
    //     disableClose: true
    //   });
    //   quizModal.componentInstance.summaryScore = this.summaryScore;
    // }
    getUser() {
        this.employeeId = localStorage.getItem('user');
        console.log(this.employeeId);
    }
    ngOnInit() {
        this.getUser();
    }
};
QuizComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quiz',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quiz.component.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/components/quiz/quiz.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quiz.component.css */ "./src/app/components/quiz/quiz.component.css")).default]
    })
], QuizComponent);



/***/ }),

/***/ "./src/app/components/summary/summary.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/summary/summary.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\r\n============================================\r\n; Author: Ethan Townsend\r\n; Date:   8/12/2019\r\n; Description: web-425\r\n;===========================================\r\n*/ \r\n\r\n.dialog-container {\r\n    margin: 30px 30px;\r\n    text-align: center;\r\n} \r\n\r\nbutton {\r\n    display: inline-block;\r\n    margin: auto;\r\n    margin-top: 10px;\r\n    width: 80%;\r\n} \r\n\r\np {\r\n    margin: auto;\r\n    width: 100%;\r\n} \r\n\r\n.passing {\r\n    color: green;\r\n} \r\n\r\n.failing {\r\n    color: red;\r\n} \r\n\r\n.marginal {\r\n    color: orange;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdW1tYXJ5L3N1bW1hcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0NBTUM7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVDO0lBQ0csWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdW1tYXJ5L3N1bW1hcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbjsgQXV0aG9yOiBFdGhhbiBUb3duc2VuZFxyXG47IERhdGU6ICAgOC8xMi8yMDE5XHJcbjsgRGVzY3JpcHRpb246IHdlYi00MjVcclxuOz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKi8gXHJcblxyXG4uZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDMwcHggMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4gcCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnBhc3Npbmcge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uZmFpbGluZyB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ubWFyZ2luYWwge1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/summary/summary.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/summary/summary.component.ts ***!
  \*********************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../node_modules/@angular/material/esm2015/material.js");
/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/




let SummaryComponent = class SummaryComponent {
    constructor(router, dialogRef, data) {
        this.router = router;
        this.dialogRef = dialogRef;
        this.data = data;
        this.message = '';
    }
    getScore() {
        this.score = localStorage.getItem('score');
        if (this.score <= 40) {
            this.message = 'Better luck next time!';
        }
        else if (this.score >= 41 && this.score <= 70) {
            this.message = 'Not bad, but I think you can do better!';
        }
        else
            (this.message = 'Great Job!');
    }
    onClose() {
        localStorage.removeItem('score');
        this.dialogRef.close();
        this.router.navigate(['/cumulative-summary']);
    }
    scoreStyle() {
        return {
            'test': true,
        };
    }
    ngOnInit() {
        this.getScore();
    }
};
SummaryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
SummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-summary',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./summary.component.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/components/summary/summary.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./summary.component.css */ "./src/app/components/summary/summary.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], SummaryComponent);



/***/ }),

/***/ "./src/app/quiz.service.ts":
/*!*********************************!*\
  !*** ./src/app/quiz.service.ts ***!
  \*********************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/


// import { HttpCleint } from '@angular/common/http';
let QuizService = class QuizService {
    constructor() {
        this.quizData = [
            {
                id: '101',
                title: 'Intruduction to Javascript',
                description: "Learn the basics of Javascript that you'll need for front-end and back-end development.",
                images: [
                    {
                        image: 'js1.jpg'
                    }
                ]
            },
            {
                id: '102',
                title: "REST",
                description: "Learn the fundamentals of REST, and why it might be a smart choice for you."
            },
            {
                id: '103',
                title: 'The Two-Pizza Rule & Coninuous Integration',
                description: "Learn what the two-pizza and Continuous integration is, and why incorporating them into your DevOps practices might be beneficial."
            }
        ];
    }
    getQuizzes() {
        return this.quizData;
    }
};
QuizService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], QuizService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/

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

/***/ "./src/error-interceptor.ts":
/*!**********************************!*\
  !*** ./src/error-interceptor.ts ***!
  \**********************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _app_components_error_handler_error_handler_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/components/error-handler/error-handler.component */ "./src/app/components/error-handler/error-handler.component.ts");
/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/






let ErrorInterceptor = class ErrorInterceptor {
    constructor(dialog) {
        this.dialog = dialog;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            let errorMessage = 'Please Try Again.';
            if (error.error.message) {
                errorMessage = error.error.message;
            }
            this.dialog.open(_app_components_error_handler_error_handler_component__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlerComponent"], { data: { message: errorMessage } });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\EETfi\bu-webdev\townsend-nodequiz\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map