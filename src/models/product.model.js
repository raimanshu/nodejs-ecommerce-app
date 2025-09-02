const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  // product_id: { type: String },
  name: { type: String },
  slug: { type: String },
  description: { type: String },
  brandId: { type: String },
  categoryId: { type: String },
  price: { type: Number },
  discountPrice: { type: Number },
  sku: { type: String },
  isActive: { type: Boolean },
   attributes: { type: Object, default: {} },
    // created_at: { type: Date, default: Date.now },
    createdBy: { type: String },
    // modified_at: { type: Date, default: Date.now },
    updatedBy: { type: String, default: null },
    deletedAt: { type: Date, default: null },
    deletedBy: { type: String, default: null }
}, {
  timestamps: true,
  // collection: "product"
});

module.exports = mongoose.model("Product", productSchema);
