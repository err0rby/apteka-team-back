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
    total: {
        type: Number,
        default: 0
    }
})

const Basket = mongoose.model('Basket', basketSchema)

module.exports = Basket