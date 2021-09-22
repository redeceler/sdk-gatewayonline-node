const { invoice, checkTax, teste} = require('../src/modules/invoice');

test("invoice", async () => {
  await expect(invoice(data, token)).resolves.toEqual(expect.objectContaining({
    status: expect.any(Boolean),
    tid: expect.any(String),
    barcode: expect.any(String),
    digitableLine: expect.any(String),
    url: expect.any(String),
  }));
})

test("checkTax", async () => {
  await expect(checkTax(token)).resolves.toEqual(expect.objectContaining({
    status: expect.any(Boolean),
    tax: expect.any(Number)
  }));
})

test("testeteste", async () => {
    expect(
        teste()
    ).toBeDefined();
});


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNX0lEIjoiNjkxNTIyIiwiaWF0IjoxNjMyMzIzMzQ1LCJleHAiOjE2MzIzMjUxNDV9.XGeaypGPtl3q3WgXaX3f0_AyPrVdVRUTNXSzlI-he4c"
const data = {
    "amount": 13,
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
        "document": "43383423824",
        "value": 5
      },
      {
        "document": "36821003262",
        "value": 5
      }
    ]
  }


