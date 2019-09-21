const { connectDb } = require("./src/frameworks_drivers/db/mongodb");
const webserver = require("./src/frameworks_drivers/webserver");

connectDb();
webserver();
