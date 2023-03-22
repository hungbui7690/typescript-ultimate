/*
  Method Decorators P3

*/

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  // (***)
  descriptor.value = function () {
    console.log(`New Implementation !!!!`)
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
