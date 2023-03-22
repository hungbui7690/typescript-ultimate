/*
  Method Overriding P3
  - alternative way to call parent method
  
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
  // alternative way
  override get fullName() {
    return `Professor ${super.fullName}`
  }
}

let teacher = new Teacher('John', 'Smith')
console.log(teacher.fullName)
