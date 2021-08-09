const api = require('../config/api');

const capture = async (id, token) => {
  try {
    const { data } = await api.post('/v2/capture', {
      param: { tid: id },
      Headers: { 'x-access-token': token },
    });

    return data;
  } catch (e) {
    return e;
  }
};

module.exports = {
  capture,
};
