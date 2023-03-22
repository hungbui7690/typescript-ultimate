/*
  Generic Constraints P3

*/

// shape of object
function echo<T extends { name: string }>(value: T): T {
  return value
}

const result3 = echo({ name: 'joe' })
