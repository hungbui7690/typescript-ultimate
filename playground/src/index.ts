/*
  The never Type P4

*/

function reject(message: string): never {
  throw new Error(message)
}

reject('...')
console.log('hello') // this line will never be executed
