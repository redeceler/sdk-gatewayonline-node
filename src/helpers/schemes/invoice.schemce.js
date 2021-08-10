const yup = require('yup');

const invoiceScheme = yup.object().shape({
  expirationDate: yup.string().typeError('expirationDate must be a string').required(),
  amount: yup.number().typeError('amount must be a number').required(),
  splitMode: yup.boolean().typeError('splitMode must be a boolean').required(),
  callbackUrl: yup.string().typeError('callbackUrl must be a string').required(),
  email: yup.string().typeError('email must be a string').required(),
  instructions: yup.string().typeError('instructions must be a string').required(),
  customer: yup.object({
    name: yup.string().typeError('name must be a string').required(),
    document: yup.string().typeError('document must be a string').required(),
    address: yup.object({
      street: yup.string().typeError('street must be a string').required(),
      number: yup.string().typeError('number must be a string').required(),
      complement: yup.string().typeError('complement must be a string').required(),
      neighborhood: yup.string().typeError('neighborhood must be a string').required(),
      city: yup.string().typeError('city must be a string').required(),
      state: yup.string().typeError('state must be a string').required(),
      country: yup.string().typeError('country must be a string').required(),
      zipcode: yup.string().typeError('zipcode must be a string').required(),
    }).required(),
  }),
  splits: yup.array().of(yup.object(
    {
      document: yup.string().typeError('document must be a string').required(),
      value: yup.number().typeError('value must be a number').required(),
    },
  )),
});

module.exports = {
  invoiceScheme,
};
