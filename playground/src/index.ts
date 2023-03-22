/*
  Class Decorators P2
  - this is how we implement decorator using class

*/

// this is without using decorator
class Component {
  constructor() {
    console.log('Component Decorator is called')
  }
  insertInDOM() {}
}

// extends
class ProfileComponent extends Component {}

// instantiate
const profileComponent = new ProfileComponent()
