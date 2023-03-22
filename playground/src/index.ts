/*
  Generic Functions P3

*/

// wrap in a class
class ArrayUtils {
  wrapInArray<T>(value: T) {
    return [value]
  }
}

let utils = new ArrayUtils()
let numbers = utils.wrapInArray(1)
let strings = utils.wrapInArray('1')
