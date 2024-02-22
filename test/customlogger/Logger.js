const winston = require('winston');

class Logger {
  constructor() {
    this.logger = winston.createLogger({
      transports: [
        new winston.transports.File({
          filename: './logs/logs.log',
          level: process.env.LOG_LEVEL || 'info' || 'error',
        }),
        new winston.transports.Console({
          level: process.env.LOG_LEVEL || 'info',
          handleExceptions: true,
          format: winston.format.printf(({ level, message }) => {
            const logLevel = winston.format.colorize().colorize(level, `${level.toUpperCase()}`);
            return `[${logLevel}]: ${message}`;
          })
        })
      ]
    });

    this.logger.on("error", (error) => {
      this.logger.error(`An error occurred: ${error.message}`);
    });
  }

  log(level, message) {
    this.logger.log(level, message);
  }

  info(message) {
    this.log('info', message);
  }

  error(message, error) {
    this.logger.error(`${message}: ${error.stack || error.message}`, message);
  }
}

module.exports = Logger;
