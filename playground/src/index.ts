/*
  Nullish Coalescing Operator P3

*/

let speed: number | null = null
let ride = {
  speed: speed ?? 30, // in this case, only speed = null | undefined, then speed = 30
}

console.log(ride.speed) // 30
