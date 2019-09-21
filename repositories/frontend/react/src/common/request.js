const axios = require("axios");

const ORIGIN = process.env.ORIGIN_URL || "http://localhost:3000";
const URL = process.env.NODE_ENV === "production" ? "api" : "";
const doRequest = async (method, path, data = {}) => {
  const url = `${ORIGIN}/${URL ? URL + "/" : ""}${path}`;

  try {
    const response = await axios({ method, url, data });

    return response.data;
  } catch (e) {
    console.log(`API error occured: ${url} - ${e.message}`);
  }
};

export const getRequest = path => doRequest("GET", path);
export const postRequest = (path, body) => doRequest("POST", path, body);
