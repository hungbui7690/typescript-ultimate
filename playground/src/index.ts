/*
  Method Decorators P8

*/

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function

  // use spread operator + set type = any
  descriptor.value = function (...args: any) {
    console.log('Before')
    original.call(this, ...args) // use here
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
