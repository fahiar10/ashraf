const mongoose = require('mongoose');



const semschema = new mongoose.Schema({
    sem:{
        required:true,
        type:Number
    }
})

module.exports = mongoose.model('Sem', semschema)