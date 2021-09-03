const { invoice, checkTax } = require('../src/modules/invoice');

test("invoice", async () => {
  await expect(invoice(data, token)).resolves.toEqual(expect.objectContaining({
    status: expect.any(Boolean),
    message: expect.any(String),
    tid: expect.any(String),
    cod: expect.any(String),
  }));
})

test("checkTax", async () => {
  await expect(checkTax(token)).resolves.toEqual(expect.objectContaining({
    status: expect.any(Boolean),
    tax: expect.any(Number)
  }));
})


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNX0lEIjoiNjkxNTIyIiwiaWF0IjoxNjMwNjM1NjQ2LCJleHAiOjE2MzA2Mzc0NDZ9.Rv-ADF-iIdRtb32iAN096R6d3HZZGJItzX04dolJAy8"
const data = {
  "amount": 10,
  "expirationDate": "15/06/20",
  "callbackUrl": "http://meuendpoint.com.br/callback",
  "splitMode": true,
  "instructions": "Boleto com vencimento no final de semana, poderá ser pago no próximo dia útil",
  "email": "silvio.santos@gmail.com",
  "customer": {
    "name": "Silvio Santos",
    "document": "483729607",
    "address": {
      "street": "Rua Augusta",
      "number": "123",
      "complement": "Casa 32",
      "neighborhood": "Jardins",
      "zipCode": "06743725",
      "city": "Sao Paulo",
      "state": "SP",
      "country": "Brazil"
    }
  },
  "splits": [
    {
      "document": "13098694483",
      "value": 5
    },
    {
      "document": "36821003262",
      "value": 2.50
    }
  ]
}


