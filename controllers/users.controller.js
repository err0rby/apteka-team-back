const User = require('../models/User.model');
module.exports.userController = {
    addUser: async (req, res) => {
        try {
            const { login, password, wallet } = req.body;
            const data = await User.create({
                login, password, wallet
            });
            res.json(data);
        } catch (error) {
            res.json(error)
        }
    },

    getUser: async (req, res) => {
        try {
            const data = User.find({});
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },
}