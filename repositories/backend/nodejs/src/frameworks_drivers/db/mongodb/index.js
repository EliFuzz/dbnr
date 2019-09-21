const mongoose = require("mongoose");

const { info, error } = require("../../../interface_adapters/logger");

const userModel = require("./models/user");

const connectDb = async () => {
  try {
    const MONGO_PORT = process.env.MONGO_PORT || 27017;
    const MONGO_DB = process.env.MONGO_DB || "mongodb";
    const MONGO_DB_NAME = process.env.MONGO_DB_NAME || "dbnr";
    await mongoose.connect(
      `mongodb://${MONGO_DB}:${MONGO_PORT}/${MONGO_DB_NAME}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    info("MongoDB started");
  } catch (e) {
    error(`MongoDB crashed: ${e.message}`);
  }
};

mongoose.model("User", new mongoose.Schema(userModel()));

module.exports = {
  mongoose,
  connectDb
};
