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
var avatar_service_1 = require("./../../services/avatar.service");
var notification_service_1 = require("./../../services/notification.service");
var auth_service_1 = require("./../../services/authentication/auth.service");
var core_1 = require("@angular/core");
var MainNavbarComponent = (function () {
    function MainNavbarComponent(auth, notificationService, avatarService) {
        var _this = this;
        this.auth = auth;
        this.notificationService = notificationService;
        this.avatarService = avatarService;
        this.notificationService.getNotificationCounter()
            .subscribe(function (n) {
            _this._notifcationCounter = n;
        });
        this.avatarService.getAvatarUrl()
            .subscribe(function (url) {
            _this._avatar = url;
        });
    }
    return MainNavbarComponent;
}());
MainNavbarComponent = __decorate([
    core_1.Component({
        selector: 'main-navbar',
        templateUrl: './main-navbar.component.html'
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        notification_service_1.NotificationService,
        avatar_service_1.AvatarService])
], MainNavbarComponent);
exports.MainNavbarComponent = MainNavbarComponent;
//# sourceMappingURL=main-navbar.component.js.map