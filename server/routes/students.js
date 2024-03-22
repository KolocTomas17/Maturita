var express = require('express');
var router = express.Router();


const studentsController = require("../controllers/students");

router.get('/', studentsController.getAllStudents);

// : ocekavame parametr, za ktery se dosazuje, muze se menit
router.get('/:id', studentsController.getStudentById);

router.delete('/:id', studentsController.deleteStudent);

router.put('/:id', studentsController.updateStudent);

router.post('/', studentsController.createStudent);



module.exports = router;
