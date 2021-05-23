const mongoose = require('mongoose');
const Topic = require('./Topics');
const QuestionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
    linkto:{
        type:String,
        required: true

    },
    topics:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Topic',
        required: true
    },
    approved:{
        type:Boolean,
        required:true,
        default:false

    }
});
const Question = mongoose.model('Question',QuestionSchema);
module.exports = Question;