let express = require('express');
let router = express.Router();
//for using mongo
let mongoose = require('mongoose');

//reference to the db schema
let myFavourit = require('../models/favourits');

/** GET myFavourit list page -READ operations */
router.get('/', (req, res, next)=>{
    myFavourit.find((err,fvList)=>{

        if(err){
            return console.error(err);
        }
        else{
            console.log(fvList);
            res.render('myFavourit/index', {
                title: 'Favourit List',
                fvList: fvList
            });
        }
    });
});





module.exports = router;