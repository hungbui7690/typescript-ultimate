/*
  The never Type P3

*/

// if we remove never type > last line will never be executed, but no error
function processEvent() {
  while (true) {
    // read msg from queue
  }
}

processEvent()
console.log('Hello World')
