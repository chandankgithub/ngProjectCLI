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
var Subject_1 = require("rxjs/Subject");
var core_1 = require("@angular/core");
var AvatarService = (function () {
    function AvatarService() {
        this._avatar = new Subject_1.Subject();
        this.avatar = this._avatar.asObservable();
    }
    AvatarService.prototype.getAvatarUrl = function () {
        return this._avatar;
    };
    AvatarService.prototype.setAvatarUrl = function (url) {
        this._avatar.next(url);
    };
    return AvatarService;
}());
AvatarService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], AvatarService);
exports.AvatarService = AvatarService;
//# sourceMappingURL=avatar.service.js.map