const api = require('../config/api');

const capture = async (token, tid) => {
  try {
    const { data } = await api.put(`/v2/capture/${tid}`, {}, {
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
