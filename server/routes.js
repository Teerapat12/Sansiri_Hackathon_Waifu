const express = require('express');
const router = express.Router();



router.get('/search', (req, res) => {
  res.status(200).send("Hello Express")
});


module.exports = router;