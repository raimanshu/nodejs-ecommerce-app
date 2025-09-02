// External Modules 
const express = require('express');
const helmet = require('helmet');
// const xss = require('xss-clean'); depricated
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
const cors = require('cors');
const passport = require('passport');
const authLimiter = require('./config/app-limiter/limiter.config');



const logger = require('./config/logger');


// Local Modules 
const handleRequestBody = require('./middlewares/handleRequestBody.middleware');
const routes = require('./routes/v1');

app = express();

// set security HTTP headers
app.use(helmet());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize user input and prevent Cross-Site Scripting (XSS) attacks.
// app.use(xss());
// prevent NoSQL injection attacks on MongoDB.
// app.use(mongoSanitize());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
// Handle preflight (OPTIONS) requests globally
// app.options('/*', cors());

// jwt authentication
// app.use(passport.initialize());
// passport.use('jwt', jwtStrategy);


// limit repeated failed requests to auth endpoints
if (process.env.NODE_ENV === 'production') {
    app.use('/v1/auth', authLimiter.loginLimiter);
}





app.get(['/', '/status', '/health', '/index'], (req, res, next) => {
    const path = req.path;
    logger.debug("path=========", typeof (path));
    if (['/', '/status', '/health', '/index'].includes("/status")) {
        res.send('Welcome to E-Commerce App! This is the home page showing server is working fine. Good to go!!');
    } else {
        res.send('Health OK');
    }
    next();
});




app.use(handleRequestBody);

app.use("/v1", routes);

// app.use((req, res, next) => {
//     logger.debug("First Middleware");
//     next();
// });


module.exports = app;