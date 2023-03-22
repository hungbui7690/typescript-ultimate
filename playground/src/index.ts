/*
  Functions P4

*/

// final version
function calculateTax(income: number, taxYear: number): number {
  if (taxYear < 2022) {
    return income * 1.2
  }

  return income * 1.3
}

const tax = calculateTax(40_000, 2023)
console.log(tax)
