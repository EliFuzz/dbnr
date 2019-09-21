const httpRequest = require("./httpRequest");

const { error } = require("../../../interface_adapters/logger/");

const makeExpressJsonExpress = controller => async (req, res) => {
  try {
    const request = httpRequest(req);
    const httpResponse = await controller(request);

    res.set(httpResponse.headers || res.headers);
    res.status(httpResponse.statusCode).json(httpResponse.data);
  } catch (e) {
    res.status(500).json({ error: "Error occured" });
    error(`[makeExpressJsonExpress]: ${e.message}`);
  }
};

module.exports = makeExpressJsonExpress;
