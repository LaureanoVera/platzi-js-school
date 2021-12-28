const express = require('express')
const faker = require('faker')
const router = express.Router()

router.get('/', (req,res) => {
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

router.get('/filter',(req,res) => {
  res.send("I'm filter")
})

router.get('/:id',(req,res) => {
  const { id } = req.params
  res.json({
    id,
    name: 'ProductThree',
    price: 30
  })
})

module.exports = router
