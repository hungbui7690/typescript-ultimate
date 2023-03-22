/*
  Include JS Code in TS Projects P2
  - "allowJs": true
  - "module": "commonjs" > must be commonjs 

*/

import { calculateTax } from './tax'

let tax = calculateTax(1000)
console.log(tax)
