/*
  Extending Generic Classes P8

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

class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._items.find((item) => item.name === name)
  }
}

///////////////////////////////////////

// Scenario 3: fix the generic type parameter
class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    return []
  }
}
