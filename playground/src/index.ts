/*
  readonly & Optional Properties P2

*/

class Account {
  readonly id: number // (***)
  owner: string
  balance: number

  constructor(id: number, owner: string, balance: number) {
    this.id = id
    this.owner = owner
    this.balance = balance
  }

  deposit(amount: number): void {
    this.id = 0 // complain

    if (amount <= 0) throw new Error('Invalid Amount!!')

    this.balance += amount
  }
}

let account = new Account(1, 'bic', 123)

account.id = 10 // complain
console.log(account)
