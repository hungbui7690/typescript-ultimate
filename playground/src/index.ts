/*
  Method Decorators P9

*/

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function

  // (***) remember DON'T use ARROW FN here > since we use "this" keyword
  descriptor.value = (...args: any) => {
    console.log('Before')
    original.call(this, ...args)
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
person.say('Hello') // (***)
