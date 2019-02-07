let mongoose = require('mongoose');

//create a model class
let myFavouritSchema = mongoose.Schema({
    FirstName: String,
    LastName:String,
    FavouritCar:String,
    FavouritSport:String       
    },

    {
        collection:"myCollection"
    });

    module.exports=mongoose.model('nasir', myFavouritSchema);