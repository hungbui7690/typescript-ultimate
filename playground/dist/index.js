"use strict";
/*
  Optional Chaining P3

*/
// with optional chaining, we can add more falsy type if we want > undefined
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer1 = getCustomer(0);
console.log(customer1 === null || customer1 === void 0 ? void 0 : customer1.birthday); // it still works
let customer2 = getCustomer(1);
console.log(customer2 === null || customer2 === void 0 ? void 0 : customer2.birthday);
