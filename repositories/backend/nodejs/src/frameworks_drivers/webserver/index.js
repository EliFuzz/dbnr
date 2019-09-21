const express = require("express");
const app = express();

const cors = require("cors");

const { info } = require("../../interface_adapters/logger");

const routes = require("./routes");

const webserver = () => {
  const PORT = process.env.NODE_PORT || 3000;

  app.use(express.json());
  app.use(cors()); // TODO: whitelist

  app.use("/", routes);

  app.listen(PORT, () => {
    info("Server started");
  });
};

module.exports = webserver;
