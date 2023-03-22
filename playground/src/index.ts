/*
  Creating Class P3
  - check JS file

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

  // method
  deposit(amount: number): void {
    if (amount <= 0) throw new Error('Invalid Amount!!')

    this.balance += amount
  }
}
