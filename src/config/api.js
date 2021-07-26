const axios = require("axios");
const { API_URL } = require("../config/env");

const api = axios.create({
    baseURL: API_URL,
});


module.exports = api;