const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  // review_id: { type: String },
  userId: { type: String },
  productId: { type: String },
  rating: { type: Number },
  comment: { type: String },
   attributes: { type: Object, default: {} },
    // created_at: { type: Date, default: Date.now },
    createdBy: { type: String },
    // modified_at: { type: Date, default: Date.now },
    updatedBy: { type: String, default: null },
    deletedAt: { type: Date, default: null },
    deletedBy: { type: String, default: null }
}, {
  timestamps: true,
  // collection: "review"
});

module.exports = mongoose.model("Review", reviewSchema);
