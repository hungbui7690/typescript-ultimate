/*
  Extending Generic Classes P4

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

// Scenario 1: need to pass the type for CompressibleStore as well
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

const store = new CompressibleStore<Product>() // no error now
// store. // add() + compress()
