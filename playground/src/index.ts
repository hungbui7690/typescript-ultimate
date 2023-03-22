/*
  Getters & Setters P2

*/

class Account {
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number,
    public nickName?: string
  ) {}

  get balance(): number {
    return this._balance
  }

  // (***)
  set balance(value: number) {
    if (value <= 0) throw new Error('Invalid Value!!!')
    this._balance = value
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error('Invalid Amount!!')
    this._balance += amount
  }
  private calculateTax() {}
}

let account = new Account(1, 'bic', 123)

account.balance = 999 // (***)
console.log(account.balance)
