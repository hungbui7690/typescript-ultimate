/*
  Method Overriding P2
    
  
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
  // (***)
  override get fullName() {
    return `Professor ${this.firstName} ${this.lastName}`
  }
}

let teacher = new Teacher('John', 'Smith')
console.log(teacher.fullName)
