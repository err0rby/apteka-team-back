const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    login: String,
    password: String,
    wallet: Number,
});

const User = mongoose.model('User', userSchema);
module.exports = User;