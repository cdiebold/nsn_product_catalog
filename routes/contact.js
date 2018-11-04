const express = require('express');
const path = require('path');
const ContactController = require('../controllers/contact.controller');
const router = express.Router();


router.get('/contact', ContactController.getContactPage);

router.post('/contact', ContactController.postComment);

module.exports = router;
