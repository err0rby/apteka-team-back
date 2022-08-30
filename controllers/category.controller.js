const Category = require("../models/Category.model");

module.exports.categoryController = {
  postCategory: async (req, res) => {
    try {
      const post = await Category.create({
        name: req.body.name,
      });
      res.json(post);
    } catch (e) {
      res.json({error:e});
    }
  },
  getCategory: async (req, res) => {
    const get = await Category.find();
    res.json(get);
  },
};
