const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brandSchema = new Schema({
  // brand_id: { type: String },
  name: { type: String },
  description: { type: String },
    attributes: { type: Object, default: {} },
    // created_at: { type: Date, default: Date.now },
    createdBy: { type: String },
    // modified_at: { type: Date, default: Date.now },
    updatedBy: { type: String, default: null },
    deletedAt: { type: Date, default: null },
    deletedBy: { type: String, default: null }
}, {
  timestamps: true,
  // collection: "brand"
});

module.exports = mongoose.model("Brand", brandSchema);
