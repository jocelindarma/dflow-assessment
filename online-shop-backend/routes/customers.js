const express = require('express')
const router = express.Router()
const Customer = require('../models/customer')

router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find()
    res.json(customers)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/:id', getCustomer, (req, res) => {
  res.json(res.customer)
})

router.post('/', async (req, res) => {
  const customer = new Customer({
    email: req.body.email,
    password: req.body.password
  })
  try {
    const newCustomer = await customer.save()
    res.status(201).json(newCustomer)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.patch('/:id', getCustomer, async (req, res) => {
  if (req.body.name != null) {
    res.customer.name = req.body.name
  }
  if (req.body.email != null) {
    res.customer.email = req.body.email
  }
  try {
    const updatedCustomer = await res.customer.save()
    res.json(updatedCustomer)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.delete('/:id', getCustomer, async (req, res) => {
  try {
    await res.customer.remove()
    res.json({ message: 'Deleted Customer' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getCustomer(req, res, next) {
  let customer
  try {
    customer = await Customer.findById(req.params.id)
    if (customer == null) {
      return res.status(404).json({ message: 'Cannot find customer' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.customer = customer
  next()
}

module.exports = router