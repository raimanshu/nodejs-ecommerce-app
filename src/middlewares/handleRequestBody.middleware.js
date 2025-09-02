// const Joi = require('joi');
// const httpStatus = require('http-status');
// const pick = require('../utils/pick.util');
// // const ApiError = require('../utils/ApiError');

// const validate = (schema) => (req, res, next) => {
//   const validSchema = pick(schema, ['params', 'query', 'body']);
//   const object = pick(req, Object.keys(validSchema));
//   const { value, error } = Joi.compile(validSchema)
//     .prefs({ errors: { label: 'key' }, abortEarly: false })
//     .validate(object);

//   if (error) {
//     const errorMessage = error.details.map((details) => details.message).join(', ');
//     return next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
//   }
//   Object.assign(req, value);
//   return next();
// };

// module.exports = validate;



// src/middlewares/handleRequestBody.middleware.js
const express = require('express');

const handleRequestBody = (req, res, next) => {
    const contentType = req.headers && req.headers['content-type'] || '';

    if (contentType.includes('application/json')) {
        return express.json()(req, res, next);
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
        return express.urlencoded({ extended: true })(req, res, next);
    } else if (contentType.includes('text/plain')) {
        let rawData = '';
        req.setEncoding('utf8');

        req.on('data', chunk => {
            rawData += chunk;
        });

        req.on('end', () => {
            req.body = { text: rawData };
            next();
        });

        req.on('error', () => {
            res.status(400).json({ error: 'Error parsing plain text body' });
        });
    } else if (!contentType || contentType === '') {
        // Default to JSON
        return express.json()(req, res, next);
    } else {
        return res.status(415).json({ error: `Unsupported content type: ${contentType}` });
    }
};

module.exports = handleRequestBody;
