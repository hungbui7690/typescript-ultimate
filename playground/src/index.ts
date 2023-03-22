/*
  Extending Generic Classes P5

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

class CompressibleStore<T> extends Store<T> {
  compress() {}
}

const store = new CompressibleStore<Product>()
store.compress()

///////////////////////////////////////

// Scenario 2: since _items is private > we cannot access it
class SearchableStore<T> extends Store<T> {
  find(name: string): T | undefined {
    return this._items
  }
}
