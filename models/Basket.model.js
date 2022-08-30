const mongoose = require('mongoose')

const basketSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    drugs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Drugs'
    }],
    total: Number
})

const Basket = mongoose.model('Drugs', basketSchema)

module.exports = Basket