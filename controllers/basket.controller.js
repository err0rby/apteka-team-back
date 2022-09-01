const Basket = require("../models/Basket.model")

module.exports.basketController = {
    getBaskets: async (req, res) => {
        const allBaskets = await Basket.find().populate('drugs')
        res.json(allBaskets)
    },
    getBasketById: async (req, res) => {
        try {
            const basket = await Basket.find({user: req.body.userId}).populate('drugs')
            res.json(basket)
        } catch (e) {
            return res.status(401).json(e.toString())
        }
    },
    patchBasket: async (req, res) => {
        try {
            const newBasket = await Basket.findByIdAndUpdate(req.body.basketId, {
                $push: {drugs: req.body.drugId}
            }).populate('drugs')
            res.json(newBasket)
        } catch (e) {
            return res.status(401).json(e.toString())
        }
    }

}