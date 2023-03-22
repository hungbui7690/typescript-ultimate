/*
  Exporting & Importing P2
  - create shapes.ts

*/

// import and set alias
import { Circle as MyCircle } from './shapes'

let circle = new MyCircle(1)
console.log(circle.radius)

let square = new Square(1) // since we did not import > place cursor on "Square", then Ctrl + .
