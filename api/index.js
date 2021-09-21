import express from 'express';
import hello from './hello';

const app = express()

app.use(hello)

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}

export default app;
