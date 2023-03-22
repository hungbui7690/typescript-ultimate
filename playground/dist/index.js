"use strict";
function calculateTax(income, taxYear) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
const tax = calculateTax(40000, 2023);
console.log(tax);
//# sourceMappingURL=index.js.map