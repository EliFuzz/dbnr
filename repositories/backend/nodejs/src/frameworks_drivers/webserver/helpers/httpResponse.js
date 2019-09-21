const httpResponse = ({ headers, statusCode, data }) =>
  Object.freeze({ headers, statusCode, data });

module.exports = httpResponse;
