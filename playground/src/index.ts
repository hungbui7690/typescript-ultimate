/*
  Method Decorators P7

*/

// we still have some err at the param list > because "noUnusedParameters": true > need to turn off
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function

  // (***) problem: now we can only apply decorator to a function that has this signature fn(message) > not flexible > fix in next lecture
  descriptor.value = function (message: string) {
    console.log('Before')
    original.call(this, message)
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
