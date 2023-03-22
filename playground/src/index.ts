/*
  Optional Chaining P5

*/

let log: any = (message: string) => console.log(message)
log = null

log?.('a') // optional chaining when calling a function
