const express = require('express')
const router = express.Router()
const Product = require('../models/product')

router.get('/', async (req, res) => {
  try {
    const products = await Product.find()
    res.send(products)
  } catch (err) {
    res.send({ message: err.message })
  }
})

router.get('/:id', getProduct, (req, res) => {
  res.send(res.product)
})

router.post('/', async (req, res) => {
  const product = new Product({
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
    imageUrl: req.body.imageUrl
  })
  try {
    const newProduct = await product.save()
    res.send(newProduct)
  } catch (err) {
    res.send({ message: err.message })
  }
})

router.patch('/:id', getProduct, async (req, res) => {
  if (req.body.id != null) {
    res.product.id = req.body.id
  }
  if (req.body.name != null) {
    res.product.name = req.body.name
  }
  if (req.body.price != null) {
    res.product.price = req.body.price
  }
  if (req.body.imageUrl != null) {
    res.product.imageUrl = req.body.imageUrl
  }
  try {
    const updatedProduct = await res.product.save()
    res.send(updatedProduct)
  } catch (err) {
    res.send({ message: err.message })
  }
})

router.delete('/:id', getProduct, async (req, res) => {
  try {
    await res.product.remove()
    res.send({ message: 'Deleted Product' })
  } catch (err) {
    res.send({ message: err.message })
  }
})

async function getProduct(req, res, next) {
  let product
  try {
    product = await Product.findById(req.params.id)
    if (product == null) {
      return res.send({ message: 'Cannot find product' })
    }
  } catch (err) {
    return res.send({ message: err.message })
  }

  res.product = product
  next()
}

module.exports = router