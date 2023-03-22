"use strict";
/*
  Nullish Coalescing Operator P5

*/
// 0 === false !== nullish
let foo = 0 !== null && 0 !== void 0 ? 0 : 'default';
console.log(foo); // 0
