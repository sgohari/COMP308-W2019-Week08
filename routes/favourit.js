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

// GET route for the add page

router.get('/add',(req, res, next)=>{

    res.render('favourit/add', {
        title: 'Add new Favourites'
    });

});

/*Post Route */
router.post('/add',(req, res, next)=>{

    console.log(req.body)

    let newFavourites = myFavourit({
        "FirstName": req.body.firstName,
        "LastName": req.body.lastName,
        "Age": req.body.age
    });
    
    myFavourit.create(newFavourites, (err, myFavourit)=>{

        if(err){
            console.log(err);
            res.end(err);
        }else{

            //refresh favorite list
            res.redirect('/favourite-List');
        }
    });
});

/*GET request display EDIT page */
router.get('/edit/:id', (req, res, next)=>{

    let id=req.params.id;
    //console.log(id);
    myFavourit.findById(id,(err, fvObject)=>{

        if(err){
            console.log(err);
            res.end(err);
        }else{
            //show edit view 
            res.render('favourit/edit',{
                title:'Edit Information',
                favorite: fvObject
                
            });
        }
    });

});

module.exports = router;