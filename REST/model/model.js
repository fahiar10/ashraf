const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    usn:{
        required:true,
        type:String
    },
    age: {
        required: true,
        type: Number
    }
})

const semschema = new mongoose.Schema({
    sem:{
        required:true,
        type:Number
    }
})
const subjectschema = new mongoose.Schema({
    semId:{
        required:true,
        type:String
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
const studentschema = new mongoose.Schema({
    semId:{
        required:true,
        type:String
    },
    usn:{
        required:true,
        type:String
    },
    name:{
        required:true,
        type:String
    }
})

const marksschema = new mongoose.Schema({
    semId:{
        required:true,
        type:String
    },
    subId:{
        required:true,
        type:String
    },
    studentId:{
        required:true,
        type:String
    },
    ia:{
        required:true,
        type:Number
    },
    ea:{
        required:true,
        type:Number
    },
    total:{
        required:true,
        type:Number
    }
})

module.exports = mongoose.model('Data', dataSchema)
// module.exports = mongoose.model('Result', {semschema,subjectschema,studentschema,marksschema})

// module.exports = mongoose.model('Sem', semschema)
// module.exports = mongoose.model('Subject', subjectschema)
// module.exports = mongoose.model('Student', studentschema)
// module.exports = mongoose.model('Marks', marksschema)

