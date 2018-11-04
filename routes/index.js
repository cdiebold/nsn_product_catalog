const express = require('express');
const path = require('path');
const HomeController = require('../controllers/home.controller');

const router = express.Router();

router.get('/', HomeController.getHomePage);


module.exports = router;
