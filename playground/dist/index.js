"use strict";
/*
  Describing Types using JSDoc P2

*/
Object.defineProperty(exports, "__esModule", { value: true });
const tax_1 = require("./tax");
let tax = (0, tax_1.calculateTax)(10000); // supply arg
console.log(tax);
