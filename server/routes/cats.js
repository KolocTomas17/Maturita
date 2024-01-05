var express = require('express');
var router = express.Router();

/**
 * GET ALL CATS
 * URL: /
 * Method: GET
 */
router.get('/', (req, res) => {
  res.send('GET ALL CATS');
});

/**
 * GET CAT BY ID
 * URL: http://localhost:3000/cats/asdasd
 */
router.get('/:id/:name', (req, res) => {
    //ziskani dane kocky pomoci id
    res.send('GET CATS' + req.params.id + req.params.name);
  });

module.exports = router;
