/*
  The "keyof" Operator P1

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

  // (***)
  find(property: string, value: unknown): T | undefined {
    return this._items.find((item) => item[property] === value)
  }
}

let store = new Store<Product>()
store.add({ name: 'Soap', price: 10 })
store.find('name', 'Soap')
store.find('price', 10)
store.find('noneExistingProperty', 1) // this line will make our app crashed
