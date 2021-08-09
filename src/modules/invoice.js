// const { transactionScheme } = require('../helpers/schemes/transaction.scheme');
const api = require('../config/api');
const { invoiceShape } = require('../helpers/schemes/invoice.schemce');

const invoice = async (payload, token) => {
  try {
    const validation = await invoiceShape.validate(payload);

    const { data } = await api.post('/v2/pix/boleto', {
      body: validation,
      Headers: { 'x-access-token': token },
    });

    return data;
  } catch (e) {
    return e;
  }
};

const checkTax = async (token) => {
  try {
    const { data } = await api.get('/v2/boleto/tax', {
      Headers: { 'x-access-token': token },
    });

    return data;
  } catch (e) {
    return e;
  }
};

module.exports = {
  invoice,
  checkTax,
};
