/*
  Default Export
  - sometimes, when we want to export a single thing > use Default Export
  - create storage.ts

*/

import { Circle as MyCircle } from './shapes'
import Store, { Format } from './storage' // default + named import

const store = new Store()
