/*
  Method Decorators P4

*/

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value

  descriptor.value = function () {
    // (***) if we want to run the old method implementation here
    console.log('Before')
    // original. // type === any
    console.log('After')
  }
}

class Person {
  @Log
  say(message: string) {
    console.log(`Person says: ${message}`)
  }
}

const person = new Person()
person.say('Hello') // we can see that this methods implementation is changed > it uses the implementation of decorator
