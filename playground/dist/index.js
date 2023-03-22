"use strict";
/*
  Module Format P1
  - AMD (old)
  - UMD (old)
  - CommonJS
  - ES2015/ES6


  - tsconfig: "module": "commonjs",
    > tsc > then check JS file

*/
Object.defineProperty(exports, "__esModule", { value: true });
const shapes_1 = require("./shapes");
let circle = new shapes_1.Circle(1);
