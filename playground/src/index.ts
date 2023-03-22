/*
  Understand the Problem P2

*/

class KeyValuePair {
  // Solution 1: use any type (not recommended)
  constructor(public key: any, public value: string) {}
}

let pair = new KeyValuePair(1, 'Apple')
// pair.key. // no methods are shown since type is any > if we change type to string > show string methods
