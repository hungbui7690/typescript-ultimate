"use strict";
/*
  Optional Chaining P4

*/
var _a, _b, _c;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer1 = getCustomer(0);
console.log((_a = customer1 === null || customer1 === void 0 ? void 0 : customer1.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let customer2 = getCustomer(1);
console.log((_b = customer2 === null || customer2 === void 0 ? void 0 : customer2.birthday) === null || _b === void 0 ? void 0 : _b.getFullYear()); // getFullYear()
//////////////////////////////
// this is useful when we work with array
const numbers = [];
console.log((_c = numbers[0]) === null || _c === void 0 ? void 0 : _c.toFixed());
