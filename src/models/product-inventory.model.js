const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const product_inventorySchema = new Schema({
  // product_inventory_id: { type: String },
  productId: { type: String },
  stockQuantity: { type: Number },
  reservedQuantity: { type: Number },
  warehouseLocation: { type: String },
   attributes: { type: Object, default: {} },
    // created_at: { type: Date, default: Date.now },
    createdBy: { type: String },
    // modified_at: { type: Date, default: Date.now },
    updatedBy: { type: String, default: null },
    deletedAt: { type: Date, default: null },
    deletedBy: { type: String, default: null }
}, {
  timestamps: true,
  // collection: "product_inventory"
});

module.exports = mongoose.model("Product_inventory", product_inventorySchema);
