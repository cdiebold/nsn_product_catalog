const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/products', (req, res) => {
  res.render("product-index", { path: '/products'});
  console.log("I made it to the product route");
});


module.exports = router;
