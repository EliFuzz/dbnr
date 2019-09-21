const winston = require("winston");

const { isProduction } = require("../../../globals");

const prodLogger = winston.createLogger({
  transports: [
    new winston.transports.File({
      level: "error",
      dirname: "log",
      filename: "error.log",
      maxsize: 10485760,
      maxFiles: 5
    }),
    new winston.transports.File({
      level: "http",
      dirname: "log",
      filename: "access.log",
      maxsize: 10485760,
      maxFiles: 5
    })
  ]
});

const devLogger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.prettyPrint(),
        winston.format.simple()
      )
    })
  ]
});

module.exports = isProduction() ? prodLogger : devLogger;
