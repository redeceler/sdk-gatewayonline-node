const axios = require("axios");
const crypto = require("crypto");
const api = require('../config/api');

const getKey = async () => {
    const { data } = await api.get('/v1/getKey');
    return data;
}

const logon = async (username, password) => {
    try {
        if (!username || !password)
            throw new Error('username or password is empty');

        const data = await getKey();
        const res = await api.post('/v1/logon', {
            username,
            password: crypto.publicEncrypt(data.publicKey, password)
        });

        return res;
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    getKey,
    logon
}