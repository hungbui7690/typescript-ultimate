/*
  Enums P2
  - check JS code   
*/

// if we use string as values, we need to define the values for all fields
enum Size {
  SMALL = 's',
  MEDIUM = 'm',
  LARGE = 'l',
}

// how to use enum
let mySize: Size = Size.SMALL
console.log(mySize)
