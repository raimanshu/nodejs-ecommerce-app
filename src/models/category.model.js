const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  // category_id: { type: String },
  name: { type: String },
  slug: { type: String },
  parentCategoryId: { type: String },
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
  // collection: "category"
});

module.exports = mongoose.model("Category", categorySchema);
