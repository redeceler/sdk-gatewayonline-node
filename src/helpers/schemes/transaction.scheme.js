const { celebrate, Joi, errors, Segments } = require('celebrate');

module.exports = {
    transactionScheme: {
        pan: Joi.string().creditCard().required(),
        cardholderName: Joi.string().required(),
        expirationDate: Joi.string().required(),
        cvvStatus: Joi.string().required(),
        cvv: Joi.number().required(),
        brand: Joi.string().required(),
        amount: Joi.number().required(),
        date: Joi.date(),
        paymentType: Joi.string().required(),
        installments: Joi.number().required(),
        site: Joi.string().required(),
        splitMode: Joi.boolean(),
        sellerChannel: Joi.string().required(),
        productsCategory: Joi.string().required(),
        customer: Joi.object({
            gender: Joi.string().valid("M", "F").required(),
            login: Joi.string().required(),
            name: Joi.string().required(),
            ddd: Joi.string().required(),
            phone: Joi.string().required(),
            email: Joi.string().required(),
            documentType: Joi.string().valid("CPF", "CNPJ").required(),
            document: Joi.string().required(),
            birthDate: Joi.string().required(),
            ip: Joi.string().required(),
            fingerPrint: Joi.string().required(),
            billing: Joi.object({
                street: Joi.string().required(),
                number: Joi.string().required(),
                neighborhood: Joi.string().required(),
                city: Joi.string().required(),
                state: Joi.string().required(),
                country: Joi.string().required(),
                zipcode: Joi.string().required()
            }).required(),
            shipping: ({
                firstName: Joi.string().required(),
                lastName: Joi.string().required(),
                street: Joi.string().required(),
                number: Joi.string().required(),
                neighborhood: Joi.string().required(),
                city: Joi.string().required(),
                state: Joi.string().required(),
                country: Joi.string().required(),
                zipcode: Joi.string().required(),
                ddd: Joi.string().required(),
                phone: Joi.string().required(),
                method: Joi.string().required().valid(
                    "SameDay", "NextDay" "TwoDay",
                    "ThreeDay", "LowCost", "Pickup",
                    "Other", "None"
                )
            }).required(),
        }).required(),
        products: Joi.array([
            {
                name: Joi.string().required(),
                price: Joi.number().required(),
                quantity: Joi.number().required(),
                sku: Joi.string().required()
            }
        ]).required()
    }
}