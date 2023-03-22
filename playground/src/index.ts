/*
  Property Decorators P1
  
*/

function MinLength(length: number) {
  // similar to method decorator, but without descriptor
  return (target: any, propertyName: string) => {
    let descriptor: PropertyDescriptor = {
      // ctrl + space > we will see the list of properties with "?"
    }
  }
}

class User {
  @MinLength(4) // property decorator
  password: string

  // when work with property decorator, we need to use the old way constructor() definition
  constructor(password: string) {
    this.password = password
  }
}
