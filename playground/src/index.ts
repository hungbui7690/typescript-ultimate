/*
  Functions P8

*/

// 2nd solution: default param
function calculateTax(income: number, taxYear: number = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2
  }

  return income * 1.3
}

const tax1 = calculateTax(40_000, 2023)
const tax2 = calculateTax(40_000)
console.log(tax1, tax2)
