/*
  Objects P6
  
*/

let employee: {
  readonly id: number
  name: string
  nickName?: string
  retire: (date: Date) => void // must have method retire()
} = {
  id: 1,
  name: 'Joe',

  // implement here > though it does not have param, TS still not complains ????
  retire() {},
}
