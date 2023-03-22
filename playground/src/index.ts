/*
  Generic Constraints P5

*/

// we can also use class
class Person {
  constructor(public name: string) {}
}

class Customer extends Person {}

// (***)
function echo<T extends Person>(value: T): T {
  return value
}

// (***) any class or instance derived directly or indirectly from Person class
const result1 = echo(new Person('Joe'))
const result2 = echo(new Customer('Nick'))
