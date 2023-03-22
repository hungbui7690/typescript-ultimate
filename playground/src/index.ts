/*
  Extending Generic Classes P3

*/

interface Product {
  name: string
  price: number
}

class Store<T> {
  private _items: T[]

  add(item: T): void {
    this._items.push(item)
  }
}

///////////////////////////////////////

// Scenario 1: err
class CompressibleStore extends Store<T> {}

// if we create an instance like this, we don't have a chance to put the type
new CompressibleStore<Product>()
