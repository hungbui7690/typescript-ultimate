/*
  Accessor Decorators P4
  
*/

function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get
  descriptor.get = function () {
    const result = original!.call(this)

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
    return 0 // (***) change to 0, null
  }
}

let person = new Person('Joe', 'Doe')
console.log(person.fullName) // 0, null > our code still works
