const express = require('express')
const routerApi = require('./routes')
const app = express()
const PORT = 3000;

app.use(express.json())

// Routes
app.get('/', (req,res) => {
  res.send('Your first server')
})

routerApi(app)

// LISTEN SERVER
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
