/*
  Generic Interfaces P2
  - Assume that we have 2 routes: 
    + https://mywebsite.com/users
    + https://mywebsite.com/products

*/

// in case we have error, then data = null > if we have data, then error = null
interface Result<T> {
  data: T | null
  error: string | null
}
