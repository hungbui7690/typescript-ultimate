/*
  Understand the Problem P1
  - what if in the app, somewhere we need to use string as key 
    > with the current implementation, we cannot do this
*/

class KeyValuePair {
  constructor(public key: number, public value: string) {}
}

let pair = new KeyValuePair(1, 'Apple')
