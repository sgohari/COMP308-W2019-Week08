let mongoose = require('mongoose');

//create a model class

let myFavouritSchema = mongoose.Schema({
    firstName: String,
    lastName:String,
    favouritCar:String,
    favouritSubject:String        
    },
    {
        collection:"myFavourit"
    });

    module.exports=mongoose.model('myFavourit', myFavouritSchema);