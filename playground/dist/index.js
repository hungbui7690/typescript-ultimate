"use strict";
/*
  The unknown Type P4

  (***) use "unknown" type other than "any" type

*/
class WordDocument {
    walk() { }
}
function render(document) {
    if (typeof document === 'string')
        document.toUpperCase();
    if (typeof document === 'number')
        document.toFixed();
    if (document instanceof WordDocument)
        document.walk(); // learn later > this is also a way to narrow down type when it is an instance of class
}
