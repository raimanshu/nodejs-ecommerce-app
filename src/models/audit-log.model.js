const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const audit_logSchema = new Schema({
  // audit_log_id: { type: String },
  entityType: { type: String },
  entityId: { type: String },
  action: { type: String },
  userId: { type: String },
  oldData: { type: Schema.Types.Mixed },
  newData: { type: Schema.Types.Mixed },
    attributes: { type: Object, default: {} },
    // created_at: { type: Date, default: Date.now },
    createdBy: { type: String },
    // modified_at: { type: Date, default: Date.now },
    updatedBy: { type: String, default: null },
    deletedAt: { type: Date, default: null },
    deletedBy: { type: String, default: null }
}, {
  timestamps: true,
  // collection: "audit_log"
});

module.exports = mongoose.model("Audit_log", audit_logSchema);
