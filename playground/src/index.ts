/*
  Objects P3

  (***) though TS supports optional, we shouldn't use it
    > the only place where we can use optional is un-important property

*/

// or we can set the property to optional
let employee: { id: number; name?: string } = { id: 1 }
employee.name = 'John'
