/*
  Enums P3

*/

// if we use "const" > the code will be optimized
const enum Size {
  SMALL = 's',
  MEDIUM = 'm',
  LARGE = 'l',
}

let mySize: Size = Size.SMALL
console.log(mySize)
