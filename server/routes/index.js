let express = require('express');
let router = express.Router();

let indxController = require('../controllers/indexController');



/* GET home page. */
//router.get('/', indxController.displayHomePage);

//router.get('/about', indxController.displayAboutPage);

//router.get('/products', indxController.displayProductPage);

//router.get('/services', indxController.displayServicePage);

//router.get('/contact', indxController.displayContactPage);

//router.get('/favourit', indxController.displayFavouritePage);

//Get display the Login Page
//router.get('/login', indxController.displayLoginPage);

//Week06 class with the follow routes.
//Post - processes the login page
router.post('/login', indxController.processLoginPage);
//Get - Display the user registration page
//router.get('/register', indxController.displayRegisterPage);

//POST - process the user registration Page
router.post('/register', indxController.processRegisterPage);
//GET perform user logout
router.get('/logout', indxController.performLogout);


module.exports = router;
