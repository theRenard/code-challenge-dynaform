const { Router } = require('express')
const router = Router()

router.use('/hello', (_req, res) => {
  res.end('Hello world!')
})

module.exports = router