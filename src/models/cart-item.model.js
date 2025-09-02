const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cart_itemSchema = new Schema({
  // cart_item_id: { type: String },
  cartId: { type: String },
  productId: { type: String },
  quantity: { type: Number },
  attributes: { type: Object, default: {} },
    // created_at: { type: Date, default: Date.now },
    createdBy: { type: String },
    // modified_at: { type: Date, default: Date.now },
    updatedBy: { type: String, default: null },
    deletedAt: { type: Date, default: null },
    deletedBy: { type: String, default: null }
}, {
  timestamps: true,
  // collection: "cart_item"
});

module.exports = mongoose.model("Cart_item", cart_itemSchema);
