"use strict";
/*
  Accessor Decorators P1
  - getters & setters

*/
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
