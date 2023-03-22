/*
  Access Control Keyword P1

*/

class Account {
  readonly id: number
  owner: string
  balance: number
  nickName?: string

  constructor(id: number, owner: string, balance: number) {
    this.id = id
    this.owner = owner
    this.balance = balance
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error('Invalid Amount!!')
    // (***) what if we have array of transaction here
    this.balance += amount
  }
}

let account = new Account(1, 'bic', 123)

account.balance = 100_000 // (***) the problem appears when we update balance here > we did not update the transaction array > we don't know who pay
console.log(account)
