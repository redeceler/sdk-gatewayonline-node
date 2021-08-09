// const { transactionScheme } = require('../helpers/schemes/transaction.scheme');
const api = require('../config/api');
const { pixShape } = require('../helpers/schemes/pix.scheme');

const loadQRCode = async (payload, token) => {
  try {
    const validation = await pixShape.validate(payload);

    const { data } = await api.post('/v2/pix/loadQRCode', {
      body: validation,
      Headers: { 'x-access-token': token },
    });

    return data;
  } catch (e) {
    return e;
  }
};

const statusTransaction = async (id, token) => {
  try {
    const { data } = await api.post('/v2/statusTransaction', {
      body: { tid: id },
      Headers: { 'x-access-token': token },
    });

    return data;
  } catch (e) {
    return e;
  }
};

const cancelQRCode = async (id, token) => {
  try {
    const { data } = await api.post('/v2/cancelQRCode', {
      body: { txId: id },
      Headers: { 'x-access-token': token },
    });

    return data;
  } catch (e) {
    return e;
  }
};
const cancelPix = async (id, amount, token) => {
  try {
    const { data } = await api.post('/v2/cancelPix', {
      body: {
        txId: id,
        amount,
      },
      Headers: { 'x-access-token': token },
    });

    return data;
  } catch (e) {
    return e;
  }
};

module.exports = {
  loadQRCode,
  statusTransaction,
  cancelQRCode,
  cancelPix,
};
