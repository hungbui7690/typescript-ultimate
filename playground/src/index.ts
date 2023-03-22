/*
  Generic Classes P1
  - T: template class > from C++
    > can use G or T

  > with the implementation below, we don't need to use any type, and don't duplicate the code

*/

// we need to add type T in 2 places
class KeyValuePair<T> {
  constructor(public key: T, public value: string) {}
}

// because the type is generic > we can use any type we want
let pair1 = new KeyValuePair<string>('1', 'Apple')
let pair2 = new KeyValuePair<number>(1, 'Apple')
let pair3 = new KeyValuePair<boolean>(true, 'Apple')

// pair1.key. // now, it will show string methods
