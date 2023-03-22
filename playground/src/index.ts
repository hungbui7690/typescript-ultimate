/*
  Method Decorators P6

*/

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function

  // if we don't want to hard code the message > add parameter here
  descriptor.value = function (message: string) {
    console.log('Before')
    original.call(this, message) // use here
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
