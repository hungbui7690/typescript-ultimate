/*
  Nullable Types P3

*/

// we also can have undefined type
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase())
  else {
    console.log('null or undefined param')
  }
}

greet(undefined)
