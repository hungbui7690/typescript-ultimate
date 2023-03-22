/*
  Generic Constraints P2

*/

// using extends to limit the types
function echo<T extends string | number>(value: T): T {
  return value
}

const result1 = echo('1')
const result2 = echo(1)
const result3 = echo(true) // only string | number
