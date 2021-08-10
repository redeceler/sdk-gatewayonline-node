const api = require('../config/api');

const capture = async (tid, token) => {
  try {
    const { data } = await api.put('/v2/capture', {
      params: { tid },
      Headers: { 'x-access-token': token },
    });
    console.log(data);
    return data;
  } catch (e) {
    console.log(e.response.data || e);
    return e.response.data || e;
  }
};

module.exports = {
  capture,
};
