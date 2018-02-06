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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var post_1 = require("./post");
var PostService = (function () {
    function PostService(_http) {
        this._http = _http;
        this._getUrl = 'https://jsonplaceholder.typicode.com/posts';
        this._postUrl = "https://jsonplaceholder.typicode.com/post";
    }
    PostService.prototype.getPosts = function () {
        return this._http.get(this._getUrl)
            .map(function (response) { return response.json(); });
    };
    PostService.prototype.getPostsByUser = function (id) {
        var userPostUrl = this._getUrl + '?userId=' + id;
        return this._http.get(userPostUrl)
            .map(function (response) {
            return response.json();
        });
    };
    PostService.prototype.getDefaultPosts = function () {
        return new post_1.DefaultPosts().getDefaultPosts();
    };
    PostService.prototype.getPostCommentsById = function (post) {
        var commentUrl = this._postUrl + '/' + post.id + '/comments';
        return this._http.get(commentUrl)
            .map(function (response) {
            return response.json();
        });
    };
    return PostService;
}());
PostService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map