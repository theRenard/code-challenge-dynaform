import { Router } from 'express';
const router = Router()

router.use('/hello', (_req, res) => {
  res.end('Hello world!')
})

export default router;
