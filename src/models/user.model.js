// models/user.model.js
const mongoose = require("mongoose");
const toJSON = require('../utils/to-json.util')


const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, trim: true, unique: true },
    name: { type: String, trim: true },
    email: { type: String, trim: true, unique: true, default: null },
    password: { type: String },
    contactNumber: { type: Number },
    isActive: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: false },
    attributes: { type: Object, default: {} },
    // created_at: { type: Date, default: Date.now },
    createdBy: { type: String },
    // modified_at: { type: Date, default: Date.now },
    updatedBy: { type: String, default: null },
    deletedAt: { type: Date, default: null },
    deletedBy: { type: String, default: null }

}, {
    timestamps: true,
    // collection: "user"
});


// add plugin that converts mongoose to json
userSchema.plugin(toJSON);
// userSchema.plugin(paginate);



userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
    const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
    return !!user;
};

module.exports = mongoose.model("User", userSchema, 'users');