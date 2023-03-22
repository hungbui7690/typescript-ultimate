/*
  Generic Functions P1

*/

function wrapInArray(value: number) {
  return [value]
}

// with this implementation, we cannot pass the string > since the declared type is number
let numbers = wrapInArray(1)
