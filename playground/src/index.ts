/*
  Type Mapping P5

*/

interface Product {
  name: string
  price: number
}

// (***) more generic > use T instead of Product
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K]
}

let product: ReadOnly<Product> = {
  name: 'Soap',
  price: 10,
}

product.name = 'Dish'
