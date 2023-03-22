/*
  Type Alias P1

  - the problems are: 
    1. later, if we create a new object > we have to define this again
    2. if another object we want to add more properties > 2 objects will not have consistent shape
    3. our code right now is hard to read 
    
*/

// the problem
let employee: {
  readonly id: number
  name: string
  nickName?: string
  retire: (date: Date) => void
} = {
  id: 1,
  name: 'Joe',
  retire() {},
}
