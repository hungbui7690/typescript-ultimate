/*
  Type Alias P2

*/

// to fix this, we use type alias
type Employee = {
  readonly id: number
  name: string
  nickName?: string
  retire: (date: Date) => void
}

// with this, we don't violate DRY principle
let employee: Employee = {
  id: 1,
  name: 'Joe',
  retire() {},
}
