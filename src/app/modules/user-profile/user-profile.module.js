"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var auth_service_1 = require("./../shared/services/authentication/auth.service");
var shared_modules_1 = require("./../shared/shared.modules");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var user_profile_component_1 = require("./user-profile.component");
var UserProfileModule = (function () {
    function UserProfileModule() {
    }
    return UserProfileModule;
}());
UserProfileModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            shared_modules_1.SharedModule
        ],
        exports: [
            user_profile_component_1.UserProfileComponent
        ],
        declarations: [
            user_profile_component_1.UserProfileComponent
        ],
        providers: [auth_service_1.AuthService],
    })
], UserProfileModule);
exports.UserProfileModule = UserProfileModule;
//# sourceMappingURL=user-profile.module.js.map