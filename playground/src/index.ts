/*
  Creating Declaration Files P2
  - create sayHello() in tax.js 
    > we did not declare the type definition for that function > will be invisible to ts compiler > right now, we cannot import
    
*/

import { calculateTax, sayHello } from './tax'

let tax = calculateTax(10_000)
console.log(tax)
