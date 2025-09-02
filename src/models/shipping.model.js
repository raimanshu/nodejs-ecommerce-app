const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shippingSchema = new Schema({
  // shipping_id: { type: String },
  orderId: { type: String },
  courierName: { type: String },
  trackingNumber: { type: String },
  status: { type: String },
  shippedAt: { type: Date },
  deliveredAt: { type: Date },
  attributes: { type: Object, default: {} },
    // created_at: { type: Date, default: Date.now },
    createdBy: { type: String },
    // modified_at: { type: Date, default: Date.now },
    updatedBy: { type: String, default: null },
    deletedAt: { type: Date, default: null },
    deletedBy: { type: String, default: null }
}, {
  timestamps: true,
  // collection: "shipping"
});

module.exports = mongoose.model("Shipping", shippingSchema);
