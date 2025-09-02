const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const order_itemSchema = new Schema({
  // order_item_id: { type: String },
  orderId: { type: String },
  productId: { type: String },
  quantity: { type: Number },
  unitPrice: { type: Number },
  totalPrice: { type: Number },
   attributes: { type: Object, default: {} },
    // created_at: { type: Date, default: Date.now },
    createdBy: { type: String },
    // modified_at: { type: Date, default: Date.now },
    updatedBy: { type: String, default: null },
    deletedAt: { type: Date, default: null },
    deletedBy: { type: String, default: null }
}, {
  timestamps: true,
  // collection: "order_item"
});

module.exports = mongoose.model("Order_item", order_itemSchema);
