// const { transactionScheme } = require('../helpers/schemes/transaction.scheme');
const api = require('../config/api');
const { invoiceScheme } = require('../helpers/schemes/invoice.schemce');

const invoice = async (payload, token) => {
  try {
    await invoiceScheme.validate(payload);

    const { data } = await api.post('/v2/boleto', payload, {
      headers: { 'x-access-token': token },
    });

    return data;
  } catch (e) {
    console.log(e.response?.data || e);
    return e.response?.data || e.message || e;
  }
};

const checkTax = async (token) => {
  try {
    const { data } = await api.get('/v2/boleto/tax', {
      headers: { 'x-access-token': token },
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
