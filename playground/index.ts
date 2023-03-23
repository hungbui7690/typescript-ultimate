/*
  Creating a Router
  - create routes/reminder.ts
  
*/

import express from 'express'
const app = express()

import remindersRouter from './routes/reminders' // ***

// *** test with /reminders
app.use('/reminders', remindersRouter)

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(5000, () => console.log('Server Started...'))
