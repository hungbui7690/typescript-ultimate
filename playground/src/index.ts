/*
  Extending Generic Classes P7

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
}

class CompressibleStore<T> extends Store<T> {
  compress() {}
}

const store = new CompressibleStore<Product>()
store.compress()

///////////////////////////////////////

// Scenario 2: <T extends { name: string }>
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._items.find((item) => item.name === name)
  }
}
