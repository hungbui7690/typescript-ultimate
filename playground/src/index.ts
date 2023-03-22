/*
  Nullable Types P2

*/

// in case we want to have null value > add to the type
function greet(name: string | null) {
  if (name) console.log(name.toUpperCase())
  else {
    console.log('null')
  }
}

greet(null) // in JS, we can use this > and our program will crashed
