const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  // payment_id: { type: String },
  orderId: { type: String },
  paymentMethod: { type: String },
  paymentReference: { type: String },
  amount: { type: Number },
  status: { type: String },
  paidAt: { type: String },
   attributes: { type: Object, default: {} },
    // created_at: { type: Date, default: Date.now },
    createdBy: { type: String },
    // modified_at: { type: Date, default: Date.now },
    updatedBy: { type: String, default: null },
    deletedAt: { type: Date, default: null },
    deletedBy: { type: String, default: null }
}, {
  timestamps: true,
  // collection: "payment"
});

module.exports = mongoose.model("Payment", paymentSchema);
