/*
  readonly & Optional Properties P1

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
    this.id = 0 // (***) right now, we still can change the value of id

    if (amount <= 0) throw new Error('Invalid Amount!!')

    this.balance += amount
  }
}

let account = new Account(1, 'bic', 123)

// (***)
account.id = 10
console.log(account)

// (***)
account.deposit(123)
console.log(account)
