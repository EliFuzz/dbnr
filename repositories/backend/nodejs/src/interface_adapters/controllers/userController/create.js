const userRepository = require("../../storage/userRepositoryMongoDb");
const httpResponse = require("../../../frameworks_drivers//webserver/helpers/httpResponse");

const createUser = require("../../../application_business_rules/use_cases/user/create");

const create = async request => {
  try {
    const { firstName, lastName } = request.body;

    const user = await createUser({ userRepository }, firstName, lastName);

    return httpResponse({
      statusCode: 200,
      data: { user }
    });
  } catch (error) {
    return httpResponse({
      statusCode: 400,
      data: `UserController: ${error.message}`
    });
  }
};

module.exports = create;
