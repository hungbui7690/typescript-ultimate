"use strict";
/*
  Describing Types using JSDoc
  - js file
    > use multiple lines comment > generate the JSDoc for us
    > /** enter */
Object.defineProperty(exports, "__esModule", { value: true });
// * @param {number} income
// * @returns {number}
const tax_1 = require("./tax");
let tax = (0, tax_1.calculateTax)();
console.log(tax);
