// const { transactionScheme } = require('../helpers/schemes/transaction.scheme');
const api = require('../config/api');
const { shape } = require('../helpers/schemes/transaction.scheme');

const transaction = async (payload, token) => {
    try {
        const validation = await shape.validate(payload);
        const { data } = await api.post('/v2/transaction', payload, {
            headers: { 'x-access-token': token },
        });

        return data;
    } catch (e) {
        return e.response.data || e;
    }
};

const getStatus = async (tId, token) => {
    try {
        const { data } = await api.post('/v1/verify', { tid: tId }, {
            headers: {
                'x-access-token': token
            }
        });

        return data
    } catch (e) {
        return e.response.data || e;
    }
};

module.exports = {
    transaction,
    //getStatus,
};
