const mongoose = require('mongoose');

let Schema = mongoose.Schema
//ObjectId = Schema.ObjectId;




const subjectschema = new Schema({
    semId:{
        type:Schema.Types.ObjectId,
        ref:'Sem',
        required:true,
    },
    subcode:{
        required:true,
        type:String
    },
    subject:{
        required:true,
        type:String
    }
})

module.exports = mongoose.model('Subject', subjectschema)