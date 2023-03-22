/*
  Type Mapping P1

*/

// what if in our app, somewhere else we need read-only property
interface Product {
  name: string
  price: number
}

// (***) Solution 1: duplication
interface ReadOnlyProduct {
  readonly name: string
  readonly price: number
}

class Store<T> {
  protected _items: T[]

  add(item: T): void {
    this._items.push(item)
  }
  find(property: keyof T, value: unknown): T | undefined {
    return this._items.find((item) => item[property] === value)
  }
}

let store = new Store<Product>()
store.add({ name: 'Soap', price: 10 })
store.find('name', 'Soap')
store.find('price', 10)
