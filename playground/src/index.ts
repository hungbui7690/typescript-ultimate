/*
  Accessor Decorators P1
  - getters & setters

*/

class Person {
  constructor(public firstName: string, public lastName: string) {}

  // getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}
