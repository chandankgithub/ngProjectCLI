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
var avatar_service_1 = require("./modules/shared/services/avatar.service");
var user_profile_module_1 = require("./modules/user-profile/user-profile.module");
var notification_service_1 = require("./modules/shared/services/notification.service");
var auth_service_1 = require("./modules/shared/services/authentication/auth.service");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var users_module_1 = require("./modules/users/users.module");
var posts_module_1 = require("./modules/posts/posts.module");
var shared_modules_1 = require("./modules/shared/shared.modules");
var app_component_1 = require("./app.component");
var home_component_1 = require("./modules/home/home.component");
var prevent_unsaved_changes_guard_services_1 = require("./route-guards/prevent-unsaved-changes-guard.services");
var AppModule = (function () {
    function AppModule(auth) {
        this.auth = auth;
        this.auth.handleAuthentication();
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            users_module_1.UsersModule,
            user_profile_module_1.UserProfileModule,
            posts_module_1.PostsModule,
            shared_modules_1.SharedModule,
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            router_1.RouterModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            prevent_unsaved_changes_guard_services_1.PreventUnsavedChangesGuardService,
            auth_service_1.AuthService,
            notification_service_1.NotificationService,
            avatar_service_1.AvatarService
        ]
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map