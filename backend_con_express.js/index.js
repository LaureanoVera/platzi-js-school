const express = require('express')
const routerApi = require('./routes')
const app = express()
const PORT = 3000;

// Routes
app.get('/', (req,res) => {
  res.send('Your first server')
})

routerApi(app)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
