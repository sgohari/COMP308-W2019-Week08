let mongoose = require('mongoose');

//create a model class
let favouriteSchema = mongoose.Schema({
    FirstName: String,
    LastName:String,
    Age:String       
    },

    {
        collection:"favourites"
    });


    
    module.exports=mongoose.model('favourite', favouriteSchema);