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
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var TabTitle = (function () {
    function TabTitle() {
        this.tabSelected = new core_1.EventEmitter();
    }
    TabTitle.prototype.handleClick = function () {
        this.tabSelected.emit(this);
    };
    __decorate([
        core_1.Output('selected'), 
        __metadata('design:type', core_1.EventEmitter)
    ], TabTitle.prototype, "tabSelected", void 0);
    TabTitle = __decorate([
        core_1.Component({
            selector: 'tab-title',
            styles: ["\n\t    .tab-title {\n\t      display: inline-block;\n\t      cursor: pointer;\n\t      padding: 5px;\n\t      border: 1px solid #ccc;\n\t    }\n  \t"],
            template: "\n  \t\t<div class=\"tab-title\" (click)=\"handleClick()\">\n  \t\t\t<ng-content></ng-content>\n  \t\t</div>\n  \t"
        }), 
        __metadata('design:paramtypes', [])
    ], TabTitle);
    return TabTitle;
}());
var TabContent = (function () {
    function TabContent() {
        this.isActive = false;
    }
    TabContent = __decorate([
        core_1.Component({
            selector: 'tab-content',
            styles: ["\n\t    .tab-content {\n\t      border: 1px solid #ccc;\n\t      border-top: none;\n\t      padding: 5px;\n\t    }\n\t"],
            template: "\n\t\t<div class=\"tab-content\" [hidden]=\"!isActive\">\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], TabContent);
    return TabContent;
}());
var Tabs = (function () {
    function Tabs() {
        this.tabChanged = new core_1.EventEmitter();
    }
    Tabs.prototype.select = function (index) {
        var contents = this.tabContents.toArray();
        contents[this.active].isActive = false;
        this.active = index;
        contents[this.active].isActive = true;
        this.tabChanged.emit(index);
    };
    Tabs.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.tabTitles
            .map(function (t) { return t.tabSelected; })
            .forEach(function (t, i) {
            t.subscribe(function (_) {
                _this.select(i);
            });
        });
        this.active = 0;
        this.select(0);
    };
    __decorate([
        core_1.Output('changed'), 
        __metadata('design:type', core_1.EventEmitter)
    ], Tabs.prototype, "tabChanged", void 0);
    __decorate([
        core_1.ContentChildren(TabTitle), 
        __metadata('design:type', core_1.QueryList)
    ], Tabs.prototype, "tabTitles", void 0);
    __decorate([
        core_1.ContentChildren(TabContent), 
        __metadata('design:type', core_1.QueryList)
    ], Tabs.prototype, "tabContents", void 0);
    Tabs = __decorate([
        core_1.Component({
            selector: 'tabs',
            styles: [
                "\n\t      .tab {\n\t        display: inline-block;\n\t      }\n\t      .tab-nav {\n\t        list-style: none;\n\t        padding: 0;\n\t        margin: 0;\n\t      }\n\t    "
            ],
            template: "\n\t    <div class=\"tab\">\n\t      <div class=\"tab-nav\">\n\t        <ng-content select=\"tab-title\"></ng-content>\n\t      </div>\n\t      <ng-content select=\"tab-content\"></ng-content>\n\t    </div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], Tabs);
    return Tabs;
}());
var App = (function () {
    function App() {
    }
    App.prototype.tabChanged = function (tab) {
        console.log(tab);
    };
    App = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <tabs (changed)=\"tabChanged($event)\">\n      <tab-title>Tab 1</tab-title>\n      <tab-content>Content 1</tab-content>\n      <tab-title>Tab 2</tab-title>\n      <tab-content>Content 2</tab-content>\n    </tabs>\n  ",
            directives: [Tabs, TabContent, TabTitle]
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
platform_browser_dynamic_1.bootstrap(App);
//# sourceMappingURL=boot.js.map