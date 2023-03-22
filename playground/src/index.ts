/*
  Accessor Decorators P3
  
*/

function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get
  descriptor.get = function () {
    const result = original!.call(this) // because we know that we will apply this decorator on getter > it cannot be null > use !. instead of ?.

    // type of result = any > we need to use type narrowing > hover above
    if (typeof result === 'string') {
      return result.toUpperCase()
    }
    return result
  }
}

class Person {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

// instantiate
let person = new Person('Joe', 'Doe')
console.log(person.fullName) // JOE DOE
