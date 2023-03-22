"use strict";
/*
  Nullish Coalescing Operator P4

*/
let foo = null !== null && null !== void 0 ? null : 'default';
console.log(foo); // default
