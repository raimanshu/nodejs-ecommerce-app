const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const stackTrace = require('stack-trace');

// Ensure logs directory exists
const logDir = path.resolve(__dirname, '../../logs');
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}

// Custom log levels and colors
const levels = {
    error: 0,
    warn: 1,
    success: 2,
    info: 3,
    debug: 4,
};

const levelColors = {
    error: 'red',
    warn: 'yellow',
    success: 'green',
    info: 'white',
    debug: 'cyan',
};

require('winston').addColors(levelColors);

// Get caller info from your source files only
function getCallerInfo() {
    const traces = stackTrace.get();
    for (const trace of traces) {
        const filePath = trace.getFileName();
        if (filePath && !filePath.includes('node_modules') && !filePath.includes('internal')) {
            const fileName = path.basename(filePath).replace('.js', '');
            const folderName = path.basename(path.dirname(filePath));
            const functionName = trace.getFunctionName() || 'anonymous';
            const lineNumber = trace.getLineNumber();
            return { fileName, folderName, functionName, lineNumber };
        }
    }

    return {
        fileName: 'unknown',
        folderName: 'unknown',
        functionName: 'anonymous',
        lineNumber: 0,
    };
}

// Reusable log formatter
const createCustomFormat = (useColors = false) =>
    format.printf((info) => {
        const { fileName, folderName, functionName, lineNumber } = getCallerInfo();

        const timestamp = useColors ? chalk.green(info.timestamp) : info.timestamp;
        const levelText = info.level.toUpperCase().padEnd(8);
        const levelColor = levelColors[info.level] || 'white';
        const level = useColors ? chalk[levelColor](levelText) : levelText;

        const location = `${folderName}.${fileName}`;
        const coloredLocation = useColors ? chalk.blue(location) : location;

        const func = useColors ? chalk.white(functionName) : functionName;
        const line = useColors ? chalk.white(lineNumber) : lineNumber;
        const message = useColors
            ? chalk[levelColor](info.stack || info.message)
            : info.stack || info.message;

        // const message = useColors
        //     ? chalk.white(info.stack || info.message)
        //     : info.stack || info.message;

        return `${timestamp} | ${level} | ${coloredLocation}:${func}:${line} - ${message}`;
    });

// File transport (rotated, no color)
const fileTransport = new transports.DailyRotateFile({
    dirname: logDir,
    filename: 'app-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    maxSize: '500m',
    maxFiles: '30d',
    zippedArchive: true,
    level: 'debug',
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
        format.errors({ stack: true }),
        createCustomFormat(false)
    ),
});

// Console transport (with color)
const consoleTransport = new transports.Console({
    level: 'debug',
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
        format.errors({ stack: true }),
        createCustomFormat(true)
    ),
});

// Create logger
const logger = createLogger({
    levels,
    level: 'debug',
    transports: [fileTransport, consoleTransport],
    exitOnError: false, // ✅ prevents Winston from exiting when no handlers are defined
    // exceptionHandlers: [], // ✅ optional to leave empty if you're handling manually
    // rejectionHandlers: [], // ✅ optional
});

// Export methods with all levels, including success
module.exports = {
    info: logger.info.bind(logger),
    debug: logger.debug.bind(logger),
    warn: logger.warn.bind(logger),
    error: logger.error.bind(logger),
    success: logger.log.bind(logger, 'success'),
    logger,
};
