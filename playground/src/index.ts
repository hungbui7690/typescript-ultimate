/*
  Parameterized Decorators P1

*/

// we want to add parameter > need to return function
function Component(value: number) {
  return function (constructor: Function) {
    console.log('Component Decorator Called !!')

    constructor.prototype.uniqueID = Date.now()
    constructor.prototype.insertInDOM = () => {
      console.log('Inserting the component in the DOM')
    }
  }
}

// argument
@Component(1)
class ProfileComponent {}
