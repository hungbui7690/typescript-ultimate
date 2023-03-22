/*
  Generic Constraints P4

*/

// create interface
interface Person {
  name: string
}

// extends
function echo<T extends Person>(value: T): T {
  return value
}

const result1 = echo({ name: 'joe' })
