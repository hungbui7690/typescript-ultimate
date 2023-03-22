"use strict";
/*
  Nullish Coalescing Operator P2

*/
let speed = null;
let ride = {
    speed: speed !== null ? speed : 30, // similar to: speed || 30 > still falsy value
};
console.log(ride.speed); // 30
