const express = require('express');
const router = express.Router();

router.get('/contact', (req, res) => {
  console.log("I made it to the contact route");
});

router.post('/contact', (req, res) => {

});

module.exports = router;
