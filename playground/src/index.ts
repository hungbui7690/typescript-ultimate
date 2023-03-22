/*
  Getters & Setters P1
  - though we have getBalance() as getter, but we don't want getter as a function, but a property

*/

class Account {
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number,
    public nickName?: string
  ) {}

  // (***) getter
  get balance(): number {
    return this._balance
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error('Invalid Amount!!')
    this._balance += amount
  }
  private calculateTax() {}
}

let account = new Account(1, 'bic', 123)

console.log(account.balance) // (***)
