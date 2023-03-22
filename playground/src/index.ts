/*
  Inheritance
  - pic
  - parent/base/super 
  - child/derived/sub


  (***) later, each class will be in a separated file as we learn "modules"
*/

// super/base/parent class
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + ' ' + this.lastName
  }
  walk() {
    console.log('Walking')
  }
}

// child class
class Student extends Person {
  // we don't have to set public for firstName & lastName > since we set in parent class
  constructor(public studentID: number, firstName: string, lastName: string) {
    super(firstName, lastName)
  }

  takeTest() {
    console.log('Taking a Test')
  }
}

let student = new Student(1, 'John', 'Doe')
// student. // we have all the methods and properties of parent and child class
