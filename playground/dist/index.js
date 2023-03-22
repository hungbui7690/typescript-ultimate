"use strict";
/*
  Parameterized Decorators P3

*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// use type here
function Component(options) {
    return (constructor) => {
        console.log('Component Decorator Called !!');
        constructor.prototype.options = options; // use parameter here
        constructor.prototype.uniqueID = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log('Inserting the component in the DOM');
        };
    };
}
// argument
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component({ selector: '#my-profile' })
], ProfileComponent);
