import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.send('Hello from Router!!')
})

// *** Dto = Data Transfer Object
interface CreateReminderDto {
  title: string
}

router.post('/', (req, res) => {
  const { title } = req.body as CreateReminderDto // ***
  res.json(title) // test with postman > TypeError: Cannot destructure property 'title' of 'req.body' as it is undefined. > next lesson
})

export default router
