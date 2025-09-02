const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  cartId: { type: String },
  userId: { type: String },
    attributes: { type: Object, default: {} },
    // created_at: { type: Date, default: Date.now },
    createdBy: { type: String },
    // modified_at: { type: Date, default: Date.now },
    updatedBy: { type: String, default: null },
    deletedAt: { type: Date, default: null },
    deletedBy: { type: String, default: null }
}, {
  timestamps: true,
  // collection: "cart"
});

module.exports = mongoose.model("Cart", cartSchema);
