const express = require('express');
const router = express.Router();

router.get('/quote', (req, res) => {
  console.log("I made it to the quote route");
});

router.post('/quote', (req, res) => {

});

module.exports = router;
