/*
  readonly & Optional Properties P3

*/

class Account {
  readonly id: number
  owner: string
  balance: number
  nickName?: string // (***) use with un-important properties

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
console.log(account)
