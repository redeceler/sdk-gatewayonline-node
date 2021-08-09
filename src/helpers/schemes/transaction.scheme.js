const yup = require('yup');

const shape = yup.object().shape({
  pan: yup.string().typeError('Pan must be a string').required(),
  cardholderName: yup.string().typeError('cardholderName must be a string').required(),
  expirationDate: yup.string().typeError('expirationDate must be a string').required(),
  cvvStatus: yup.string().typeError('cvvStatus must be a string').required(),
  cvv: yup.number().typeError('cvv must be a string').required(),
  brand: yup.string().typeError('brand must be a string').required(),
  amount: yup.number().typeError('amount must be a number').required(),
  date: yup.date().typeError('date must be a date'),
  paymentType: yup.string().typeError('paymentType must be a string').required(),
  installments: yup.number().typeError('installments must be a number').required(),
  site: yup.string().typeError('site must be a string').required(),
  splitMode: yup.boolean().typeError('splitMode must be a boolean'),
  sellerChannel: yup.string().typeError('sellerChannel must be a string').required(),
  productsCategory: yup.string().typeError('productsCategory must be a string').required(),
  customer: yup.object({
    gender: yup.string().oneOf(['M', 'F']).required(),
    login: yup.string().typeError('login must be a string').required(),
    ddd: yup.string().typeError('ddd must be a string').required(),
    phone: yup.string().typeError('phone must be a string').required(),
    email: yup.string().typeError('email must be a string').required(),
    documentType: yup.string().oneOf(['CPF', 'CNPJ']).required(),
    document: yup.string().typeError('document must be a string').required(),
    birthDate: yup.string().typeError('birthDate must be a string').required(),
    ip: yup.string().typeError('ip must be a string').required(),
    fingerPrint: yup.string().typeError('fingerPrint must be a string').required(),
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
      firstName: yup.string().typeError('firstName must be a string').required(),
      lastName: yup.string().typeError('lastName must be a string').required(),
      street: yup.string().typeError('street must be a string').required(),
      number: yup.string().typeError('number must be a number').required(),
      neighborhood: yup.string().typeError('neighborhood must be a string').required(),
      city: yup.string().typeError('city must be a string').required(),
      state: yup.string().typeError('state must be a string').required(),
      country: yup.string().typeError('country must be a string').required(),
      zipcode: yup.string().typeError('zipcode must be a string').required(),
      ddd: yup.string().typeError('ddd must be a string').required(),
      phone: yup.string().typeError('phone must be a string').required(),
      method: yup.string().required().oneOf([
        'SameDay', 'NextDay', 'TwoDay',
        'ThreeDay', 'LowCost', 'Pickup',
        'Other', 'None',
      ]),
    }),
  }),
  products: yup.array().of(yup.object(
    {
      name: yup.string().typeError('name must be a string').required(),
      price: yup.number().typeError('price must be a number').required(),
      quantity: yup.number().typeError('quantity must be a number').required(),
      sku: yup.string().typeError('sku must be a string').required(),
    },
  )),
});

module.exports = {
  shape,
};
