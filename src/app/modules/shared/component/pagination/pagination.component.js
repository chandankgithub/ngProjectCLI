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
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.pageSize = 10;
        this.onPageChanged = new core_1.EventEmitter();
        this._currentPageNumber = 1;
        this._pages = [];
        this._startPage = 1;
    }
    PaginationComponent.prototype.ngOnChanges = function () {
        console.log(this.itemLength);
        console.log(this.pageSize);
        this.calculatePageSize();
    };
    PaginationComponent.prototype.calculatePageSize = function () {
        var remainder;
        var pageSize;
        if (this.itemLength > 0) {
            var itemLength = this.itemLength;
            pageSize = Math.floor(itemLength / this.pageSize);
            remainder = itemLength % this.pageSize;
            if (remainder > 0) {
                ++pageSize;
            }
        }
        this.createPageSizeCollection(pageSize);
        this.setCurrentPageNumber(this._currentPageNumber);
        this.callbackParentControl();
    };
    PaginationComponent.prototype.createPageSizeCollection = function (pageSize) {
        this._pages = [];
        for (var i = 1; i <= pageSize; i++) {
            this._pages.push(i);
        }
        this._endPage = pageSize;
    };
    PaginationComponent.prototype.setCurrentPageNumber = function (currentPageNumber) {
        this._currentPageNumber = currentPageNumber;
    };
    PaginationComponent.prototype.callbackParentControl = function () {
        this.onPageChanged.emit(this._currentPageNumber);
    };
    PaginationComponent.prototype.selectPage = function (pageNo) {
        this.setCurrentPageNumber(pageNo);
        this.onPageChanged.emit(this._currentPageNumber);
    };
    PaginationComponent.prototype.onNext = function () {
        if (this._currentPageNumber == this._endPage) {
            return;
        }
        this.selectPage(this._currentPageNumber + 1);
    };
    PaginationComponent.prototype.onPrevious = function () {
        if (this._currentPageNumber == 1) {
            return;
        }
        this.selectPage(this._currentPageNumber - 1);
    };
    return PaginationComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "itemLength", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "pageSize", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "onPageChanged", void 0);
PaginationComponent = __decorate([
    core_1.Component({
        selector: 'pagination',
        template: "\n            <div *ngIf=\"itemLength > pageSize\">\n                    <nav aria-label=\"Page navigation\">\n                        <ul class=\"pagination\">\n                            <li (click)=\"onPrevious()\" class=\"page-item\" [ngClass]=\"{\n                                                            disabled: _currentPageNumber==1\n                                                        }\">\n                                <a aria-label=\"Previous\">\n                                    <span aria-hidden=\"true\">&laquo;</span>\n                                </a>\n                            </li>\n                            <li *ngFor=\"let pageNo of _pages, let i=index\" \n                                    [ngClass]=\"{ active: (_currentPageNumber-1)==i }\" \n                                    (click)=\"selectPage(pageNo)\" >\n                                    \n                                    <a>{{pageNo}}</a>\n                            </li>\n                            <li (click)=\"onNext()\" class=\"page-item\" [ngClass]=\"{\n                                                            disabled: _currentPageNumber==_endPage\n                                                        }\">\n                                <a aria-label=\"Next\">\n                                    <span aria-hidden=\"true\">&raquo;</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </nav>\n                </div>\n    ",
        styles: ["\n        li\t{\tcursor:\tpointer;\t}\n    "]
    }),
    __metadata("design:paramtypes", [])
], PaginationComponent);
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map