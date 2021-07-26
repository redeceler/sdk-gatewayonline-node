const authentication = require("./modules/authentication");
const sell = require("./modules/sell");
const capture = require("./modules/capture");


module.exports = {
    authentication: authentication,
    sell: sell,
    capture: capture
}