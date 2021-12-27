const express = require('express')
const faker = require('faker')
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
  const products = []
  const { size } = req.query
  const limit = size || 10

  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
      image: faker.image.sports
    })
  }
  res.json(products)
})

app.get('/products/filter',(req,res) => {
  res.send("I'm filter")
})

app.get('/products/:id',(req,res) => {
  const { id } = req.params
  res.json({
    id,
    name: 'ProductThree',
    price: 30
  })
})

app.get('/users', (req, res) => {
  const { limit, offset } = req.query
  if (limit && offset) {
    res.json({
      limit,
      offset
    })
  }
  res.send('No hay parametros')
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
