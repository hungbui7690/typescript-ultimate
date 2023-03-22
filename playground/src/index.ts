/*
  Module Format 
  - AMD (old)
  - UMD (old)
  - CommonJS
  - ES2015/ES6


  - tsconfig: "module": "commonjs",
    > tsc > then check JS file
    > change to ES2015 and also check JS file

*/

import { Circle as MyCircle } from './shapes'

let circle = new MyCircle(1)
