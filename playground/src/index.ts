/*
  Objects P5
  
*/

// readonly
let employee: { readonly id: number; name: string; nickName?: string } = {
  id: 1,
  name: 'Joe',
}

employee.id = 2 // invalid
