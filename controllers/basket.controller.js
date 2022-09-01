const User = require("../models/User.model")

module.exports.basketController = {
    getBasket: async (req, res) => {
        try {
            const basket = await User.findById(req.body.userId).populate('basket')
            res.json(basket)
        } catch (e) {
            res.status(401).json(e.toString())
        }
    }

}