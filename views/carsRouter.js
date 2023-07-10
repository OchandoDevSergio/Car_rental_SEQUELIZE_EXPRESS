
const router = require('express').Router();

const auth = require('../middlewares/tokenVerify');
// const isAdmin = require();

const carsController = require('../controllers/carsController');


router.get('/', carsController.getAllCars);
//para este sí deberías de ser admin....
router.post('/', auth, carsController.createNewCar);
//para este sí deberías de ser admin....
router.put('/', auth, carsController.modifyCar);
//para este sí deberías de ser admin....
router.delete('/', auth, carsController.deleteCar);

module.exports = router;