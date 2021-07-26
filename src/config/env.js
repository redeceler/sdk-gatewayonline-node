// development or production
const env = "development";

const config = {
    API_URL: env === "development"
        ? "http://52.168.167.13:1211"
        : ""
}

module.exports = config;