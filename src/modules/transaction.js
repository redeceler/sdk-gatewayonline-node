const axios = require("axios");
const crypto = require("crypto");
const api = require('../config/api');
const { celebrate } = require('celebrate')
const { transactionScheme } = require('../helpers/schemes/transaction.scheme');


export const transaction = async (data) => {

    const validation = celebrate(transactionScheme).validate(data);
}

module.exports = {
    getKey,
    logon
}