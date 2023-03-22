/*
  Extending Generic Classes P6

*/

interface Product {
  name: string
  price: number
}

class Store<T> {
  protected _items: T[] // protected

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

// Scenario 2: we need to set from private to protected (above) > but we still cannot access .name property
class SearchableStore<T> extends Store<T> {
  find(name: string): T | undefined {
    return this._items.find((item) => item.name === name)
  }
}
