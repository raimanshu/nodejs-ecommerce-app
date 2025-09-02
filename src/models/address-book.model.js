const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const address_bookSchema = new Schema({
  // address_book_id: { type: String },
  userId: { type: String },
  addressLine1: { type: String },
  addressLine2: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  zipCode: { type: String },
  isDefault: { type: Boolean },
  attributes: { type: Object, default: {} },
  // created_at: { type: Date, default: Date.now },
  createdBy: { type: String },
  // modified_at: { type: Date, default: Date.now },
  updatedBy: { type: String, default: null },
  deletedAt: { type: Date, default: null },
  deletedBy: { type: String, default: null }
}, {
  timestamps: true,
  // collection: "address_book"
});

module.exports = mongoose.model("Address_book", address_bookSchema);
