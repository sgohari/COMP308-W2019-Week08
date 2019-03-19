let mongoose = require('mongoose');

//create a model class
let favouriteSchema = mongoose.Schema({
    FirstName: String,
    LastName:String,
    Age:String       
    },

    {
        collection:"tb"
    });


    
    module.exports=mongoose.model('favourite', favouriteSchema);