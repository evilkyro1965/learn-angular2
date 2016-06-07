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
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require("@angular/core");
var primeng_1 = require('primeng/primeng');
var ChildComponent = (function () {
    function ChildComponent() {
    }
    ChildComponent = __decorate([
        core_1.Component({
            selector: 'child-component',
            template: 'Child'
        }), 
        __metadata('design:paramtypes', [])
    ], ChildComponent);
    return ChildComponent;
}());
var MainApp = (function () {
    function MainApp(dcl, viewContainerRef) {
        var _this = this;
        this.cities = [];
        this.cities.push({ label: 'New York', value: 'New York' });
        this.cities.push({ label: 'Rome', value: 'Rome' });
        this.cities.push({ label: 'London', value: 'London' });
        this.cities.push({ label: 'Istanbul', value: 'Istanbul' });
        this.cities.push({ label: 'Paris', value: 'Paris' });
        this.selected = 'Rome';
        dcl.loadNextToLocation(primeng_1.Dropdown, viewContainerRef)
            .then(function (res) {
            res.instance.options = _this.cities;
            res.instance.value = _this.selected;
        });
    }
    MainApp.prototype.clicked = function () {
        console.log("hi");
        this.selected = 'Paris';
    };
    MainApp = __decorate([
        core_1.Component({
            selector: 'main-app',
            template: "<a (click)='clicked()'>Change</a>"
        }), 
        __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.ViewContainerRef])
    ], MainApp);
    return MainApp;
}());
platform_browser_dynamic_1.bootstrap(MainApp);
//# sourceMappingURL=boot.js.map