/*
  Property Decorators P2
  
*/

function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string // (***)

    // (1)
    const descriptor: PropertyDescriptor = {
      // getter
      get() {
        return value
      },

      // setter
      set(newValue: string) {
        if (newValue.length < length)
          throw new Error(
            `Property should be at least ${length} characters long`
          )
        value = newValue
      },
    }

    // (2)
    Object.defineProperty(target, propertyName, descriptor)
  }
}

// we don't define getter & setter in the class > but define them in decorators
class User {
  @MinLength(4)
  password: string

  constructor(password: string) {
    this.password = password
  }
}

// (3)
let user = new User('1234')
user.password = '1' // invalid > throw err
console.log(user.password)
