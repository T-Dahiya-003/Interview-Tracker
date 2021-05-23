const mongoose = require('mongoose');
const Company = require('./Companies');
const ExpSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
    img:{
        type:String
        

    },
    branch:{
        type:String,
        
        required: true
    },
    year:{
        type:String,
        required:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company',
        req:true
        
    },
    exp:{
        type:String,
        req:true

    },
    approved:{
        type:Boolean,
        required:true,
        default:false

    }
});
const Exp = mongoose.model('Exp',ExpSchema);
module.exports = Exp;