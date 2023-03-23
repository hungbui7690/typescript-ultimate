/*
  Setting Up an Express Project
  > npm init -y
  > npm i express
  > npm i -D typescript @types/node @types/express
  > tsc --init
  > npm install -D nodemon
  > package.json: "nodemon index.ts"
  
  (***) we have to install typescript though we have TS in our machine just because we want to freeze the version of TS that we use > also, we if other devs don't have TS on their machine, they can install through package.json
  (***) latest version of nodemon supports TS

*/

import express from 'express'
const app = express()

app.listen(5000, () => console.log('Server Started...'))
