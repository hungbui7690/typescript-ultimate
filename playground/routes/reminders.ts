import { Router } from 'express'
import CreateReminderDto from '../dtos/CreateReminderDto'
import Reminder from '../models/reminders'

const router = Router()

router.get('/', (req, res) => {
  res.send('Hello from Router!!')
})

router.post('/', (req, res) => {
  const { title } = req.body as CreateReminderDto

  // ***
  const reminder = new Reminder(title)

  res.json(title)
})

export default router
