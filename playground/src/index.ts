/*
  Type Mapping P6
  - search for Utility Types
    > https://www.typescriptlang.org/docs/handbook/utility-types.html
  - some common types: 
    > Partial
    > Required
    > Readonly

*/

interface Product {
  name: string
  price: number
}

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K]
}

let product: ReadOnly<Product> = {
  name: 'Soap',
  price: 10,
}

// (***) optional
type Optional<T> = {
  [K in keyof T]?: T[K]
}

// (***) nullable
type Nullable<T> = {
  [K in keyof T]: T[K] | null
}
