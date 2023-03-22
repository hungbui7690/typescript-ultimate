/*
  Functions P5

*/

function calculateTax(income: number, taxYear: number): number {
  if (taxYear < 2022) {
    return income * 1.2
  }

  return income * 1.3
}

// there's no way to catch these error in JS
const tax1 = calculateTax(40_000, 2023, 1)
const tax2 = calculateTax(40_000)
