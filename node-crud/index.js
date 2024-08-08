// -------------------------------------
// console.log('Hello there');
// -------------------------------------

const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express();
// const port = process.env.PORT || 3000;

app.use(express.json());

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*'); //LINE 5

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );

  // Request headers you wish to allow
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );
  //ALLOW MULTIPLE ORIGINS
  const allowedOrigins = [
    'http://127.0.0.1:3000',
    'http://localhost:3000',
    'http://127.0.0.1:5000',
    'http://localhost:5000',
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get('/api/products', async (req, res) => {
  // console.log('Hello from Node API');
  // res.send('<h1>Hello from Node API Server Updated !</h1>');
  // res.send('<h1>Products :-</h1>');

  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/products', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  console.log(req.body);
  res.send(req.body);
});

// update a product
app.put('/api/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete a product
app.delete('/api/product/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    'mongodb+srv://umeshjagtap7866:UW3v2tk4Gtp3P1bz@backenddb.al5xeiy.mongodb.net/?retryWrites=true&w=majority&appName=backendDB'
  )
  .then(() => {
    console.log('Connected to database!');
    app.listen(3000, () => {
      console.log('Server is up and running on port ' + 3000);
    });
  })
  .catch(() => {
    console.log('Connection Failed!');
  });

// .
// .
// .
// .
// .
// .

// To get products >> http://localhost:3000/api/products

// Solving CORS issue >> https://medium.com/@fdikmen/node-js-error-has-been-blocked-by-cors-policy-187f6ef1aeeb

// .env file setup >> https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786
