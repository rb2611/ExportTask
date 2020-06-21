"use strict";
//import {Component} from '@angular/core' ;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.index = void 0;
var index = /** @class */ (function () {
    function index() {
        this.display = 'none';
    }
    index.prototype.onCloseHandled = function () {
        this.display = 'none';
    };
    index.prototype.openModal = function () {
        this.display = "show";
    };
    index = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './index.html',
            styles: ["\n  .backdrop{\n    background-color:rgba(0,0,0,0.6);\n    position:fixed;\n    top:0;\n    left:0;\n    width:100%;\n    height:100vh;\n  }"
            ]
        })
    ], index);
    return index;
}());
exports.index = index;
