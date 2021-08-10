var NodeRSA = require("node-rsa");
const api = require('../config/api');

var key = new NodeRSA();

key.setOptions({
    encryptionScheme: "pkcs1"
});

const getKey = async () => {
    const { data } = await api.get('/v1/getKey');
    return data;
};

const logon = async (user, password) => {
    try {
        if (!user || !password) throw new Error('username or password is empty');

        const { publicKey } = await getKey();
        key.importKey(publicKey, "pkcs8-public");
        const encryptedPassword = key.encrypt(password, "base64");

        const { data } = await api.post('/v1/logon', {
            user,
            password: encryptedPassword,
        });

        console.log(data);
        return data;
    } catch (e) {
        return e.response.data || e;
    }
};

module.exports = {
    getKey,
    logon,
};
