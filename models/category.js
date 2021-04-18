let mongoose = require('mongoose');

let categoriesSchema = mongoose.Schema({
    title: {
        type: String,
        require: ['Please provide title of the category!']
    }
})

module.exports = mongoose.model("Category", categoriesSchema);