const httpRequest = require("./helpers/httpRequest");

const { error } = require("../../../interface_adapters/logger");

const makeExpressCallback = controller => async (req, res) => {
  const httpRequest = httpRequest(req);
  try {
    const httpResponse = await controller(httpRequest);

    res.set(httpResponse.headers || res.headers);

    res.status(httpResponse.statusCode).send(httpResponse.data);
  } catch (e) {
    res.status(500).send({ error: "An unkown error occurred." });
    error(`[makeExpressCallback]: ${e.message}`);
  }
};

module.exports = makeExpressCallback;
