// const { transactionScheme } = require('../helpers/schemes/transaction.scheme');
const api = require('../config/api');
const { shape } = require('../helpers/schemes/transaction.scheme');

const transaction = async (payload, token) => {
  try {
    const validation = await shape.validate(payload);

    const transactionAction = await api.post('/v2/transaction', {
      body: validation,
      Headers: { 'x-access-token': token },
    });

    return transactionAction;
  } catch (e) {
    return e;
  }
};

const getStatus = async (id, token) => {
  try {
    const { data } = await api.post('/v1/verify', {
      body: { tid: id },
      Headers: { 'x-access-token': token },
    });

    return data;
  } catch (e) {
    return e;
  }
};

module.exports = {
  transaction,
  getStatus,
};
