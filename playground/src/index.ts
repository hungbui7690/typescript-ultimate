/*
  Decorator Composition
  - we can see that decorators are applied in reversed order if we have multiple decorators
    > the ideas come from the math
      + if we have f(g(x)) 
        > g(x) need to be executed first and return result 
        > then f(result) will be executed

*/

type ComponentOptions = {
  selector: string
}

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

// create new decorator
function Pipe(constructor: Function) {
  console.log('Pipe Decorator Called !!')
  constructor.prototype.pipe = true
}

// (***) this class has 2 decorators > when we run, we will see @Pipe will run first (explain above)
@Component({ selector: '#my-profile' })
@Pipe
class ProfileComponent {}
