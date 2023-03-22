/*
  Optional Chaining P2

*/

type Customer = {
  birthday: Date
}

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(0)

// solution 1
if (customer) {
  console.log(customer.birthday)
}

// solution 2
console.log(customer?.birthday)
