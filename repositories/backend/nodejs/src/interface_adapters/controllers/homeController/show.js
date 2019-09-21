const httpResponse = require("../../../frameworks_drivers//webserver/helpers/httpResponse");

const show = () =>
  httpResponse({
    statusCode: 200,
    data: {
      message: "Home API"
    }
  });

module.exports = show;
