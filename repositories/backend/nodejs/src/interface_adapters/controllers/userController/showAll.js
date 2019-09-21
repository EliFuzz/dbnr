const userRepository = require("../../storage/userRepositoryMongoDb");
const httpResponse = require("../../../frameworks_drivers//webserver/helpers/httpResponse");

const showAllUsers = require("../../../application_business_rules/use_cases/user/showAllUsers");

const showAll = async () => {
  try {
    const users = await showAllUsers({ userRepository });

    return httpResponse({
      statusCode: 200,
      data: { users }
    });
  } catch (error) {
    return httpResponse({
      statusCode: 400,
      data: "Error occured"
    });
  }
};

module.exports = showAll;
