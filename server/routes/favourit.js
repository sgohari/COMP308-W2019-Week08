let express = require('express');
let router = express.Router();
//for using mongo
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

//reference to passports
let passport = require('passport');

function requiredAuth(req, res, next){
    //checking if the user is logged in
    //console.log(req.user.username);
    if(!req.isAuthenticated()){
      return res.redirect('/login');
    }
 
    next();
  }


let favouriteController=require('../controllers/favourites');
router.get('/', favouriteController.displayFavouriteList);

// GET route for the add page
router.get('/add',favouriteController.displayAddFavourits);

/*Post Route processing the add*/
router.post('/add', favouriteController.processAddFavouritList);

/*GET request display EDIT page */
router.get('/edit/:id', favouriteController.displayEditPage);

/* POST request to update the DB with data from Edit page */
router.post('/edit/:id', favouriteController.proccessEditPage);

/**GET request to perform the delete action */
router.get('/delete/:id', favouriteController.performDelete);

module.exports = router;