/*
  Method Overriding P4
  
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
  // (***) if we remove the override keyword, it still works > but it will disconnect with the parent class
  get fullName() {
    return `Professor ${super.fullName}`
  }
}

let teacher = new Teacher('John', 'Smith')
console.log(teacher.fullName)
