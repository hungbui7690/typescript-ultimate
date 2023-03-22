/*
  What are Decorators? 
  - attributes that we can apply to class and members, so we can change the way they behave 

  (***) > Angular, Vue has many decorators > @Python, @Component... 
        > Decorators are just functions > are called at runtime and pass the class to it > it has the chance to modify the class : add properties, methods...

  (***) because decorators are still in experimental > need to turn on in tsconfig
        > "experimentalDecorators": true

*/

// Example: TS does not have Component
@Component
class ProfileComponent {}
