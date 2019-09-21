const userEntity = require("../../../enterprise_business_rules/entities/user");

const createUser = async ({ userRepository }, firstName, lastName) => {
  const user = userEntity({ firstName, lastName });

  return userRepository.create(user);
};

module.exports = createUser;
