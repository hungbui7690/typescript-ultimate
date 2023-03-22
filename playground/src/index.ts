/*
  Creating Objects P2
  - constructor does not have any return type, since it always return the instance of that class

*/

class Account {
  id: number
  owner: string
  balance: number

  constructor(id: number, owner: string, balance: number) {
    this.id = id
    this.owner = owner
    this.balance = balance
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error('Invalid Amount!!')

    this.balance += amount
  }
}

let account = new Account(1, 'bic', 123)

account.deposit(100) // (***)
console.log(account.balance) // 223
console.log(account)

console.log(account instanceof Account) // true
