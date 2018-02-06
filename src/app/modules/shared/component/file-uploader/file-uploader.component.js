"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var FileUploaderComponent = (function () {
    function FileUploaderComponent() {
        this.activeColor = 'green';
        this.baseColor = '#ccc';
        this.overlayColor = 'rgba(255,255,255,0.5)';
        this.dragging = false;
        this.loaded = false;
        this.imageLoaded = false;
        this.imageSrc = '';
    }
    FileUploaderComponent.prototype.handleDragEnter = function () {
        this.dragging = true;
    };
    FileUploaderComponent.prototype.handleDragLeave = function () {
        this.dragging = false;
    };
    FileUploaderComponent.prototype.handleDrop = function (e) {
        e.preventDefault();
        this.dragging = false;
        this.handleInputChange(e);
    };
    FileUploaderComponent.prototype.handleImageLoad = function () {
        this.imageLoaded = true;
        //this.iconColor = this.overlayColor;
    };
    FileUploaderComponent.prototype.handleInputChange = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        this.loaded = false;
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    FileUploaderComponent.prototype._handleReaderLoaded = function (e) {
        var reader = e.target;
        this.imageSrc = reader.result;
        this.loaded = true;
    };
    FileUploaderComponent.prototype._setActive = function () {
        // this.borderColor = this.activeColor;
        // if (this.imageSrc.length === 0) {
        //     this.iconColor = this.activeColor;
        // }
    };
    FileUploaderComponent.prototype._setInactive = function () {
        // this.borderColor = this.baseColor;
        // if (this.imageSrc.length === 0) {
        //     this.iconColor = this.baseColor;
        // }
    };
    return FileUploaderComponent;
}());
FileUploaderComponent = __decorate([
    core_1.Component({
        selector: 'file-uploader',
        templateUrl: './file-uploader.component.html',
        styleUrls: ['./file-uploader.component.css'],
        inputs: ['activeColor', 'baseColor', 'overlayColor']
    })
], FileUploaderComponent);
exports.FileUploaderComponent = FileUploaderComponent;
//# sourceMappingURL=file-uploader.component.js.map