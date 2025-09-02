const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  // order_id: { type: String },
  userId: { type: String },
  orderNumber: { type: String },
  totalAmount: { type: Number },
  shippingFee: { type: String },
  discountAmount: { type: Number },
  paymentStatus: { type: String },
  orderStatus: { type: String },
  shippingAddressId: { type: String },
    attributes: { type: Object, default: {} },
    // created_at: { type: Date, default: Date.now },
    createdBy: { type: String },
    // modified_at: { type: Date, default: Date.now },
    updatedBy: { type: String, default: null },
    deletedAt: { type: Date, default: null },
    deletedBy: { type: String, default: null }
}, {
  timestamps: true,
  // collection: "order"
});

module.exports = mongoose.model("Order", orderSchema);
