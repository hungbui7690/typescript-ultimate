/*
  Parameter Properties
  - shorter way to defined constructor()
  - with "parameter properties": 
    > we don't need to write anything in the body of constructor function
    > we don't need to defined type at the beginning of the class

  (***) we will use this way from now on when we create class

*/

class Account {
  // (***)
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number,
    public nickName?: string
  ) {}

  getBalance() {
    return this._balance
  }
  deposit(amount: number): void {
    if (amount <= 0) throw new Error('Invalid Amount!!')
    this._balance += amount
  }
  private calculateTax() {}
}

let account = new Account(1, 'bic', 123)
console.log(account)
