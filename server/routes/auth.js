var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.send("Gets all students")
});

router.get('/logout', function(req, res, next) {
    res.send("Gets all students")
});

module.exports = router;