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
var InputBox = (function () {
    function InputBox() {
        this.inputText = new core_1.EventEmitter();
    }
    InputBox.prototype.emitText = function (text) {
        this.inputText.emit(text);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], InputBox.prototype, "inputPlaceholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], InputBox.prototype, "buttonLabel", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], InputBox.prototype, "inputText", void 0);
    InputBox = __decorate([
        core_1.Component({
            selector: 'input-box',
            template: "\n\t\t<input #todoInput [placeholder]=\"inputPlaceholder\">\n\t\t<button (click)=\"emitText(todoInput.value); todoInput.value='';\">\n\t\t\t{{buttonLabel}}\n\t\t</button>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], InputBox);
    return InputBox;
}());
var TodoList = (function () {
    function TodoList() {
        this.toggle = new core_1.EventEmitter();
    }
    TodoList.prototype.toggleCompletion = function (index) {
        var todo = this.todos[index];
        this.toggle.emit(todo);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TodoList.prototype, "todos", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TodoList.prototype, "toggle", void 0);
    TodoList = __decorate([
        core_1.Component({
            selector: 'todo-list',
            template: "\n\t\t<ul>\n\t\t\t<li *ngFor=\"#todo of todos; #index = index\" [class.completed]=\"todo.completed\">\n\t\t\t\t<input type=\"checkbox\" [checked]=\"todo.completed\" (change)=\"toggleCompletion(index)\">\n\t\t\t\t{{todo.label}}\n\t\t\t</li>\n\t\t</ul>\n\t",
            styles: [
                "ul li {\n\t\t\tlist-style: none;\n\t\t}\n\t\t.completed {\n\t\t\ttext-decoration: line-through;\n\t\t}"
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TodoList);
    return TodoList;
}());
var TodoApp = (function () {
    function TodoApp() {
        this.todos = [
            {
                label: 'Buy milk',
                completed: false
            },
            {
                label: 'Save the world',
                completed: false
            }
        ];
        this.name = 'John';
    }
    TodoApp.prototype.addTodo = function (label) {
        this.todos.push({
            label: label, completed: false
        });
    };
    TodoApp.prototype.toggleCompletion = function (todo) {
        todo.completed = !todo.completed;
    };
    TodoApp = __decorate([
        core_1.Component({
            selector: 'todo-app',
            directives: [TodoList, InputBox],
            template: "\n\t\t<h1>Hello {{name}}!</h1>\n\t\t<p>\n\t\t\tAdd a new todo:\n\t\t\t<input-box inputPlaceholder=\"New todo...\"\n\t\t\t\tbuttonLabel=\"Add\"\n\t\t\t\t(inputText)=\"addTodo($event)\">\n\t\t\t</input-box>\n\t\t</p>\n\t\t\n\t\t<p>Here's the list of pending todo items:</p>\n\t\t<todo-list [todos]=\"todos\" \n\t\t\t(toggle)=\"toggleCompletion($event)\">\n\t\t</todo-list>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], TodoApp);
    return TodoApp;
}());
platform_browser_dynamic_1.bootstrap(TodoApp);
//# sourceMappingURL=boot.js.map