/*
  Tuples
  - fixed size & type & order

  
  */

let user: [number, string] = [1, 'Joe']
// user[1]. // show all string methods

// (***) the problem appears when we push new value into tuple > right now, tuple has 3 items, but no complain
user.push(1)

// (***) tuple should have 2 elements, because if it has too many elements, it's hard to tell what it is
let temp: [string, number, boolean, number] = ['a', 1, true, 2]
