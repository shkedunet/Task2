const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  description: String,
  link: String,
  img: String,
  price: Number,
  rating: Number,
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
