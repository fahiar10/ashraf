const mongoose = require('mongoose');

let Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;


const marksschema = new mongoose.Schema({
    sem:{
        required:true,
        type:Number
    },
    semId:{
        required:true,
        type:ObjectId
    },
    sub:{
        required:true,
        type:String
    },
    subId:{
        required:true,
        type:ObjectId
    },
    student:{
        required:true,
        type:String
    },
    studentId:{
        required:true,
        type:ObjectId
    },
    ia:{
        required:true,
        type:Number
    },
    ea:{
        required:true,
        type:Number
    },
    totalMarksPerSubject:{
        required:true,
        type:Number
    }
})

module.exports = mongoose.model('Marks', marksschema)
