
const router = require('express').Router();
const auth = require('../middlewares/tokenVerify');

const rentalsController = require('../controllers/rentalsController');

router.get('/', rentalsController.getAllRentals);
router.post('/', auth, rentalsController.createNewRental);
router.put('/', rentalsController.modifyRental);
router.delete('/', rentalsController.deleteRental);

module.exports = router;