const Podnikatel = require("../models/podnikatels");

exports.getAllPodnikatels = async (req, res) => {
  try {
      const result = await Podnikatel.find();
      if (result && result.length !== 0) {
        return res.status(200).send({
          msg: "Podnikatels found!",
          payload: result,
        });
      }
      res.status(404).send({ msg: "Podnikatels not found"});
  } catch (error) {
    res.status(500).send(error);
  }
  };
 
  exports.getPodnikatelById = async (req, res) => {
    try {
      const result = await Podnikatel.findById(req.params.id);
      if (result) {
        return res.status(200).send({
          msg: "Podnikatel found!",
          payload: result,
        });
      }
      res.status(404).send({ msg: "Podnikatel not found"});
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  exports.deletePodnikatel = async (req, res) => {
    try {
      const result = await Podnikatel.findByIdAndDelete(req.params.id);
      if (result) {
        return res.status(200).send({
          msg: "Podnikatel deleted!",
        });
      }
      res.status(500).send("Something went wrong :(");
    } catch (error) {
      res.status(500).send(error);
    }
  };

  exports.updatePodnikatel = async (req, res) => {
    try {
      const data = ({
        name: req.body.name,
        age: req.body.age,
        company_name: req.body.company_name,
        money: req.body.money,
      });

      const result = await Podnikatel.findByIdAndUpdate(req.params.id, data);
      if (result) {
        return res.status(200).send({
          msg: "Podnikatel updated",
          payload: result
        });
      }
      res.status(500).send({
        msg: "Podnikatel was not updated"
      });
    } catch (error) {
      res.status(500).send(error);
    }
  };

  exports.createPodnikatel = async (req, res) => {
    try {
      const data = new Podnikatel({
        name: req.body.name,
        age: req.body.age,
        company_name: req.body.company_name,
        money: req.body.money,
      });
      //await - dokavad se to neprovede
      const result = await data.save();
      if (result) {
        return res.status(201).send({
          msg: "Podnikatel created",
          payload: result
        });
      }
      res.status(500).send({
        msg: "Podnikatel was not created"
      });
    } catch (error) {
      res.status(500).send(error);
    }
  };
