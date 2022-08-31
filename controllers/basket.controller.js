const Basket = require("../models/Basket.model")

module.exports.basketController = {
    getBaskets: async (req, res) => {
        const allBaskets = await Basket.find()
        res.json(allBaskets)
    },

}