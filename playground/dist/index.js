"use strict";
/*
  Type Checking JS Code P2
  - "checkJs": true

  > recompile and see what we get

*/
Object.defineProperty(exports, "__esModule", { value: true });
const tax_1 = require("./tax");
let tax = (0, tax_1.calculateTax)();
console.log(tax);
