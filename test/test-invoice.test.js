const { invoice } = require('../src/modules/invoice');

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNX0lEIjoiNjg1MTE4IiwiaWF0IjoxNjI4NTYzMzk3LCJleHAiOjE2Mjg1NjUxOTd9.DAQrrDhLrF1aSaJBqzIcFdPa6q0YcnRaXOgZHpHF4VA"
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


test("invoice", async () => {
    await expect(invoice(data, token)).resolves.toBeDefined();
})

