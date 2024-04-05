var express = require('express');
var router = express.Router();


const podnikatelsController = require("../controllers/podnikatels");

router.get('/', podnikatelsController.getAllPodnikatels);

// : ocekavame parametr, za ktery se dosazuje, muze se menit
router.get('/:id', podnikatelsController.getPodnikatelById);

router.delete('/:id', podnikatelsController.deletePodnikatel);

router.put('/:id', podnikatelsController.updatePodnikatel);

router.post('/', podnikatelsController.createPodnikatel);



module.exports = router;
