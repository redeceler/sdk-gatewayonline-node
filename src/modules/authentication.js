const axios = require("axios");
const crypto = require("crypto");
const api = require('../config/api');

const getKey = async () => {
    const { data } = await api.get('/v1/getKey');
    return data;
}

const logon = async (user, password) => {
    try {
        if (!user || !password)
            throw new Error('username or password is empty');

        const { publicKey } = await getKey();
        const res = await api.post('/v2/logon', {
            user: user,
            password: crypto.publicEncrypt(publicKey, Buffer.from(password)).toString("base64"),
        });

        return res;
    } catch (e) {
        console.log(e.response.data || e.message);
    }
}

module.exports = {
    getKey,
    logon
}