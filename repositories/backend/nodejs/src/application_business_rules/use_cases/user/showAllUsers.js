const showAllUsers = async ({ userRepository }) => await userRepository.read();

module.exports = showAllUsers;
