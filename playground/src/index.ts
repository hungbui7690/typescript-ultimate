/*
  Accessor Decorators P2
  - accessor decorators are similar to method decorators
  
*/

// (***)
function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get // instead use .value > we use .get
  descriptor.get = function () {
    original?.call(this) // use optional chaining, because type of original is any|undefined
  }
}

class Person {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize // apply decorator here
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}
