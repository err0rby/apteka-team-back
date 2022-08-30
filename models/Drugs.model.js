const mongoose = require("mongoose");

const drugsSchema = mongoose.Schema({
  name: String,
  price: Number,
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
  },
});

const Drugs = mongoose.model("Drugs", drugsSchema);

module.exports = Drugs;
