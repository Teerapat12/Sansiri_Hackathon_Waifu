const express = require('express');
const router = express.Router();



router.get('/search', (req, res) => {
  res.status(200).send("Hello Express")
});

router.use('/projects', require('./projectRoutes'));

router.use('/camps', require('./campRoutes'));

router.use('/workers', require('./workerRoutes'));
router.use('/followers', require('./followerRoutes'));




module.exports = router;