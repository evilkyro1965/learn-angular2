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
var tabs_1 = require('./tabs');
var tab_1 = require('./tab');
var MainApp = (function () {
    function MainApp() {
        this.name = 'Angular2';
    }
    MainApp = __decorate([
        core_1.Component({
            selector: 'main-app',
            template: "\n    <tabs>\n      <tab [tabTitle]=\"'Tab 1'\">Tab 1 Content</tab>\n      <tab tabTitle=\"Tab 2\">Tab 2 Content</tab>\n    </tabs>\n  ",
            directives: [tabs_1.Tabs, tab_1.Tab]
        }), 
        __metadata('design:paramtypes', [])
    ], MainApp);
    return MainApp;
}());
platform_browser_dynamic_1.bootstrap(MainApp);
//# sourceMappingURL=boot.js.map