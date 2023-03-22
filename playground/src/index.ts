/*
  Generic Functions P4

*/

// make it as static
class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value]
  }
}

// call static methods
let numbers = ArrayUtils.wrapInArray(1)
let strings = ArrayUtils.wrapInArray('1')
