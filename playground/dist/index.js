"use strict";
/*
  Accessor Decorators P2
  - accessor decorators are similar to method decorators
  
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// (***)
function Capitalize(target, methodName, descriptor) {
    const original = descriptor.get; // instead use .value > we use .get
    descriptor.get = function () {
        original === null || original === void 0 ? void 0 : original.call(this); // use optional chaining, because type of original is any|undefined
    };
}
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    Capitalize // apply decorator here
], Person.prototype, "fullName", null);
