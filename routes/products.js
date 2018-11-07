const express = require('express');
const path = require('path');
const ProductController = require('../controllers/product.controller');

const router = express.Router();

router.get('/products/:nsn/:part_number', ProductController.getProductDetail);
router.get('/products', ProductController.getAllProducts);

module.exports = router;
