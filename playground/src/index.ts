/*
  Access Control Keyword P3
  - what if we want to show the balance to customer > getter

*/

class Account {
  readonly id: number
  owner: string
  private _balance: number
  nickName?: string

  constructor(id: number, owner: string, balance: number) {
    this.id = id
    this.owner = owner
    this._balance = balance
  }

  // (***) getter
  getBalance() {
    return this._balance
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error('Invalid Amount!!')
    this._balance += amount
  }
}

let account = new Account(1, 'bic', 123)

console.log(account.getBalance()) // (***)
