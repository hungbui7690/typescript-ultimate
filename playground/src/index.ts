/*
  Describing Types using JSDoc P1
  - js file
    > use multiple lines comment > generate the JSDoc for us
    > /** enter */

// * @param {number} income
// * @returns {number}
// if we compile > show error

import { calculateTax } from './tax'

let tax = calculateTax()
console.log(tax)
