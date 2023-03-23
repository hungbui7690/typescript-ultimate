import { Router } from 'express'

import CreateReminderDto from '../dtos/CreateReminderDto' // ***

const router = Router()

router.get('/', (req, res) => {
  res.send('Hello from Router!!')
})

router.post('/', (req, res) => {
  const { title } = req.body as CreateReminderDto // ***
  res.json(title)
})

export default router
