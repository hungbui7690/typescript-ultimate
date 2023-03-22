/*
  Type Mapping P4

*/

interface Product {
  name: string
  price: number
}

// (***) use Generic Type
type ReadOnly<T> = {
  readonly [K in keyof Product]: Product[K]
}

// (***)
let product: ReadOnly<Product> = {
  name: 'Soap',
  price: 10,
}

product.name = 'Dish' // we cannot change since it's readonly
