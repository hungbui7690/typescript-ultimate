"use strict";
/*
  Optional Chaining P5

*/
let log = (message) => console.log(message);
log = null;
log === null || log === void 0 ? void 0 : log('a'); // optional chaining when calling a function
