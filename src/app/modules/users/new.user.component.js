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
var notification_service_1 = require("./../shared/services/notification.service");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var User_1 = require("./User");
var user_form_validator_1 = require("./user-form.validator");
var user_service_1 = require("./user.service");
var NewUserComponent = (function () {
    function NewUserComponent(_service, _notificationService, _router, _route) {
        this._service = _service;
        this._notificationService = _notificationService;
        this._router = _router;
        this._route = _route;
        this._formPuropse = 'Add';
        this.errorCodes = {
            NOT_FOUND: 404
        };
        this._user = new User_1.User();
        this._signupform = new forms_1.FormGroup({
            name: new forms_1.FormControl(this._user.name, forms_1.Validators.required),
            email: new forms_1.FormControl(this._user.email, forms_1.Validators.compose([forms_1.Validators.required,
                user_form_validator_1.UserFormValidator.validateEmail])),
            phone: new forms_1.FormControl(this._user.phone),
            address: new forms_1.FormGroup({
                street: new forms_1.FormControl(this._user.address.street),
                suite: new forms_1.FormControl(this._user.address.suite),
                city: new forms_1.FormControl(this._user.address.city),
                zipcode: new forms_1.FormControl(this._user.address.zipcode)
            })
        });
    }
    NewUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._params = this._route.params
            .subscribe(function (p) {
            _this.readRouteParams(p);
            _this.getUser();
        });
    };
    NewUserComponent.prototype.signup = function () {
        if (this._user && this._user.id) {
            //edit user
            this.editUser();
        }
        else {
            // add user
            this.addUser();
        }
    };
    NewUserComponent.prototype.isFormDirty = function () {
        return this._signupform.dirty;
    };
    NewUserComponent.prototype.readRouteParams = function (param) {
        this._id = +param['id'];
        if (this._id > 0) {
            this._formPuropse = "Edit";
        }
    };
    NewUserComponent.prototype.getUser = function () {
        var _this = this;
        if (this._id > 0) {
            this._service.getUser(this._id)
                .subscribe(function (u) { return _this.populateUser(u); }, function (err) { _this.onError(err); });
        }
    };
    NewUserComponent.prototype.populateUser = function (user) {
        this._user = user;
    };
    NewUserComponent.prototype.addUser = function () {
        var _this = this;
        this._notificationService.setNotificationCounter(1);
        this._service.addUser(this._user)
            .subscribe(function (u) {
            _this._signupform.reset();
            _this._router.navigate(['users']);
            _this._notificationService.setNotificationCounter(1);
        });
    };
    NewUserComponent.prototype.editUser = function () {
        var _this = this;
        if (this._user) {
            this._service.editUser(this._user)
                .subscribe(function (u) {
                _this._signupform.reset();
                _this._router.navigate(['users']);
                _this._notificationService.setNotificationCounter(1);
            });
        }
    };
    NewUserComponent.prototype.onError = function (err) {
        if (err.status === this.errorCodes.NOT_FOUND) {
            this._router.navigate(['notfound']);
        }
    };
    NewUserComponent.prototype.ngOnDestroy = function () {
        this._params.unsubscribe();
    };
    return NewUserComponent;
}());
NewUserComponent = __decorate([
    core_1.Component({
        selector: 'new-user',
        templateUrl: './new.user.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        notification_service_1.NotificationService,
        router_1.Router,
        router_1.ActivatedRoute])
], NewUserComponent);
exports.NewUserComponent = NewUserComponent;
//# sourceMappingURL=new.user.component.js.map