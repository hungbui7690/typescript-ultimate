/*
  Functions P1
  
*/

function calculateTax1(income) {}

// return type = void = default
function calculateTax2(income: number) {}

// inference > return type = number
function calculateTax3(income: number) {
  return 0
}

// explicitly set the return type > this's good since we can annotate return type for API that people are gonna use
function calculateTax4(income: number): number {
  return 0
}
