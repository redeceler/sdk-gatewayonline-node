const api = require('../config/api');
const { pixShape } = require('../helpers/schemes/pix.scheme');

const loadQRCode = async (payload, token) => {
  try {
    await pixShape.validate(payload);

    const { data } = await api.post('/v2/pix/loadQRCode', payload, {
      headers: { 'x-access-token': token },
    });

    console.log(data);
    return data;
  } catch (e) {
    console.log(e.response?.data || e);
    return e.response?.data || e.message || e;
  }
};

const statusTransaction = async (txId, token) => {
  try {
    const { data } = await api.post('/v2/pix/statusTransaction', { txId }, {
      headers: { 'x-access-token': token },
    });

    console.log(data);
    return data;
  } catch (e) {
    console.log(e.response?.data || e);
    return e.response?.data || e.message || e;
  }
};

const cancelQRCode = async (txId, token) => {
  try {
    const { data } = await api.post('/v2/pix/cancelQRCode', { txId }, {
      headers: { 'x-access-token': token },
    });

    console.log(data);
    return data;
  } catch (e) {
    console.log(e.response?.data || e);
    return e.response?.data || e.message || e;
  }
};

const cancelPix = async (payload, token) => {
  try {
    const { data } = await api.post('/v2/pix/cancelPix', payload, {
      headers: { 'x-access-token': token },
    });

    console.log(data);
    return data;
  } catch (e) {
    console.log(e?.response?.data || e);
    return e.response?.data || e.message || e;
  }
};

module.exports = {
  loadQRCode,
  statusTransaction,
  cancelQRCode,
  cancelPix,
};
