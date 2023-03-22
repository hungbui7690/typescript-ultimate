"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('Walking');
    }
}
class Student extends Person {
    constructor(studentID, firstName, lastName) {
        super(firstName, lastName);
        this.studentID = studentID;
    }
    takeTest() {
        console.log('Taking a Test');
    }
}
class Teacher extends Person {
    get fullName() {
        return `Professor ${super.fullName}`;
    }
}
let teacher = new Teacher('John', 'Smith');
console.log(teacher.fullName);
