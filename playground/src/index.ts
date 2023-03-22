/*
  Method Decorators P2


*/

// (1) declare method decorator
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {}

class Person {
  // (2) use method decorator
  @Log
  say(message: string) {
    console.log(`Person says: ${message}`)
  }
}
