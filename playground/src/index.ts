/*
  Extending Generic Classes P2

*/

interface Product {
  name: string
  price: number
}

class Store<T> {
  private _items: T[] // private

  add(item: T): void {
    this._items.push(item)
  }
}

let store = new Store<Product>()
store._items = [] // error if we want to change _items
