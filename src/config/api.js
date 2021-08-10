const axios = require("axios");
const { API_URL } = require("../config/env");

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json"
    }
});


module.exports = api;