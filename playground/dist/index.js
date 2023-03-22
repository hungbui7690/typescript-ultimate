"use strict";
/*
  Nullish Coalescing Operator P1

*/
// falsy: 0, '', false, undefined, null
let speed = null;
let ride = {
    speed: speed || 30,
};
console.log(ride.speed); // 30
