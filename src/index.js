const authentication = require("./modules/authentication");
const transaction = require("./modules/transaction");
const capture = require("./modules/capture");
const invoice = require("./modules/invoice");
const pix = require("./modules/pix");

module.exports = {
    authentication,
    transaction,
    capture,
    invoice,
    pix
}