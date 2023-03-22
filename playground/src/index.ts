/*
  Generic Classes P2

*/

// <K, V>
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

// because the type is generic > we can use any type we want
let pair1 = new KeyValuePair<string, string>('1', 'Apple')
let pair2 = new KeyValuePair<number, boolean>(1, true)

// (***) if we don't supply the type, TS will infers it if we initialize
let pairX = new KeyValuePair('1', 'orange')
