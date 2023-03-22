/*
  Parameterized Decorators P2

*/

function Component(value: number) {
  // arrow function
  return (constructor: Function) => {
    console.log('Component Decorator Called !!')

    constructor.prototype.options = value // use parameter here
    constructor.prototype.uniqueID = Date.now()
    constructor.prototype.insertInDOM = () => {
      console.log('Inserting the component in the DOM')
    }
  }
}

@Component(1)
class ProfileComponent {}
