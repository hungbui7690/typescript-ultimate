/*
  Access Control Keyword P4

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

  getBalance() {
    return this._balance
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error('Invalid Amount!!')
    this._balance += amount
  }

  // private method
  private calculateTax() {}
}

let account = new Account(1, 'bic', 123)

account.calculateTax() // complain
