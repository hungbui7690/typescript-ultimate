"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    getBalance() {
        return this._balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid Amount!!');
        this._balance += amount;
    }
    calculateTax() { }
}
let account = new Account(1, 'bic', 123);
account.calculateTax();
