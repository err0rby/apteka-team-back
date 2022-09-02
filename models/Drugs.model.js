const mongoose = require("mongoose");

const drugsSchema = mongoose.Schema({
  image: String,
  name: String,
  price: Number,
  discription: String,
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
  },
  inBasket: {
    type: Number,
    default: 0
  }
});

const Drugs = mongoose.model("Drugs", drugsSchema);

module.exports = Drugs;
