const yup = require('yup');

const pixShape = yup.object().shape({
  identifierSite: yup.string().typeError('identifierSite must be a string').required(),
  amount: yup.number().typeError('amount must be a number').required(),
  currencyCode: yup.number().typeError('expirationDate must be a number').required(),
  callbackUrl: yup.string().typeError('cvvStatus must be a string').required(),
  customer: yup.object({
    gender: yup.string().oneOf(['M', 'F']).required(),
    ddd: yup.string().typeError('ddd must be a string').required(),
    phone: yup.string().typeError('phone must be a string').required(),
    email: yup.string().typeError('email must be a string').required(),
    documentType: yup.string().oneOf(['CPF', 'CNPJ']).required(),
    document: yup.string().typeError('document must be a string').required(),
    billing: yup.object({
      street: yup.string().typeError('street must be a string').required(),
      number: yup.string().typeError('number must be a string').required(),
      neighborhood: yup.string().typeError('neighborhood must be a string').required(),
      city: yup.string().typeError('city must be a string').required(),
      state: yup.string().typeError('state must be a string').required(),
      country: yup.string().typeError('country must be a string').required(),
      zipcode: yup.string().typeError('zipcode must be a string').required(),
    }).required(),
    shipping: yup.object({
      street: yup.string().typeError('street must be a string').required(),
      number: yup.string().typeError('number must be a number').required(),
      neighborhood: yup.string().typeError('neighborhood must be a string').required(),
      city: yup.string().typeError('city must be a string').required(),
      state: yup.string().typeError('state must be a string').required(),
      country: yup.string().typeError('country must be a string').required(),
      zipcode: yup.string().typeError('zipcode must be a string').required(),
    }),
  }),
});

module.exports = {
  pixShape,
};
