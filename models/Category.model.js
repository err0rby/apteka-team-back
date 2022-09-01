const mongoose = require('mongoose')

const categorySchema = mongoose.Schema ({
    image: String,
    name: String
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category