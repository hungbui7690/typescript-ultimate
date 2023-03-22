"use strict";
/*
  Accessor Decorators P4
  
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Capitalize(target, methodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original.call(this);
        if (typeof result === 'string') {
            return result.toUpperCase();
        }
        return result;
    };
}
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return 0; // (***) change to 0, null
    }
}
__decorate([
    Capitalize
], Person.prototype, "fullName", null);
let person = new Person('Joe', 'Doe');
console.log(person.fullName); // 0, null > our code still works
