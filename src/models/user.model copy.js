


const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({

    // name: {
    //     type: String,
    //     required: true,
    // },
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true,
    // },
    // password: {
    //     type: String,
    //     required: true,
    // },
    // role: {
    //     type: String,
    //     enum: ["user", "admin"],
    //     default: "user",
    // },

        //  user_id: {
        //         type: String,
        //         required: true,
        //         unique: true,
        //         trim: true
        //     },
            username: {
                type: String,
                required: false,
                unique: true,
                trim: true
            },
                name: {
                type: String,
                // required: true,
                trim: true
                },
                mail:{
                type: String,
                // required: true,
                unique: true,
                trim: true
                },

                password:{
                type: String,
                // required: true,
                }, 
                contact_number: {
                    type: Number,
                    required: false
                },
                is_active : {
                    type: Boolean,
                    default: true
                },
                is_verified:{
                    type: Boolean,
                    default: false
                },
                attributes: {
                    type: Object
                },
                created_at : {
                    type: Date,
                    default: Date.now,
                    // required: true
                },
                created_by: {
                    type: String,
                    // required: true
                },
                modified_at: {
                    type: Date,
                    default: Date.now,
                    required: false
                },
                modified_by:{
                    type: String,
                    required: false
                },
                deleted_at: {
                    type: Date,
                    default: Date.now,
                    required: false
                },
                deleted_by: {
                    type: String,
                    required: false
                }
});

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);
userSchema.plugin(paginate);

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
};

/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
userSchema.methods.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

/**
 * @typedef User
 */
const User = mongoose.model('User', userSchema, 'user');

module.exports = User;
