/*
  Method Overriding P5
  - "noImplicitOverride": true
    > we should turn this on
  
*/

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + ' ' + this.lastName
  }
  walk() {
    console.log('Walking')
  }
}

class Student extends Person {
  constructor(public studentID: number, firstName: string, lastName: string) {
    super(firstName, lastName)
  }

  takeTest() {
    console.log('Taking a Test')
  }
}

//////////////////////////////////////

class Teacher extends Person {
  // (***) if we don't have override keyword > err
  get fullName() {
    return `Professor ${super.fullName}`
  }
}

let teacher = new Teacher('John', 'Smith')
console.log(teacher.fullName)
