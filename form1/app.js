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
    var CustomerForm, MainApp;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CustomerForm = (function () {
                function CustomerForm() {
                    this.arrCity = ['', 'Medan', 'Kuala Lumpur'];
                    this.arrCustomerType = ['Silver', 'Platinum'];
                    this.name = '';
                    this.city = '';
                    this.customerType = 'Silver';
                }
                CustomerForm = __decorate([
                    core_1.Component({
                        selector: 'customer-form',
                        template: "\n\t\t<div>\n\t\t\tName : <input type='text' [(ngModel)]=\"name\" />\n\t\t</div>\n\t\t<div>\n\t\t\tCity : \n\t\t\t<select [(ngModel)]=\"city\">\n\t\t\t\t<option *ngFor=\"#selectCity of arrCity\" [value]=\"selectCity\">{{selectCity}} \n\t\t\t\t</option>\n\t\t\t</select>\n\t\t</div>\t\n\t\t<div>\n\t\t\tCustomer Type : \n\t\t\t<div *ngFor=\"#selectCustomerType of arrCustomerType\">\n\t\t\t<input type=\"radio\"[(ngModel)]=\"customerType\" name=\"customerType\" />{{selectCustomerType}}<br>\n\t\t\t</div>\n\t\t</div>\t\t\n\t\t<div>{{name}}</div>\t\n\t\t<div>{{city}}</div>\t\n\t\t<div>{{customerType}}</div>\t\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], CustomerForm);
                return CustomerForm;
            }());
            MainApp = (function () {
                function MainApp() {
                }
                MainApp = __decorate([
                    core_1.Component({
                        selector: 'main-app',
                        directives: [CustomerForm],
                        template: "\n\t\t\t<customer-form></customer-form>\n\t\t"
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