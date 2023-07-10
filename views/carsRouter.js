
const router = require('express').Router();

const auth = require('../middlewares/tokenVerify');
const isAdmin = require('../middlewares/adminroleVerify');

const carsController = require('../controllers/carsController');


router.get('/', carsController.getAllCars);
//para este sí deberías de ser admin....
router.post('/', auth, isAdmin, carsController.createNewCar);
//para este sí deberías de ser admin....
router.put('/', auth, isAdmin, carsController.modifyCar);
//para este sí deberías de ser admin....
router.delete('/', auth, isAdmin, carsController.deleteCar);

module.exports = router;