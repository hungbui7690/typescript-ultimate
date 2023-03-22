/*
  Generic Interfaces P4

*/

interface Result<T> {
  data: T | null
  error: string | null
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null }
}

////////////////////////////

interface User {
  username: string
}
interface Product {
  title: string
}

let users = fetch<User>('url')
users.data?.username

let products = fetch<Product>('url')
products.data?.title
