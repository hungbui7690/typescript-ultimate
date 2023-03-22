/*
  Union Types P3

*/

function kgToLbs(weight: number | string): number {
  if (typeof weight === 'string') {
    return parseFloat(weight) * 2.2 // TS does not care about the logic, it just care about the type > this case, we still can use parseFloat('10kg')
  } else {
    return weight * 0.454
  }
}

kgToLbs(10)
kgToLbs('10kg')
