/*
  Polymorphism P1
  - Poly: many
  - Morph: form
  
  > if we don't have Polymorphism, we need to use if/else or switch/case for each type of instances

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

class Teacher extends Person {
  override get fullName() {
    return `Professor ${super.fullName}`
  }
}

//////////////////////////////////////

// (***) think about this > why we use Person[]
function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName) // depends on the type of each instance, it will log out different inputs
  }
}

// first iteration: take the form of Student
// second iteration: take the form of Teacher
printNames([new Student(1, 'John', 'Smith'), new Teacher('Joe', 'Doe')])
