/*
  Understand the Problem P3

*/

class KeyValuePair {
  constructor(public key: number, public value: string) {}
}

// solution 2: create a duplicated class with string as key
class StringKeyValuePair {
  constructor(public key: string, public value: string) {}
}

// we violate the DRY principle
let pair = new StringKeyValuePair('1', 'Apple')
