System.register(["angular2/platform/browser", "angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1;
    var SingleComponent, MainApp;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SingleComponent = (function () {
                function SingleComponent() {
                    this.putRingOnIt = new core_1.EventEmitter();
                }
                SingleComponent.prototype.liked = function () {
                    this.putRingOnIt.emit("oh oh oh");
                };
                SingleComponent = __decorate([
                    core_1.Component({
                        selector: 'single-component',
                        outputs: ['putRingOnIt'],
                        template: "\n\t\t\t<button (click)=\"liked()\">Like it ?</button>\n\t\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SingleComponent);
                return SingleComponent;
            }());
            MainApp = (function () {
                function MainApp() {
                }
                MainApp.prototype.singleComponentClicked = function (message) {
                    console.log(message);
                };
                MainApp = __decorate([
                    core_1.Component({
                        selector: 'main-app',
                        directives: [SingleComponent],
                        template: "\n\t\t\t<single-component (putRingOnIt)=\"singleComponentClicked($event)\"></single-component>\n\t\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainApp);
                return MainApp;
            }());
            browser_1.bootstrap(MainApp);
        }
    }
});
//# sourceMappingURL=app.js.map