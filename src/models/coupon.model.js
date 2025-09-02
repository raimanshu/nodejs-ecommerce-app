const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const couponSchema = new Schema({
  // coupon_id: { type: String },
  code: { type: String },
  discountValue: { type: Number },
  minOrderValue: { type: String },
  maxDiscount: { type: Number },
  validFrom: { type: String },
  validTo: { type: String },
  isActive: { type: Boolean },
  usageLimit: { type: Number },
  usageCount: { type: Number },
   attributes: { type: Object, default: {} },
    // created_at: { type: Date, default: Date.now },
    createdBy: { type: String },
    // modified_at: { type: Date, default: Date.now },
    updatedBy: { type: String, default: null },
    deletedAt: { type: Date, default: null },
    deletedBy: { type: String, default: null }
}, {
  timestamps: true,
  // collection: "coupon"
});

module.exports = mongoose.model("Coupon", couponSchema);
