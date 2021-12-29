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
      image: faker.image.sports()
    })
  }
  res.json(products)
})

router.get('/filter',(req,res) => {
  res.send("I'm filter")
})

router.get('/:id',(req,res) => {
  const { id } = req.params
  if (id == '999') {
    res.status(404).json({
      id,
      name: 'ProductThree',
      price: 30
    })
  } else {
    res.status(200).json({
      id,
      name: 'ProductThree',
      price: 30
    })
  }
})

router.post('/', (req,res) => {
  const body = req.body
  res.status(201).json({
    message: 'created',
    data: body
  })
})

router.patch('/:id',(req, res) => {
  const body = req.body
  const { id } = req.params
  res.json({
    message: 'updated',
    data: body,
    id
  })
})

router.delete('/:id',(req, res) => {
  const { id } = req.params
  res.json({
    message: 'deleted',
    id
  })
})

module.exports = router
