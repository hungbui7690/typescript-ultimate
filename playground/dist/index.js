"use strict";
/*
  Include JS Code in TS Projects P2
  - "allowJs": true
*/
Object.defineProperty(exports, "__esModule", { value: true });
const tax_1 = require("./tax");
let tax = (0, tax_1.calculateTax)(1000);
console.log(tax);
