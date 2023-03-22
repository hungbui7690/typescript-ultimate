/*
  Method Decorators P1
  > https://www.typescriptlang.org/docs/handbook/decorators.html
    > The expression for the method decorator will be called as a function at runtime, with the following three arguments:
      + Either the constructor function of the class for a static member, or the prototype of the class for an instance member.
      + The name of the member.
      + The Property Descriptor for the member.

*/

// example from the docs (link above)
function enumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor // (***)
  ) {
    descriptor.enumerable = value
  }
}
