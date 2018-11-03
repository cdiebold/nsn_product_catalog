const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log("I made it to the home route");
});


module.exports = router;
