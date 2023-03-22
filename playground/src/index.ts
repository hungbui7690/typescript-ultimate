/*
  The never Type P2
  - "allowUnreachableCode": false

*/

// return type = never
function processEvent(): never {
  while (true) {
    // read msg from queue
  }
}

processEvent()
console.log('Hello World') // because the previous line never return > this line is never be executed
