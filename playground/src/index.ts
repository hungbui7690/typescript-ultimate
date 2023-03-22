/*
  Private vs Protected Members P2

  (***) DON'T use protected as long as we know what we are doing > otherwise, create "coupling" in our application

  > https://viblo.asia/p/tim-hieu-ve-coupling-va-cohesion-bJzKmo7El9N

*/

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + ' ' + this.lastName
  }

  // (***) protected: can access in current and child class
  protected walk() {
    console.log('Walking')
  }
}

class Student extends Person {
  constructor(public studentID: number, firstName: string, lastName: string) {
    super(firstName, lastName)
  }

  takeTest() {
    this.walk() // (***) protected > can access from child class
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
