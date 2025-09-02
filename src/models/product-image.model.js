const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const product_imageSchema = new Schema({
  // product_image_id: { type: String },
  productId: { type: String },
  imageUrl: { type: String },
  altText: { type: String },
  isMain: { type: Boolean },
   attributes: { type: Object, default: {} },
    // created_at: { type: Date, default: Date.now },
    createdBy: { type: String },
    // modified_at: { type: Date, default: Date.now },
    updatedBy: { type: String, default: null },
    deletedAt: { type: Date, default: null },
    deletedBy: { type: String, default: null }
}, {
  timestamps: true,
  // collection: "product_image"
});

module.exports = mongoose.model("Product_image", product_imageSchema);
