const Drugs = require("../models/Drugs.model");

module.exports.drugsController = {
  getAllDrugs: async (req, res) => {
    const data = await Drugs.find();
    await res.json(data);
  },
  addDrugs: async (req, res) => {
    const data = await Drugs.create({
      image: req.body.image,
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
    });
    await res.json(data);
  },
  amountPatch: async (req, res) =>{
    try {
      const amount = await Drugs.findByIdAndUpdate(req.body.drugId, {
        inBasket: req.body.amount
      })
      res.json(amount)
    } catch (e) {
      res.json(e.toString())
    }
  }
  
};
