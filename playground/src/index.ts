/*
  Optional Chaining P4

*/

type Customer = {
  birthday?: Date // we can also add here
}

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() }
}

let customer1 = getCustomer(0)
console.log(customer1?.birthday?.getFullYear())

let customer2 = getCustomer(1)
console.log(customer2?.birthday?.getFullYear()) // getFullYear()

//////////////////////////////

// this is useful when we work with array
const numbers: number[] = []
console.log(numbers[0]?.toFixed())
