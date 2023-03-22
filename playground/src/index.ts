/*
  Type Checking JS Code P3
  - // @ts-nocheck in js file

  - why JS does not complain if we don't supply argument? 
    > because we don't supply type for income > type = any 
    > if we don't pass any argument > undefined 
*/

import { calculateTax } from './tax'

let tax = calculateTax()
console.log(tax)
