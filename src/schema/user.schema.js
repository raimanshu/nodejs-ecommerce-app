// const Joi = require('joi');
// const { password, objectId } = require('./custom.validation');

// const createUser = {
//   body: Joi.object().keys({
//     email: Joi.string().required().email(),
//     password: Joi.string().required().custom(password),
//     name: Joi.string().required(),
//     role: Joi.string().required().valid('user', 'admin'),
//   }),
// };

// const getUsers = {
//   query: Joi.object().keys({
//     name: Joi.string(),
//     role: Joi.string(),
//     sortBy: Joi.string(),
//     limit: Joi.number().integer(),
//     page: Joi.number().integer(),
//   }),
// };

// const getUser = {
//   params: Joi.object().keys({
//     userId: Joi.string().custom(objectId),
//   }),
// };

// const updateUser = {
//   params: Joi.object().keys({
//     userId: Joi.required().custom(objectId),
//   }),
//   body: Joi.object()
//     .keys({
//       email: Joi.string().email(),
//       password: Joi.string().custom(password),
//       name: Joi.string(),
//     })
//     .min(1),
// };

// const deleteUser = {
//   params: Joi.object().keys({
//     userId: Joi.string().custom(objectId),
//   }),
// };

// module.exports = {
//   createUser,
//   getUsers,
//   getUser,
//   updateUser,
//   deleteUser,
// };


// schemas/user.schema.js
const Joi = require("joi");

const userValidationSchema = Joi.object({
    username: Joi.string().trim().optional(),
    name: Joi.string().trim().optional(),
    mail: Joi.string().email().trim().required(),
    password: Joi.string().min(6).required(),
    contact_number: Joi.number().optional(),
    created_by: Joi.string().optional(),
});

module.exports = {
    userValidationSchema,
};
