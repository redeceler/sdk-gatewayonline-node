const { transaction } = require('../src/modules/transaction');

test("transaction", async () => {
    await expect(transaction(data)).resolves.toBe(true)
});


const data = {
    "pan": "123",
    "cardholderName": "12312",
    "expirationDate": "06/23",
    "cvvStatus": "E",
    "cvv": "805",
    "brand": "MASTERCARD",
    "amount": 100.30,
    "date": "2020-02-06T18:07:10",
    "paymentType": "V",
    "installments": 1,
    "site": "GWONLINEHMG",
    "splitMode": false,
    "sellerChannel": "web",
    "productsCategory": "Equipamentos de Esporte",
    "customer": {
        "gender": "F",
        "login": "teste2@gmail.com",
        "name": "Pedro",
        "ddd": "11",
        "phone": "962633862",
        "email": "blablxxla@gmail.com",
        "documentType": "CPF",
        "document": "09060697006",
        "birthDate": "04/05/1986",
        "ip": "177.69.0.82",
        "fingerPrint": "1573661233",
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
            "firstName": "José",
            "lastName": "Post",
            "street": "Rua Santa Mônica",
            "number": "281",
            "neighborhood": "Parque Industrial San José",
            "city": "Cotia",
            "state": "SP",
            "country": "Brasil",
            "zipcode": "06715825",
            "ddd": "11",
            "phone": "9626868233",
            "method": "LowCost"
        }
    },
    "products": [
        {
            "name": "Produtox",
            "price": 100.30,
            "quantity": 1,
            "sku": "1234a56"
        }
    ]
}
