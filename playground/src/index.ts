/*
  Nullable Types P1
  - "strictNullChecks": true > default
*/

function greet(name: string) {
  console.log(name.toUpperCase())
}

greet(null) // in JS, we can use this > and our program will crashed
