/*
  Extending Generic Classes P1

*/

interface Product {
  name: string
  price: number
}

class Store<T> {
  items: T[]

  add(item: T): void {
    this.items.push(item)
  }
}

let store = new Store<Product>()
store.items = [] // with this implementation, we can easily clear the store by mistake
