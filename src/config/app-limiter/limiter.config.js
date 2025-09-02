// src/middlewares/rateLimiter.js
const rateLimit = require('express-rate-limit');

// Example: Limit to 5 requests per minute per IP for login
const loginLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 5, // Limit each IP to 5 requests per windowMs
    message: 'Too many login attempts from this IP, please try again after a minute.',
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false,  // Disable `X-RateLimit-*` headers
});

const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000,
  message: 'Too many requests, please try again later.',
});

module.exports = {
    loginLimiter,
    globalLimiter
};
