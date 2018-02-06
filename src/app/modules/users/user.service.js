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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var User_1 = require("./User");
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this._api_users_url = "http://localhost:8000/api/users";
        this._url = "https://jsonplaceholder.typicode.com/users";
        this._postUrl = "http://jsonplaceholder.typicode.com/posts";
    }
    UserService.prototype.getUsers = function () {
        // return this._http.get(this._url)
        // .map(res => <User[]> res.json())
        return this._http.get(this._api_users_url)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.addUser = function (user) {
        // return this._http.post(this._postUrl, JSON.stringify(user))
        // 	.map(res => <User> res.json());
        return this._http.post(this._api_users_url, JSON.stringify(user))
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.editUser = function (user) {
        // return this._http.put(this._postUrl + '/' + user.id, JSON.stringify(user))
        //     .map(response => <User>response.json());
        // return this._http.put(this._api_users_url, JSON.stringify(user))
        //     .map(response => <User>response.json());
        var body = JSON.stringify(user);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.put(this._api_users_url, body, options)
            .map(function (response) { return response.json(); });
    };
    /**deleteUser will return nothing */
    UserService.prototype.deleteUser = function (user) {
        // return this._http.delete(this._postUrl + '/' + user.id)
        //             .map(response =>  response.json())
        console.log(this._api_users_url + '/' + user.id);
        return this._http.delete(this._api_users_url + '/' + user.id)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.getUser = function (id) {
        // return this._http.get(this._url + '/' + id)
        //         .map( response => <User> response.json())
        return this._http.get(this._api_users_url + '/' + id)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.getDefaultUsers = function () {
        return new User_1.DefaultUsers().getDefaultUserList();
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map