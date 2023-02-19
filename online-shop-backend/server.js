import express from 'express';
import mongoose from 'mongoose';
import PRODUCTS from './sampledata';

require('dotenv').config();

const mongoose = require('mongoose');
const mongoString = process.env.MONGO_URI;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.get('api/products', (red, res) => {
    res.send(PRODUCTS);
})

app.use(express.json());

app.listen(5000, () => {
    console.log(`Server Started at ${5000}`)
})

