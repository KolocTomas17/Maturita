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

  router.delete('/:id', (req, res) => {
    res.send('DELETE CAT' + req.params.id);
  });

  router.put('/:id', (req, res) => {
    res.send('Update CAT ' + req.params.id);
  });

  router.post('/', (req, res) => {
    res.send('CREATED CAT ');
  });
  
  

module.exports = router;
