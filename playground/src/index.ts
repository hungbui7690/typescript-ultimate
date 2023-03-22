/*
  Generic Constraints P1

*/

function echo<T>(value: T): T {
  return value
}

// what if we want to limit the type that we pass in
const result1 = echo('1')
const result2 = echo(1)
