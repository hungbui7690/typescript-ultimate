/*
  Type Mapping P3

*/

interface Product {
  name: string
  price: number
}

// (***) Solution 2: add readonly
type ReadOnlyProduct = {
  readonly [Property in keyof Product]: Product[Property]
}

// (***) use ReadOnlyProduct as type
let product: ReadOnlyProduct = {
  name: 'Soap',
  price: 10,
}

product.name = 'Dish' // we cannot change since it's readonly
