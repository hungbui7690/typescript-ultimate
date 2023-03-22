"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        this.id = 0;
        if (amount <= 0)
            throw new Error('Invalid Amount!!');
        this.balance += amount;
    }
}
let account = new Account(1, 'bic', 123);
account.id = 10;
console.log(account);
account.deposit(123);
console.log(account);
