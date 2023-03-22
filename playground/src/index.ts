/*
  The never Type P5

*/

function reject(message: string): never {
  throw new Error(message)
}

reject('...')
console.log('hello') // this line will never be executed
