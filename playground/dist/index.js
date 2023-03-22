"use strict";
/*
  Property Decorators P1
  
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function MinLength(length) {
    // similar to method decorator, but without descriptor
    return (target, propertyName) => {
        let descriptor = {
        // ctrl + space > we will see the list of properties with "?"
        };
    };
}
class User {
    // when work with property decorator, we need to use the old way constructor() definition
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(4) // property decorator
], User.prototype, "password", void 0);
