/*
  Functions P7

*/

function calculateTax(income: number, taxYear?: number): number {
  // first solution: good old ES5
  if ((taxYear || 2022) < 2022) {
    return income * 1.2
  }

  return income * 1.3
}

const tax1 = calculateTax(40_000, 2023)
const tax2 = calculateTax(40_000)
console.log(tax1, tax2)
