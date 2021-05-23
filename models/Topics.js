const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      imgurl:{
        type:String
      },
      date: {
        type: Date,
        default: Date.now
      }
});

const Topic = mongoose.model('Topic',TopicSchema);
module.exports = Topic;