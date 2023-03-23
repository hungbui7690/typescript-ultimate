/*
  Executing TS Code with Node
  > node index.ts > err
    > since node does not understand TS
    > we have 2 options:
      + tsc : transpile ts to js 
      + install ts-node
        > npm init -y
        > npm i ts-node

  > package.json: "start": "ts-node index.ts"
    > compile implicitly and run at the same time

  (***) we can install ts-node globally 
    > npm i -g ts-node
    > ts-node index.ts
*/

let x: number = 1
console.log(x)
