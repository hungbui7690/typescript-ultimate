"use strict";
/*
  Method Decorators P7

*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// we still have some err at the param list > because "noUnusedParameters": true > need to turn off
function Log(target, methodName, descriptor) {
    const original = descriptor.value;
    // (***) problem: now we can only apply decorator to a function that has this signature fn(message) > not flexible > fix in next lecture
    descriptor.value = function (message) {
        console.log('Before');
        original.call(this, message);
        console.log('After');
    };
}
class Person {
    say(message) {
        console.log(`Person says: ${message}`);
    }
}
__decorate([
    Log
], Person.prototype, "say", null);
const person = new Person();
person.say('Hello'); // (***)
