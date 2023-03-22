/*
  Creating Declaration Files P1
  - other than JSDoc, this is another way to provide types if we don't want to add comments to JS code like we did

  - create tax.d.ts
    > d === decoration
    > export declare function calculateTax(income: number): number > remember to export

*/

import { calculateTax } from './tax'

let tax = calculateTax(10_000)
console.log(tax)
