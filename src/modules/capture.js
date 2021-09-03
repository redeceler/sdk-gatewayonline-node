const api = require('../config/api');

const capture = async (token, payload) => {
  try {
    const { data } = await api.put(`/v2/capture/${payload.tid}`, payload, {
      headers: { 'x-access-token': token },
    });

    return data;
  } catch (e) {
    return e.response.data || e;
  }
};

module.exports = {
  capture,
};
