webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* unused harmony export AppRoutingModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */],
        children: []
    },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        providers: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nhtml,\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.right {\r\n    float: right;\r\n}\r\n\r\n.left {\r\n    float: left;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n}\r\n\r\n.title {\r\n    background: #000;\r\n    color: #fff;\r\n    font-size: 2em;\r\n    padding: 0.5em;\r\n}\r\n\r\n.addEmp {\r\n    float: right;\r\n    background: DodgerBlue;\r\n    margin: 1em 12px;\r\n    border: 1px solid #5C7FE4;\r\n    padding: 10px;\r\n    color: #fff;\r\n    box-shadow: 1px 1px 1px 1px #5C7FE4;\r\n    font-family: cursive;\r\n    text-transform: uppercase;\r\n}\r\n\r\nul {\r\n    width: 100%;\r\n    list-style: none;\r\n    padding: 0;\r\n}\r\n\r\nul li {\r\n    background: #C5C6C7;\r\n    color: #fff;\r\n    padding: 2px;\r\n    font-size: 13px;\r\n    border: 1px solid #888787;\r\n}\r\n\r\nul li:hover {\r\n    background-color: RoyalBlue;\r\n}\r\n\r\nul li i {\r\n    margin: 0 0.7em;\r\n    font-size: 18px;\r\n    cursor: pointer;\r\n}\r\n\r\nul li i.fa-trash:hover {\r\n    color: red;\r\n}\r\n\r\nul li i.fa-edit:hover {\r\n    color: #000;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class='title'>Application</h2>\n<router-outlet></router-outlet>"

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
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        var arr = JSON.parse(localStorage.getItem('data'));
        if (arr === null) {
            localStorage.setItem('data', JSON.stringify([
                { "id": 1, "username": "mathilde", "phone": 8997868321, "role": "ceo", "name": "Mathilde Saylors", "edit": false, "information": "" },
                { "id": 2, "username": "alia_ginder", "phone": 8696986989, "role": "founder", "name": "Alia Ginder", "edit": false, "information": "" }
            ]));
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__comment_comment_component__ = __webpack_require__("../../../../../src/app/comment/comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__table_row_table_row_component__ = __webpack_require__("../../../../../src/app/table-row/table-row.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__comment_comment_component__["a" /* CommentComponent */],
            __WEBPACK_IMPORTED_MODULE_9__table_row_table_row_component__["a" /* TableRowComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* routes */], { useHash: true }),
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/comment/comment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".postData {\r\n    width: 70%;\r\n    margin: 1em auto;\r\n    position: relative;\r\n}\r\n\r\n.postData input {\r\n    width: 40%;\r\n    height: 25px;\r\n    padding: 6px;\r\n}\r\n\r\n.postData ul {\r\n    width: 100px;\r\n    position: absolute;\r\n    top: 30px;\r\n}\r\n\r\n.postData ul li {}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comment/comment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"postData\">\n    <input (keypress)=\"textAreaKeyHandler($event)\" type=\"text\" [(ngModel)]=\"inputPostInformation\">\n    <button class='addEmp' name=\"Save\" (click)=\"saveInformation(inputPostInformation)\">Save</button>\n    <ul *ngIf=\"showList\">\n        <li *ngFor=\"let emp of employees\" (click)='selectedEmp(emp)'><a>{{emp.username}}</a></li>\n    </ul>\n    <ul *ngIf=\"showPhoneList\">\n        <li *ngFor=\"let emp of employees\" (click)='selectedEmp(emp)'><a>{{emp.phone}}</a></li>\n    </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/comment/comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentComponent; });
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

var CommentComponent = (function () {
    function CommentComponent() {
        this.emitEmployee = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.showPhoneList = false;
        this.showList = false;
    }
    CommentComponent.prototype.ngOnInit = function () {
    };
    CommentComponent.prototype.textAreaKeyHandler = function (e) {
        if (e.keyCode === 64) {
            this.showList = true;
        }
        if (e.keyCode === 35) {
            this.showPhoneList = true;
        }
    };
    CommentComponent.prototype.saveInformation = function (str) {
        var usernameStr, phoneStr, arr, obj, assignedUser, msg, updatedCollection;
        assignedUser = [];
        arr = str.split(' ');
        msg = str;
        updatedCollection = this.employees;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].startsWith('@')) {
                usernameStr = arr[i].slice(1, arr[i].length);
                obj = this.search(usernameStr, 'username');
                msg = msg.replace(arr[i], '');
                assignedUser.push(obj[0]);
            }
            if (arr[i].startsWith('#')) {
                phoneStr = parseInt(arr[i].slice(1, arr[i].length));
                obj = this.search(phoneStr, 'phone');
                msg = msg.replace(arr[i], '');
                assignedUser.push(obj[0]);
            }
        }
        for (var i = 0; i < assignedUser.length; i++) {
            var index = void 0;
            index = updatedCollection.indexOf(assignedUser[i]);
            if (index !== -1) {
                if (updatedCollection[index]['information'] === undefined || updatedCollection[index]['information'] === NaN) {
                    updatedCollection[index]['information'] = msg;
                }
                else {
                    updatedCollection[index]['information'] = updatedCollection[index]['information'] + msg;
                }
            }
        }
        this.emitEmployee.emit(updatedCollection);
        this.updateTheStorage();
        this.getLocalStorage();
        this.inputPostInformation = '';
    };
    CommentComponent.prototype.selectedEmp = function (emp) {
        if (this.showList) {
            this.inputPostInformation = this.inputPostInformation + emp.username + ' ';
            this.showList = false;
        }
        if (this.showPhoneList) {
            this.inputPostInformation = this.inputPostInformation + emp.phone + ' ';
            this.showPhoneList = false;
        }
    };
    CommentComponent.prototype.updateTheStorage = function () {
        localStorage.setItem('data', JSON.stringify(this.employees));
    };
    CommentComponent.prototype.getLocalStorage = function () {
        this.employees = JSON.parse(localStorage.getItem('data'));
    };
    CommentComponent.prototype.search = function (val, prop) {
        return this.employees.filter(function (i) { return i[prop] === val; });
    };
    return CommentComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], CommentComponent.prototype, "employees", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], CommentComponent.prototype, "emitEmployee", void 0);
CommentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-comment',
        template: __webpack_require__("../../../../../src/app/comment/comment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/comment/comment.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CommentComponent);

//# sourceMappingURL=comment.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".employeeDiv {\r\n    width: 70%;\r\n    margin: auto;\r\n}\r\n\r\n.employeeDiv table {\r\n    width: 100%;\r\n    border: 1px solid dodgerblue;\r\n}\r\n\r\ncaption {\r\n    padding: 7px;\r\n    text-align: left;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    display: table-caption;\r\n}\r\n\r\ntbody tr:first-child {\r\n    background: dodgerblue;\r\n    font-size: 1.2em;\r\n    color: #fff;\r\n}\r\n\r\ntable tr {\r\n    position: relative;\r\n}\r\n\r\ntd,\r\nth {\r\n    border: 1px solid #dddddd;\r\n    text-align: left;\r\n    padding: 8px;\r\n}\r\n\r\ntr:nth-child(even) {\r\n    background-color: #dddddd;\r\n}\r\n\r\ntable tr>div.none {\r\n    display: none;\r\n}\r\n\r\ntable tr:hover div.none {\r\n    display: block;\r\n    font-size: 18px;\r\n    position: absolute;\r\n    border: 1px solid #ccc;\r\n    left: 60%;\r\n    background: #1E90FF;\r\n    color: #fff;\r\n    padding: 10px 10px;\r\n    border-radius: 3px;\r\n    max-width: 200px;\r\n}\r\n\r\n.inputText {\r\n    width: 95%;\r\n    height: 30px;\r\n    border: none;\r\n    text-indent: 10px;\r\n}\r\n\r\ntd i {\r\n    margin: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <button class='addEmp' name=\"Add new Employee\" (click)=\"addEmployeeInformation()\">Add new Employee</button>\n    <button class='addEmp' name=\"clear storage\" (click)=\"clearEmployeeInformation()\">clear storage</button>\n    <div class=\"clear employeeDiv\">\n        <ul *ngIf=\"message.length>0\">\n            <li *ngFor=\"let msg of message\">{{msg}}</li>\n        </ul>\n        <table *ngIf=\"employees.length>0\">\n            <caption>Employee Information</caption>\n            <tr>\n                <th>Id</th>\n                <th>Username</th>\n                <th>Phone</th>\n                <th>Role</th>\n                <th>Name</th>\n                <th>Options</th>\n            </tr>\n            <tr *ngFor=\"let info of employees;let i=index\">\n                <td id=\"{{i + 1}}\">{{i + 1 | number}}</td>\n                <td>\n                    <input type=\"text\" *ngIf=\"info.edit\" class=\"inputText\" [(ngModel)]=\"row.username\" required>\n                    <span *ngIf=\"(info.username.length> 0) && (!info.edit)\" pattern=\"[\\w-_]+\">{{info.username}}</span>\n                </td>\n                <td>\n                    <input maxlength=\"10\" type=\"number\" *ngIf=\"(info.edit)\" class=\"inputText\" [(ngModel)]=\"row.phone\" required>\n                    <span *ngIf=\"(info.phone.toString().length> 0) && (!info.edit)\">{{info.phone}}</span>\n                </td>\n                <td>\n                    <input type=\"text\" *ngIf=\"(info.edit)\" class=\"inputText\" [(ngModel)]=\"row.role\" required>\n                    <span *ngIf=\"(info.role.length> 0) && (!info.edit)\">{{info.role}}</span>\n                </td>\n                <td>\n                    <input type=\"text\" *ngIf=\"(info.edit)\" class=\"inputText\" [(ngModel)]=\"row.name\" required>\n                    <span *ngIf=\"(info.name.length> 0)&& (!info.edit)\">{{info.name}}</span>\n                </td>\n                <td>\n                    <i class=\"right fa fa-trash\" (click)=\"deleteEmployeeInfo(info, i+1)\" title='Delete'></i>\n                    <i class=\"right fa fa-edit\" (click)=\"editEmployeeInfo(info, i+1)\" title='Edit'></i>\n                    <i class=\"right fa fa-save\" (click)=\"(withoutSave) ? saveEmployeeInfo(i+1, row.username, row.phone, row.role, row.name) : ''\" title='Save'></i>\n                </td>\n                <div class=\"none\" *ngIf=\"(!info.edit) && (info.information.length>0)\">\n                    {{info.information}}\n                </div>\n            </tr>\n        </table>\n    </div>\n</div>\n<app-comment [employees]=\"employees\" (emitEmployee)=\"emitEmployee($event)\"></app-comment>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(dashboardService) {
        this.dashboardService = dashboardService;
        this.employees = [];
        this.message = [];
        this.withoutSave = false;
        this.row = {
            id: 0,
            username: '',
            phone: '',
            role: '',
            name: '',
            edit: false,
            information: ''
        };
        this.selectedItemHover = true;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var data = JSON.parse(localStorage.getItem('data'));
        this.employees = data;
    };
    DashboardComponent.prototype.addEmployeeInformation = function () {
        var row;
        row = {
            id: 0,
            username: '',
            phone: 0,
            role: '',
            name: '',
            edit: true,
            information: ''
        };
        if (!this.withoutSave) {
            this.withoutSave = true;
            var data = JSON.parse(localStorage.getItem('data'));
            data.push(row);
            this.employees = data;
        }
        else {
            alert('Save previous information');
        }
    };
    DashboardComponent.prototype.saveEmployeeInfo = function (i, u, p, r, n) {
        var _this = this;
        if (u === undefined || p === undefined || r === undefined || n === undefined || u.length === 0 || p.length === 0 || r.length === 0 || n.length === 0) {
            alert('Enter the information');
            return 0;
        }
        if (!this.validationOfRow(u, p, r, n)) {
            return 0;
        }
        this.withoutSave = false;
        this.employees.splice(this.employees.length - 1, 1);
        this.row = {
            id: i,
            username: u,
            phone: p,
            role: r,
            name: n,
            edit: false,
            information: ''
        };
        this.dashboardService.addNewEmployee('/admin', this.row).subscribe(function (res) {
            console.log('success');
            _this.responseCall(_this.row);
        }, function (err) {
            console.log('error');
            _this.responseCall(_this.row);
        });
    };
    DashboardComponent.prototype.responseCall = function (row) {
        this.employees.push(row);
        this.updateTheStorage();
        alert('Saved...');
        this.row = {
            id: 0,
            username: '',
            phone: 0,
            role: '',
            name: '',
            edit: false,
            information: ''
        };
        this.message = [];
        this.getLocalStorage();
    };
    DashboardComponent.prototype.validationOfRow = function (u, p, r, n) {
        var patern;
        patern = /[\w-_]+/;
        if (!patern.test(u)) {
            this.message.push('Please Enter the username start with a character/word');
            return false;
        }
        else {
            if (this.searchPhoneForUnique(p) || p.toString().length > 10) {
                this.message.push('Please Enter unique phone number');
                return false;
            }
            else {
                if (r.length === 0 || n.length === 0) {
                    this.message.push('Please Enter the username start with a character/word');
                    return false;
                }
                else {
                    return true;
                }
            }
        }
    };
    DashboardComponent.prototype.deleteEmployeeInfo = function (item, id) {
        if (this.withoutSave) {
            alert('You did not save the editable data');
            return 0;
        }
        var selected;
        selected = this.employees.indexOf(item);
        this.employees.splice(selected, 1);
        this.updateTheStorage();
        alert('Successfully deleted');
        this.getLocalStorage();
    };
    DashboardComponent.prototype.editEmployeeInfo = function (item, index) {
        this.employees[this.employees.indexOf(item)].edit = true;
    };
    DashboardComponent.prototype.searchPhoneForUnique = function (p) {
        var duplicate;
        duplicate = this.employees.filter(function (emp) { return parseInt(emp.phone) === p; });
        if (duplicate.length === 0) {
            return false;
        }
        else {
            return true;
        }
    };
    DashboardComponent.prototype.updateTheStorage = function () {
        localStorage.setItem('data', JSON.stringify(this.employees));
    };
    DashboardComponent.prototype.getLocalStorage = function () {
        this.employees = JSON.parse(localStorage.getItem('data'));
    };
    DashboardComponent.prototype.clearEmployeeInformation = function () {
        localStorage.removeItem('data');
        alert('Data is cleared');
        this.getLocalStorage();
    };
    DashboardComponent.prototype.emitEmployee = function (d) {
        this.emitEmployee = d;
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardService = (function () {
    /**
     * init
     * @param http
     */
    function DashboardService(http) {
        this.http = http;
        var headers;
        headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    }
    DashboardService.prototype.addNewEmployee = function (url, body) {
        return this.http.post(url, body, this.options).map(function (res) {
            if (res.status === 200) {
                return res.json();
            }
            return res;
        })
            .catch(this.handleError);
    };
    /**
     * error
     * @param error
     */
    DashboardService.prototype.handleError = function (error) {
        var that;
        that = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return DashboardService;
}());
DashboardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DashboardService);

var _a;
//# sourceMappingURL=dashboard.service.js.map

/***/ }),

/***/ "../../../../../src/app/table-row/table-row.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/table-row/table-row.component.html":
/***/ (function(module, exports) {

module.exports = "<tr>\n    <td>{{row.id}}</td>\n    <td>{{row.username}}</td>\n    <td>{{row.phone}}</td>\n    <td>{{row.role}}</td>\n    <td>{{row.name}}</td>\n</tr>"

/***/ }),

/***/ "../../../../../src/app/table-row/table-row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableRowComponent; });
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

var TableRowComponent = (function () {
    function TableRowComponent() {
        this.row = {
            id: 0,
            username: '',
            phone: '',
            role: '',
            name: ''
        };
    }
    TableRowComponent.prototype.ngOnInit = function () {
    };
    return TableRowComponent;
}());
TableRowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-table-row',
        template: __webpack_require__("../../../../../src/app/table-row/table-row.component.html"),
        styles: [__webpack_require__("../../../../../src/app/table-row/table-row.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TableRowComponent);

//# sourceMappingURL=table-row.component.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
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