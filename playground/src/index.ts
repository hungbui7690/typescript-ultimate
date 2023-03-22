/*
  Private vs Protected Members P1

*/

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + ' ' + this.lastName
  }

  // private method
  private walk() {
    console.log('Walking')
  }
}

class Student extends Person {
  constructor(public studentID: number, firstName: string, lastName: string) {
    super(firstName, lastName)
  }

  takeTest() {
    this.walk() // because private > we can not use in child class
    console.log('Taking a Test')
  }
}

class Teacher extends Person {
  override get fullName() {
    return `Professor ${super.fullName}`
  }
}

// (***) why it is so powerful?
class Principal extends Person {
  override get fullName() {
    return `Principal ${super.fullName}`
  }
}

function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName)
  }
}

printNames([
  new Student(1, 'John', 'Smith'),
  new Teacher('Joe', 'Doe'),
  new Principal('Jackson', 'Duck'), // (***) it's powerful because we don't have to change function printNames()
])
