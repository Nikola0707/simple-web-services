let mongoose = require('mongoose');

let postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'Category'
      }
})

module.exports = mongoose.model("Post", postSchema);