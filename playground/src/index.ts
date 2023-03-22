/*
  Functions P2
  - "noImplicitReturns": true

*/

function calculateTax4(income: number): number {
  if (income < 50_000) return income * 1.2

  return income * 1.3
}
