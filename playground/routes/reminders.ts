import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.send('Hello from Router!!')
})

// ***
router.post('/', (req, res) => {
  req.body // type = any > because express does not know what data will be sent to server
})

export default router
