const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    login: String,
    password: String,
    wallet: Number,
    basket: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Drugs'
    }]
});

const User = mongoose.model('User', userSchema);
module.exports = User;