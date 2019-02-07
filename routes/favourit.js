let express = require('express');
let router = express.Router();
//for using mongo
let mongoose = require('mongoose');

//reference to the db schema
let myFavourit = require('../models/favourits');

/** GET myFavourit list page -READ operations */
router.get('/', (req, res, next)=>{
    myFavourit.find((err, favouriteList)=>{

        if(err){
            return console.error(err);
        }
        else{
           //console.log(favouriteList);
            res.render('favourit/index', {
                title: 'Favourit List',
                favouriteList: favouriteList
            });
        }
    });
});





module.exports = router;