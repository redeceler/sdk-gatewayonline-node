const authentication = require('./modules/authentication');
const transaction = require('./modules/transaction');
const capture = require('./modules/capture');
const invoice = require('./modules/invoice');
const pix = require('./modules/pix');

const test = 0;

module.exports = {
  authentication,
  transaction,
  capture,
  invoice,
  pix,
  test,
};
