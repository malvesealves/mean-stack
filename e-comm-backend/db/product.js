const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  shortDescription: String,
  purchasePrice: Number,
  sellingPrice: Number,
  images: Array(String),
  categoryId: { type: Schema.Types.ObjectId, ref: "categories" },
});

const Product = mongoose.model("products", productSchema);
module.exports = Product;
