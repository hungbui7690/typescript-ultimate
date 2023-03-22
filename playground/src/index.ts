/*
  Method Decorators P5

*/

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function // type assertion

  descriptor.value = function () {
    console.log('Before')
    original.call(this, 'Hi there!!!') // call say('Hi there!!!') > this case we hard code the message
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
