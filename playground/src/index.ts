/*
  The "keyof" Operator P2

*/

interface Product {
  name: string
  price: number
}

class Store<T> {
  protected _items: T[]

  add(item: T): void {
    this._items.push(item)
  }

  // (***) keyof T
  find(property: keyof T, value: unknown): T | undefined {
    return this._items.find((item) => item[property] === value)
  }
}

let store = new Store<Product>()
store.add({ name: 'Soap', price: 10 })
store.find('name', 'Soap')
store.find('price', 10)
store.find('noneExistingProperty', 1) // (***) now, we can catch this error at compiled time
