/*
  Parameterized Decorators P3

*/

// create type alias
type ComponentOptions = {
  selector: string
}

// use type here
function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log('Component Decorator Called !!')

    constructor.prototype.options = options // use parameter here
    constructor.prototype.uniqueID = Date.now()
    constructor.prototype.insertInDOM = () => {
      console.log('Inserting the component in the DOM')
    }
  }
}

// argument
@Component({ selector: '#my-profile' })
class ProfileComponent {}
