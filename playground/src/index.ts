/*
  Union Types P2

*/

// type narrowing
function kgToLbs(weight: number | string) {
  if (typeof weight === 'string') {
    weight // string
  } else {
    weight // number
  }
}

kgToLbs(10)
kgToLbs('10kg')
