const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: String, required: true, text: true },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  category: { type: String, index: true },
  description: String,
  createdAt: { type: Date, default: Date.now },
});

//indexes
productSchema.index({ name: "text" });
productSchema.index({ category: 1 });

module.exports = mongoose.model("Product", productSchema);
