/*
  Type Mapping P2

*/

interface Product {
  name: string
  price: number
}

// (***) Solution 2: Type Mapping > type alias > use Index Signature + keyof
// "Property" === T === K === generic type
type ReadOnlyProduct = {
  [Property in keyof Product]: Product[Property]
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
