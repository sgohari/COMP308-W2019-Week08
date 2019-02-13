let express = require('express');
let router = express.Router();

let indxController = require('../controllers/indexController');


/* GET home page. */
router.get('/', indxController.displayHomePage);

router.get('/about', indxController.displayAboutPage);

router.get('/products', indxController.displayProductPage);

router.get('/services', indxController.displayServicePage);

router.get('/contact', indxController.displayContactPage);

router.get('/favourit', indxController.displayFavouritePage);

module.exports = router;
