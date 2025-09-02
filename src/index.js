// External Module
const mongoose = require('mongoose');

// Local Module 
const config = require("./config/app.config");
const app = require("./app");
const logger = require("./config/logger");


let server;
// Connect to MongoDB and Start Express Server
mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  logger.info('Connected to MongoDB');
  server = app.listen(config.env.PORT, () => {
    logger.debug(`Listening to port ${config.env.PORT}`);
  });
}).catch((err) => {
  console.error("MongoDB connection failed:", err.message);
  process.exit(1);
});

// Handle Server Shutdown Handler
const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

// Handle Unexpected Errors
const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

// Handle Attach Process-Level Handlers
process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

// const PORT = 3002;
// app.listen(PORT, () => {
//   logger.debug(`Server running on address http://${config.env.DB_HOST}:${config.env.PORT}`);
// });

logger.debug(config.env.PORT);
logger.debug(config.mongoose.url);


// Handle SIGTERM Signal (SIGTERM is a termination signal (e.g., sent by kill or from cloud platforms during shutdown).)
process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});


