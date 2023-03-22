/*
  Creating Objects P1

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
// account.  // only show methods and properties that are in this class
