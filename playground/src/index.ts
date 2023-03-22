/*
  Class Decorators P1
  - convention is to used "constructor"
  - type = Function

*/

// (***)
function Component(constructor: Function) {
  console.log('Component Decorator Called !!')

  // add new members in the prototype of the class that has decorator
  constructor.prototype.uniqueID = Date.now()
  constructor.prototype.insertInDOM = () => {
    console.log('Inserting the component in the DOM')
  }
}

// based on what we did above, this class should have 2 new members that we defined above
@Component
class ProfileComponent {}
