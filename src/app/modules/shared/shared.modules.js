"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var file_uploader_component_1 = require("./component/file-uploader/file-uploader.component");
var avatar_component_1 = require("./component/avatar/avatar.component");
var user_profile_routing_1 = require("./../user-profile/user-profile.routing");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var main_navbar_component_1 = require("./component/navbar/main-navbar.component");
var pagination_component_1 = require("./component/pagination/pagination.component");
var spinner_component_1 = require("./component/spinner/spinner.component");
var app_routing_1 = require("../../app.routing");
var home_routing_1 = require("../home/home.routing");
var users_routing_1 = require("../users/users.routing");
var posts_routing_1 = require("../posts/posts.routing");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            //keep child routing above parent routing
            home_routing_1.HomeRouting,
            posts_routing_1.PostsRouting,
            users_routing_1.UsersRouting,
            user_profile_routing_1.UserProfileRouting,
            app_routing_1.AppRouting //parent routing
        ],
        declarations: [
            main_navbar_component_1.MainNavbarComponent,
            pagination_component_1.PaginationComponent,
            spinner_component_1.SpinnerComponent,
            avatar_component_1.AvatarComponent,
            file_uploader_component_1.FileUploaderComponent
        ],
        providers: [],
        exports: [
            main_navbar_component_1.MainNavbarComponent,
            pagination_component_1.PaginationComponent,
            spinner_component_1.SpinnerComponent,
            avatar_component_1.AvatarComponent,
            file_uploader_component_1.FileUploaderComponent
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.modules.js.map