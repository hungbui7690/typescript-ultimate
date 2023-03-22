/*
  Optional Chaining P3

*/

type Customer = {
  birthday: Date
}

// with optional chaining, we can add more falsy type if we want > undefined
function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() }
}

let customer1 = getCustomer(0)
console.log(customer1?.birthday) // it still works

let customer2 = getCustomer(1)
console.log(customer2?.birthday)
