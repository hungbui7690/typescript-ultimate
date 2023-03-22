"use strict";
/*
  The unknown Type P1

*/
// we learned before > avoid this as much as possible
let x;
// the problem with any type is we can call any methods that we want, though they don't exist
function render(document) {
    document.fly();
    document.walk();
}
