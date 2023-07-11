
const router = require('express').Router();

const auth = require('../middlewares/tokenVerify');
const isAdmin = require('../middlewares/adminroleVerify');

const rentalsController = require('../controllers/rentalsController');

router.get('/', auth, isAdmin, rentalsController.getAllRentals);
router.post('/', auth, rentalsController.createNewRental);
router.put('/', auth, rentalsController.modifyRental);
router.delete('/', auth, isAdmin, rentalsController.deleteRental);

module.exports = router;