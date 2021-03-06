// app/models/user.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var classInfo = mongoose.Schema({

    local            : {
        name        : String,
        classLimit     : Number,
        date	 : Date,
        time: Number
    }

});

// create the model for users and expose it to our app
module.exports = mongoose.model('Class', classInfo);
