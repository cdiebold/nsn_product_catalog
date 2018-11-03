const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
  res.send("Product Route");
  console.log("I made it to the product route");
});


module.exports = router;
