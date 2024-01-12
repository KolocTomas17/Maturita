const Cat = require("../models/cats");

exports.getAllCats = (req, res) => {
    res.send('GET ALL CATS');
  };

  exports.getCatById =  (req, res) => {
    res.send('GET CAT' + req.params.id);
  };
  exports.deleteCat =  (req, res) => {
    res.send('DELETE CAT' + req.params.id);
  };
  exports.updateCat =  (req, res) => {
    res.send('UPDATE CAT' + req.params.id);
  };
  exports.createCat = async (req, res) => {
    try {
      const data = new Cat({
        name: req.body.name,
        legs: req.body.legs,
        color: req.body.color,
      });
      //await - dokavad se to neprovede
      const result = await data.save();
      if (result) {
        return req.status(201).send({
          msg: "Cat created",
          payload: result
        });
      }
      res.status(500).send({
        msg: "Cat was not created"
      });
    } catch (error) {
      res.status(500).send(error);
    }
  };
