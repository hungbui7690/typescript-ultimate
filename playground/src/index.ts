/*
  Functions P1
  - "noUnusedParameters": true

*/

// reason of err: because if condition is true, then return # > but condition is false, then we don't return anything === return undefined
function calculateTax4(income: number): number {
  if (income < 50_000) return income * 1.2
}
