/*
  Functions P3

*/

// "noUnusedLocals": true
// with all these settings, we caught all errors
function calculateTax4(income: number, taxYear: number): number {
  let x
  if (income < 50_000) return income * 1.2

  return income * 1.3
}
