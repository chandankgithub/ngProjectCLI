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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/skip");
require("rxjs/add/operator/take");
require("rxjs/add/observable/from");
var post_service_1 = require("./post.service");
var user_service_1 = require("../users/user.service");
var User_1 = require("../users/User");
var PostsComponent = (function () {
    function PostsComponent(_postService, _userService) {
        this._postService = _postService;
        this._userService = _userService;
        this._networkDown = false;
        this._postsLoading = true;
        this._isCommentLoading = true;
        this._showPostDetail = false;
        this._isUserPostsLoading = false;
        this._pageSize = 10;
    }
    PostsComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.getAllPosts();
    };
    PostsComponent.prototype.getAllPosts = function () {
        var _this = this;
        this._postService.getPosts()
            .delay(2000) //Dummy. To show only loading icon
            .subscribe(function (p) { return _this.bindPosts(p); }, function (err) {
            _this.bindDefaultPosts();
        }, function () {
            // this._postsLoading=false;
            // this._isUserPostsLoading=false;
        });
    };
    PostsComponent.prototype.bindPosts = function (posts) {
        this._posts = posts;
        this._allPosts = posts;
        this._postsLoading = false;
        this._isUserPostsLoading = false;
    };
    PostsComponent.prototype.getPostsByUser = function (userId) {
        var _this = this;
        this._postService.getPostsByUser(userId)
            .delay(200)
            .subscribe(function (posts) { return _this.bindPostsByUser(posts); });
    };
    PostsComponent.prototype.bindPostsByUser = function (posts) {
        this._isUserPostsLoading = false;
        this._posts = posts;
    };
    PostsComponent.prototype.bindDefaultPosts = function () {
        this._networkDown = true;
        this._postsLoading = false;
        this._isUserPostsLoading = false;
        this._posts = this._postService.getDefaultPosts();
        this._allPosts = this._posts;
        this.loadPostsByPageNumber();
    };
    PostsComponent.prototype.selectPostItem = function (post, index) {
        this._selectedIndex = index;
        this._postTitle = post.title;
        this._postBody = post.body;
        this._showPostDetail = true;
        this.getComments(post);
    };
    PostsComponent.prototype.getComments = function (post) {
        var _this = this;
        this._isCommentLoading = true;
        this._comments = [];
        this._postService.getPostCommentsById(post)
            .delay(500)
            .subscribe(function (comments) { return _this.bindPostComments(comments); }, function (err) { return console.log(err); });
    };
    PostsComponent.prototype.bindPostComments = function (comments) {
        this._isCommentLoading = false;
        this._comments = comments;
    };
    PostsComponent.prototype.getUsers = function () {
        var _this = this;
        this._userService.getUsers()
            .subscribe(function (u) { return _this.bindUsers(u); }, function (err) { return _this.onUserListGetException(); });
    };
    PostsComponent.prototype.bindUsers = function (users) {
        this._users = users;
        var user = new User_1.User();
        user.id = 0;
        user.name = 'Select User ...';
        this._users.unshift(user);
    };
    PostsComponent.prototype.userChanged = function (userId) {
        this._posts = null;
        this._isUserPostsLoading = true;
        this._showPostDetail = false;
        if (userId > 0) {
            this.getPostsByUser(userId);
        }
        else {
            this.getAllPosts();
        }
    };
    PostsComponent.prototype.onUserListGetException = function () {
        this._users = this._userService.getDefaultUsers();
        var user = new User_1.User();
        user.id = -1;
        user.name = 'Select User ...';
        this._users.unshift(user);
    };
    PostsComponent.prototype.loadPostsByPageNumber = function (pageNo) {
        this._showPostDetail = false;
        pageNo = pageNo ? pageNo : 1;
        var posts = [];
        var skip = this._pageSize * (pageNo - 1);
        Observable_1.Observable.from(this._allPosts).skip(skip).take(this._pageSize)
            .subscribe(function (x) { return posts.push(x); });
        this._posts = posts;
    };
    return PostsComponent;
}());
PostsComponent = __decorate([
    core_1.Component({
        selector: 'posts',
        templateUrl: './posts.component.html',
        styles: [
            "\n           .posts\tli\t{\tcursor:\tpointer;\t}\n            .posts\tli:hover\t{\tbackground:\t#ecf0f1;\t}\t\n            .list-group-item.active,\t\n            .list-group-item.active:hover,\t\n            .list-group-item.active:focus\t{\t\n                background-color:\t#ecf0f1;\n                border-color:\t#ecf0f1;\t\n                color:\t#2c3e50;\n            } \n        "
        ]
    }),
    __metadata("design:paramtypes", [post_service_1.PostService,
        user_service_1.UserService])
], PostsComponent);
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map