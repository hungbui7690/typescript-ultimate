/*
  Creating a Basic Route
  
*/

import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World') // since we install @types > we have all the methods attached with req & res
})

app.listen(5000, () => console.log('Server Started...'))
