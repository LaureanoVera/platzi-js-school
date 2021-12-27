const express = require('express')
const app = express()
const PORT = 3000;

// Routes
app.get('/', (req,res) => {
  res.send('Your first server')
})

app.get('/newRoute', (req,res) => {
  res.send("Hi, I'm a new route!")
})

app.get('/products', (req,res) => {
  res.json([
    {
      name: 'ProductOne',
      price: 10
    },
    {
      name: 'ProductTwo',
      price: 20
    },
    {
      name: 'ProductThree',
      price: 30
    }
  ])
})

app.get('/products/:id',(req,res) => {
  const { id } = req.params
  res.json({
    id,
    name: 'ProductThree',
    price: 30
  })
})

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params
  res.json({
    categoryId,
    productId
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
