"use strict";
/*
  Nullish Coalescing Operator P3

*/
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30, // in this case, only speed = null | undefined, then speed = 30
};
console.log(ride.speed); // 30
