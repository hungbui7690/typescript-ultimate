/*
  Generic Interfaces P3

*/

interface Result<T> {
  data: T | null
  error: string | null
}

// implement
function fetch<T>(url: string): Result<T> {
  return { data: null, error: null }
}
