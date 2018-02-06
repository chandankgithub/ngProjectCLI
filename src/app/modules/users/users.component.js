"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var user_service_1 = require("./user.service");
require("rxjs/add/operator/delay");
var UsersComponent = (function () {
    function UsersComponent(_service) {
        this._service = _service;
        this.networkException = false;
        this._isLoading = true;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.getUsers()
            .delay(2000)
            .subscribe(function (users) {
            _this.bindUser(users);
        }, function (err) { return _this.bindDefaultUsers(); });
    };
    UsersComponent.prototype.bindUser = function (users) {
        this.users = users;
        this._isLoading = false;
    };
    UsersComponent.prototype.bindDefaultUsers = function () {
        //this._isLoading=false;
        setTimeout(function () {
            this._isLoading = true;
        }, 2000);
        this.networkException = true;
        this.users = this._service.getDefaultUsers();
    };
    UsersComponent.prototype.deleteUser = function (user) {
        var _this = this;
        /**
         * Optimistic approach. First update the view then call deleteUser
         * If delete is unsuccessful then undo the delete
         */
        console.log(user);
        var actualUsers = this.users;
        this.users = this.users.filter(function (x) { return x.id !== user.id; });
        this._service.deleteUser(user)
            .subscribe(function (u) {
            console.log(u);
        }, function (err) { return _this.users = actualUsers; });
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        selector: 'users',
        templateUrl: './users.component.html',
        providers: [user_service_1.UserService],
        styles: [
            "\n            a{\n                cursor:pointer;\n            }\n        "
        ]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map