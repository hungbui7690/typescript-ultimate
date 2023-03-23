/*
  Parsing Request Bodies P3
  - by default, express does not parse req.body > need to install middleware
    > app.use(express.json())

  - move interface to another file
    > create dtos/CreateReminderDtos.ts

*/

import express from 'express'
const app = express()

import remindersRouter from './routes/reminders'

app.use(express.json()) // ***
app.use('/reminders', remindersRouter)

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.listen(5000, () => console.log('Server Started...'))
