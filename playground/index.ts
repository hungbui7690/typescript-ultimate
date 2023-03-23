/*
  Parsing Request Bodies P1
  - routes/reminders.ts

*/

import express from 'express'
const app = express()

import remindersRouter from './routes/reminders'

app.use('/reminders', remindersRouter)

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(5000, () => console.log('Server Started...'))
