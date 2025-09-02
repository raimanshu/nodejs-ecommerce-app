const httpStatus = require('http-status');
const User = require('../models/user.model');
const mongoose = require('mongoose');

const createUser = async (userBody) => {
  try {
    // const emailTaken = await User.isEmailTaken(userBody.email);
    // if (emailTaken) {
    //   throw { status: httpStatus.BAD_REQUEST, message: 'Email already taken' };
    // }

    const user = await User.create(userBody);
    return user;
  } catch (error) {
    throw { status: error.status || httpStatus.INTERNAL_SERVER_ERROR, message: error.message || 'Error creating user' };
  }
};

const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw { status: httpStatus.NOT_FOUND, message: 'User not found' };
    }
    return user;
  } catch (error) {
    if (error.kind === 'ObjectId' || !mongoose.Types.ObjectId.isValid(userId)) {
      throw { status: httpStatus.BAD_REQUEST, message: 'Invalid user ID format' };
    }
    throw { status: error.status || httpStatus.INTERNAL_SERVER_ERROR, message: error.message || 'Error fetching user' };
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw { status: httpStatus.NOT_FOUND, message: 'User not found' };
    }
    return user;
  } catch (error) {
    throw { status: error.status || httpStatus.INTERNAL_SERVER_ERROR, message: error.message || 'Error fetching user by email' };
  }
};

const updateUserById = async (userId, updateBody) => {
  try {
    // const user = await User.findById(userId);
    const user = await User.findById(userId);
    if (!user) {
      throw { status: httpStatus.NOT_FOUND, message: 'User not found' };
    }

    if (updateBody.email && await User.isEmailTaken(updateBody.email, userId)) {
      throw { status: httpStatus.BAD_REQUEST, message: 'Email already taken' };
    }

    Object.assign(user, updateBody);
    await user.save();
    return user;
  } catch (error) {
    throw { status: error.status || httpStatus.INTERNAL_SERVER_ERROR, message: error.message || 'Error updating user' };
  }
};

const deleteUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw { status: httpStatus.NOT_FOUND, message: 'User not found' };
    }
    await user.deleteOne();
    return user;
  } catch (error) {
    throw { status: error.status || httpStatus.INTERNAL_SERVER_ERROR, message: error.message || 'Error deleting user' };
  }
};

const queryUsers = async (filter, options = {}) => {
  try {
    const users = await User.find(filter)
      .skip((options.page - 1) * options.limit || 0)
      .limit(options.limit || 10)
      .sort(options.sort || { created_at: -1 });

    return users;
  } catch (error) {
    throw { status: httpStatus.INTERNAL_SERVER_ERROR, message: 'Error querying users' };
  }
};

module.exports = {
  createUser,
  getUserById,
  getUserByEmail,
  updateUserById,
  deleteUserById,
  queryUsers
};
