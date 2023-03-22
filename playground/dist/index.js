"use strict";
function calculateTax(income, taxYear) {
    if ((taxYear || 2022) < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
const tax1 = calculateTax(40000, 2023);
const tax2 = calculateTax(40000);
console.log(tax1, tax2);
//# sourceMappingURL=index.js.map