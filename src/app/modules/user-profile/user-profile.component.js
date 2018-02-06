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
var auth_service_1 = require("./../shared/services/authentication/auth.service");
var core_1 = require("@angular/core");
var UserProfileComponent = (function () {
    function UserProfileComponent(_authService) {
        this._authService = _authService;
        this.showUploader = false;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._authService.userProfile) {
            this.profile = this._authService.userProfile;
            console.log(this.profile);
        }
        else {
            this.profile = this._authService.getUserProfile(function (err, profile) {
                _this.profile = profile;
                console.log(_this.profile);
            });
        }
    };
    UserProfileComponent.prototype.userProfileCallback = function (err, profile) {
        this.profile = profile;
        console.log(this.profile);
    };
    UserProfileComponent.prototype.toggleUploader = function () {
        this.showUploader = !this.showUploader;
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    core_1.Component({
        selector: 'user-profile',
        templateUrl: './user-profile.component.html',
        styles: [
            "   \n            .profile-area img {\n            max-width: 150px;\n            margin-bottom: 20px;\n            }\n\n            .panel-body h3 {\n            margin-top: 0;\n            }\n        "
        ]
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], UserProfileComponent);
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=user-profile.component.js.map