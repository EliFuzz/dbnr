const user = ({ id = null, firstName, lastName }) =>
  Object.freeze({
    id,
    firstName,
    lastName
  });

module.exports = user;
