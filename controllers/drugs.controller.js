const Drugs = require("../models/Drugs.model");

module.exports.drugsController = {
  getAllDrugs: async (req, res) => {
    const data = await Drugs.find();
    await res.json(data);
  },
  addDrugs: async (req, res) => {
    const data = await Drugs.create({
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
    });
    await res.json(data);
  },
};
