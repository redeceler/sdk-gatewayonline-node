const { loadQRCode, statusTransaction, cancelQRCode, cancelPix } = require('../src/modules/pix');

test("loadQrCode", async () => {
  await expect(loadQRCode(data, token)).resolves.toEqual(expect.objectContaining({
    status: expect.any(Boolean),
    message: expect.any(String),
    txId: expect.any(String),
  }));
}, 120000)

test("statusPix", async () => {
  await expect(statusTransaction(txId, token)).resolves.toBeDefined();
})

test("cancelQRCode", async () => {
  await expect(cancelQRCode(txId, token)).resolves.toEqual(expect.objectContaining({
    status: expect.any(Boolean),
    message: expect.any(String),
    situation: expect.any(String),
  }));
})

test("cancelPix", async () => {
  await expect(cancelPix(cancelObj, token)).resolves.toEqual(expect.objectContaining({
    status: expect.any(Boolean),
    message: expect.any(String),
    situation: expect.any(String),
  }));
})

const txId = "16159343096f73169921d441a";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNX0lEIjoiNjkxNTIyIiwiaWF0IjoxNjMwNjM0NDQzLCJleHAiOjE2MzA2MzYyNDN9.BNvzbewjNjeJxXLrrOfXmb4fzBLmmgYjF5JzajhSC2w"

const cancelObj = {
  "txId": "16159343096f73169921d441a",
  "amount": 1000
}

const data = {
  "identifierSite": "PEDIJA429ON",
  "amount": 10.00,
  "currencyCode": 986,
  "callbackUrl": "http://myserver:2021/pixcallback",
  "customer": {
    "gender": "F",
    "name": "Pedro",
    "ddd": "11",
    "phone": "962633862",
    "email": "blablxxla@gmail.com",
    "documentType": "CPF",
    "document": "09060697006",
    "billing": {
      "street": "Rua Santa Mônica",
      "number": "281",
      "neighborhood": "Parque Industrial San José",
      "city": "Cotia",
      "state": "SP",
      "country": "Brasil",
      "zipcode": "06715865"
    },
    "shipping": {
      "street": "Rua Santa Mônica",
      "number": "281",
      "neighborhood": "Parque Industrial San José",
      "city": "Cotia",
      "state": "SP",
      "country": "Brasil",
      "zipcode": "06715825"
    }
  }
}


