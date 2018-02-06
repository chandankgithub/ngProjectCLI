"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var shared_modules_1 = require("../shared/shared.modules");
var new_user_component_1 = require("./new.user.component");
var users_component_1 = require("./users.component");
var not_found_component_1 = require("../../not-found.component");
var user_service_1 = require("./user.service");
var UsersModule = (function () {
    function UsersModule() {
    }
    return UsersModule;
}());
UsersModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            shared_modules_1.SharedModule
        ],
        declarations: [
            new_user_component_1.NewUserComponent,
            users_component_1.UsersComponent,
            not_found_component_1.NotFoundComponent
        ],
        providers: [
            forms_1.FormBuilder,
            user_service_1.UserService
        ],
        exports: [
            new_user_component_1.NewUserComponent,
            users_component_1.UsersComponent,
            not_found_component_1.NotFoundComponent
        ]
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map