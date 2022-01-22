const express = require('express')
const routerApi = require('./routes')
const app = express()
const PORT = 3000;
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

app.use(express.json())

// ROUTES
app.get('/', (req,res) => {
  res.send('Your first server')
})

routerApi(app)

// ERROR MIDDLEWARES
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

// LISTEN SERVER
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
