const express = require("express");
const bcrypt = require("bcryptjs");

const router = express.Router();
const Customer = require("../models/customer");

// Get all customers
router.get("/", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.send(customers);
  } catch (err) {
    res.send({ message: err.message });
  }
});

// Login Validation
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingCustomer = await Customer.findOne({ email: email });
    if (!existingCustomer) return res.send({ message: "Not Found" });

    const savedPassword = existingCustomer.password;
    console.log(existingCustomer.password)
    console.log(password)
    bcrypt.compare(password, savedPassword).then((match) => {
      if(!match){
        return res.send({ message: "Wrong Password"})
      } else {
        return res.send({ message: "Login Successful" });
      }
    })
  } catch (err) {
    res.send({ message: err.message });
  }
});

// Create new customer
router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const encryptedPass = await bcrypt.hash(password, 10);

  try {
    const existingCustomer = await Customer.findOne({ email });
    if (existingCustomer) {
      return res.send({ message: "Existing User" });
    }
    const newCustomer = await Customer.create({
      email,
      password: encryptedPass,
    });
    res.send(newCustomer);
  } catch (err) {
    res.send({ message: err.message });
  }
});

// Update a customer 
router.patch("/:id", getCustomer, async (req, res) => {
  if (req.body.name != null) {
    res.customer.name = req.body.name;
  }
  if (req.body.email != null) {
    res.customer.email = req.body.email;
  }
  try {
    const updatedCustomer = await res.customer.save();
    res.send(updatedCustomer);
  } catch (err) {
    res.send({ message: err.message });
  }
});

// Delete a customer
router.delete("/:id", getCustomer, async (req, res) => {
  try {
    await res.customer.remove();
    res.send({ message: "Deleted Customer" });
  } catch (err) {
    res.send({ message: err.message });
  }
});

async function getCustomer(req, res, next) {
  let customer;
  try {
    customer = await Customer.findById(req.params.id);
    if (customer == null) {
      return res.send({ message: "Cannot find customer" });
    }
  } catch (err) {
    return res.send({ message: err.message });
  }

  res.customer = customer;
  next();
}

module.exports = router;
