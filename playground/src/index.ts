/*
  Generic Functions P2

*/

// use generic type
function wrapInArray<T>(value: T) {
  return [value]
}

// with this implementation, we can use any type we want > hover
let numbers1 = wrapInArray(1)
let numbers2 = wrapInArray('1')
let numbers3 = wrapInArray(true)
