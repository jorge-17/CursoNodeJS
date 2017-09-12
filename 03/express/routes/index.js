const express = require('express');
const router = express.Router();

router.use('/', function (req, res, next) {
  res.json({ 
    title: 'Express',
    time: new Date() - req.startedAt 
  }); 
  
});

router.use('/', (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ message: err.message, code: err.status });
});


module.exports = router;
