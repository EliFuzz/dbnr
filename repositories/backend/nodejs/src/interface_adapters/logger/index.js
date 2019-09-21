const logger = require("../../frameworks_drivers/logger/winston");

module.exports = {
  info: message => logger.info(message),
  warn: message => logger.warn(message),
  error: message => logger.error(message)
};
