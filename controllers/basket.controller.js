const Basket = require("../models/Basket.model")

module.exports.basketController = {
    getBaskets: async (req, res) => {
        const allBaskets = await Basket.find()
        res.json(allBaskets)
    },
    postBasket: async (req, res) => {
        const {user, total} = req.body
        const newBasket = await Basket.create({
            user,
            total
        })
        res.json(newBasket)
    }
}