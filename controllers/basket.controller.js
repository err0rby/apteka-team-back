const User = require("../models/User.model")

module.exports.basketController = {
    getBasket: async (req, res) => {
        try {
            const basket = await User.findById(req.body.userId).populate('basket')
            res.json(basket)
        } catch (e) {
            res.status(401).json(e.toString())
        }
    },
    pathBasket: async (req, res) => {
        try {
            const basket = await User.findByIdAndUpdate(req.body.userId, {
                $push: {basket: req.body.drug}
            }).populate('basket')
            res.json(basket)
        } catch (e) {
            res.status(401).json(e.toString())
        }
    },
    deletBasket: async (req, res) => {
        try {
            const basket = await User.findByIdAndUpdate(req.params.userId, {
                $pull: {basket: req.body.drugId}
            })
            const data = await res.json(basket)
            return data
        } catch (e) {
            res.status(401).json(e.toString())
        }
    }


}