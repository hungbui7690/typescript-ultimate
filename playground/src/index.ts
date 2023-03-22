/*
  Access Control Keyword P2
  - default = public

*/

class Account {
  readonly id: number
  owner: string
  private _balance: number // we use private keyword here > convention is to use _ for private property
  nickName?: string

  constructor(id: number, owner: string, balance: number) {
    this.id = id
    this.owner = owner
    this._balance = balance
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error('Invalid Amount!!')
    this._balance += amount
  }
}

let account = new Account(1, 'bic', 123)

account._balance = 100_000 // complain here
console.log(account)
