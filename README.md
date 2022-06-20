## Iniciando o SDK

Os métodos a seguir são disponibilizados para acesso via SDK que pode ser instalado utilizando o comando abaixo.

`$ yarn add https://github.com/redeceler/celer-gateway-sdk`

## Autenticação

### Obter chave

Método responsável por recuperar a chave pública usada para encriptar a senha no método [Obter token](#obter-token)

#### _Response Payload_

| Campo           | Tipo    | Descrição            |
|-----------------|---------|----------------------|
| **`status`**    | Boolean | _Status da resposta_ |
| **`publicKey`** | Text    | _Chave pública_      |

````json
{
  "status": true,
  "publicKey": "-----BEGIN PUBLIC KEY-----\r\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkP+O2bQZIj6ddp/pZI4s\r\nOrPZ/NHyV7ANLZW3ZsVstEE8HtHoHaFkBZBJ7E/7tF60mgn67jHNP1zmefxShQfJ\r\nbAI1eBIjS2iouN2xlvZTT/LL1w4rSVf4m9/3iRjjS2U3GpFVTFgxvIxsAlq3sZCP\r\nxd89ua1Z637tgGqac1VbAuPDA2UhAk/uYWbgE+aQT1kMqS00dtSZHEfIUNoFJ+Kk\r\nxBm2eYBc5nqmvbdvNENWlN8Ai9LbAgRUPX3vmxDmUt0JSttOfwzGFIRKgGBW78MM\r\naQDiO050fVxhHre8RWWt8URrLbRrhuNquOv3jTk56jnI//+K3Y68n/22XMAmyzP/\r\n5wIDAQAB\r\n-----END PUBLIC KEY-----\r\n"
}
````

### Obter token

<span class="code green">POST</span>
<span class="code light-green">/v1/logon</span>

#### _Request body_

| Campo          | Tipo | Descrição                                                                                   |
|----------------|------|---------------------------------------------------------------------------------------------|
| **`user`**     | Text | _Usuário do estabelecimento_                                                                      |
| **`password`** | Text | _Senha do estabelecimento encriptada com a chave pública recebida em [Obter chave](#obter-chave)_ |

````json
{
  "user": "200333",
  "password": "VpcRcIRz5oJmbcBhbwoutJBSicMgYC4ofORHY8s+ycTdUpLUDNpGCPZo9wDsZUVJXdX+8z6WZ58IGo1WrEK9aPeiZs5cbBl8lKBgnxWQVpCpLrikxl0mIR//1gkDHSxKJjHzc0E68Y0eBQrKO+h2EPqoOMFui+lCYRz7Rs7JibiNMOv/9XbGDjH2QflvxzvTCjCsvJGKxATlMvaru1p19lsq1QvO84d3KFdYO+x0mgGQrHwei/xkr7xfA+Ya0VObrzPZkeH3KSlFwqr54KegA2J4A6lWIuz13MNRIUtqcdrC32Gxd1a4hlWGY4i89V9YDTeEAKWtNN7rS2IG/+E/SA=="
}
````

#### _Response body_

| Campo           | Tipo    | Descrição                                      |
|-----------------|---------|------------------------------------------------|
| **`status`**    | Boolean | _Status da resposta_                           |
| **`token`**      | Text    | _Token para ser usado em requisições futuras_ |

````json
{
  "status": "true",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
````

### Fazer transacao

<span class="code green">POST</span>
<span class="code light-green">/v2/transaction</span>
<a href="#importante" class="code yellow">seguro</a>

#### _Request header_

| Campo                | Tipo   | Descrição                                            |
|----------------------|--------|----------------------------------------------------- |
| **`x-access-token`** | Text   | Token recebido no método [Obter token](#obter-token) |

#### _Request body_

| Campo                | Tipo   | Descrição                                                                                                                                           |
|----------------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| **`pan`**            | Text   | _Número do cartão_                                                                                                                                  |
| **`cardholderName`** | Text   | _Nome do portador impresso no cartão_                                                                                                               |
| **`expirationDate`** | Text   | _Data de expiração do cartão. Formato: "MM/AA"_                                                                                                     |
| **`cvvStatus`**      | Text   | _Indicação de presença do código de segurança do cartão. Possíveis valores: "E"(presente), "NE"(não existe), "U"(ilegível) ou "NR"(desconsiderado)_ |
| **`cvv`**            | Number | _Código de segurança do cartão_                                                                                                                     |
| **`brand`**          | Text   | _Bandeira do cartão. Possíveis valores: "ELO CREDITO", "DINERS", "AMEX CREDITO", "MASTERCARD" ou "VISA"_                                                              |
| **`amount`**         | Number | _Valor da transação_                                                                                                              |
| **`date`**           | Date   | _Data da transação. Formato: "AAAA-MM-DDTHH:mm:ss"_                                                                 |
| **`paymentType`**    | Text   | _Tipo de pagamento. Possíveis valores: "V"(crédito à vista), "E"(parcelado emissor) ou "L"(parcelado lojista)_                         |
| **`installments`**   | Number | _Quantidade de parcelas_                                                                                                                            |
| **`site`**           | Text   | _Site de origem da conexão cadastrado no portal TKPP_                                                                                                                         |
| **`splitMode`**      | Boolean | _Indicação que sofrerá ação de um split_                                                                                                                         |
| **`sellerChannel`** | Text | _Canal de venda_ |
| **`productsCategory`** | Text | _Caterogia do produto_ |
| **`customer`** | Object | |
| **`customer.gender`** | Enum | _Possíveis valores: "M" ou "F"_ |
| **`customer.login`** | Text | _Login do cliente_ |
| **`customer.name`** | Text | _Nome do cliente_ |
| **`customer.ddd`** | Text | _DDD do número do telefone_ |
| **`customer.phone`** | Text | _Número do telefone_ |
| **`customer.email`** | Text | _Endereço de email_ |
| **`customer.documentType`** | Enum | _Possíveis valores: "CPF" ou "CNPJ"_ |
| **`customer.document`** | Text | _Número do documento_ |
| **`customer.birthDate`** | Text | Formato: _"DD/MM/AAAA"_ |
| **`customer.ip`** | Text | _Ip do usuário na rede_ |
| **`customer.fingerPrint`** | Text | _Identificador utilizado para cruzar informações obtidas do dispositivo do comprador. Este mesmo identificador deve ser utilizado para gerar o valor que será atribuído ao campo session_id do script que será incluído na página de checkout. Obs.: Este identificador poderá ser qualquer valor ou o número do pedido, mas deverá ser único durante 48 horas. Para gerar, siga essa <a target="_blank" href="https://braspag.github.io/manual/antifraude#configura%C3%A7%C3%A3o-do-fingerprint">documentação</a>_ |
| **`customer.billing`** | Object | |
| **`customer.billing.street`** | Text | _Nome da rua_ |
| **`customer.billing.number`** | Text | _Número da residência_ |
| **`customer.billing.neighborhood`** | Text | _Nome do bairro_ |
| **`customer.billing.city`** | Text | _Nome da cidade_ |
| **`customer.billing.state`** | Text | _Nome do estado_ |
| **`customer.billing.country`** | Text | _Nome do país_ |
| **`customer.billing.zipcode`** | Text | _Número do CEP_ |
| **`customer.shipping`** | Object | |
| **`customer.shipping.firstName`** | Text | _Primeiro nome do cliente_ |
| **`customer.shipping.lastName`** | Text | _Último nome do cliente_ |
| **`customer.shipping.street`** | Text | _Nome da rua_ |
| **`customer.shipping.country`** | Text | _Nome do país_ |
| **`customer.shipping.zipcode`** | Text | _Número do CEP_ |
| **`customer.shipping.ddd`** | Text | _DDD do número do telefone_ |
| **`customer.shipping.phone`** | Text | _Número do telefone_ |
| **`customer.shipping.method`** | Enum | _Possíveis valores: "SameDay" (Meio de entrega no mesmo dia), "NextDay" (Meio de entrega no próximo dia), "TwoDay" (Meio de entrega em dois dias), "ThreeDay" (Meio de entrega em três dias), "LowCost" (Meio de entrega de baixo custo), "Pickup" (Retirada na loja), "Other" (Outro meio de entrega) ou "None" (Sem meio de entrega, pois é um serviço ou assinatura)_ |
| **`products`** | Array | |
| **`products[n].name`** | Text | _Nome do produto_ |
| **`products[n].price`** | Number | _Formato: "100.06"_ |
| **`products[n].quantity`** | Number | _Quantidade do produto_ |
| **`products[n].sku`** | Text | _Unidade de Controle de Estoque (Stock Keeping Unit)_ |                                                                                                                       |

````json
{
    "pan": "1234567307193450",
    "cardholderName": "Kaue Goncalves",
    "expirationDate": "06/23",
    "cvvStatus": "E",
    "cvv": 905,
    "brand": "MASTERCARD",
    "amount": 10.03,
    "date": "2018-10-28T13:07:10",
    "paymentType": "L",
    "installments": 5,
    "site": "ODESOUZAONLINE",
    "splitMode": false,
    "customer": {
        "name": "Silvio Santos",
        "ddd": 11,
        "phone": 123456789,
        "email": "teste@gwonline.com.br",
        "documentType": "CPF",
        "document": "12345678901",
        "birthDate": "04/05/1990",
        "ip": "127.0.0.1",
        "billing": {
            "street": "Av Paulista",
            "number": "281",
            "neighborhood": "Centro",
            "city": "São Paulo",
            "state": "SP",
            "country": "Brasil",
            "zipcode": "00000001"
        }
    },
    "products": [
        {
            "name": "Passagem",
            "price": "10.03",
            "quantity": 1,
            "sku": 123456
        }
    ]
}
````

#### _Response body_

| Campo         | Tipo    | Descrição                                                        |
|---------------|---------|------------------------------------------------------------------|
| **`status`**  | Boolean | _Status da resposta_                                             |
| **`message`** | Text    | _Mensagem de resposta_                                           |
| **`cod`**     | Text    | _Código de resposta_                                           |
| **`tid`**     | Text    | _Identificação da transação (existente se transação aprovada)_   |
| **`details`** | Text    | _Detalhes sobre o processamento (existente se transação negada)_ |

````json
{
  "status": true,
  "cod": "200",
  "message": "Transação aprovada",
  "tid": "1541073893002"
}
````
````json
{
  "status": false,
  "cod": "201",
  "message": "Transação negada",
  "details": "Saldo insuficiente"
}
````

### Verificar status

<span class="code green">POST</span>
<span class="code light-green">/v1/verify</span>
<a href="#importante" class="code yellow">seguro</a>

#### _Request header_

| Campo                | Tipo   | Descrição                                            |
|----------------------|--------|----------------------------------------------------- |
| **`x-access-token`** | Text   | Token recebido no método [Obter token](#obter-token) |

#### _Request body_

| Campo     | Tipo | Descrição                    |
|-----------|------|------------------------------|
| **`tid`** | Text | _Identificação da transação_ |

````json
{
  "tid": "1541073893002"
}
````

#### _Response body_

| Campo           | Tipo    | Descrição                                                                           |
|-----------------|---------|-------------------------------------------------------------------------------------|
| **`status`**    | Boolean | _Status da resposta_                                                                |
| **`situation`** | Text    | _Situação da transação_                                                             |
| **`amount`**    | Number  | _Valor da transação_                                              |
| **`date`**      | Date    | _Data da transação. Formato: "AAAA-MM-DDTHH:mm:ss"_ |

````json
{
  "status": true,
  "situation": "APROVADA",
  "amount": 10.02,
  "date": "2018-10-24T11:34:10"
}
````

### Cancelar transacao

<span class="code green">POST</span>
<span class="code light-green">/v1/cancellation</span>
<a href="#importante" class="code yellow">seguro</a>

#### _Request header_

| Campo                | Tipo   | Descrição                                            |
|----------------------|--------|----------------------------------------------------- |
| **`x-access-token`** | Text   | Token recebido no método [Obter token](#obter-token) |

#### _Request body_

| Campo     | Tipo | Descrição                    |
|-----------|------|------------------------------|
| **`tid`** | Text | _Identificação da transação_ |

````json
{
  "tid": "1541073893002"
}
````

#### _Response body_

| Campo             | Tipo    | Descrição                                                                  |
|-------------------|---------|----------------------------------------------------------------------------|
| **`status`**      | Boolean | _Status da resposta_                                                       |
| **`message`**     | Number  | _Mensagem de resposta_                                                     |
| **`originalTid`** | Text    | _Identificação da transação original (existente se cancelamento aprovado)_ |
| **`details`**     | Text    | _Detalhes sobre o processamento (existente se cancelamento negado)_        |

````json
{
  "status": true,
  "message": "Transação cancelada",
  "originalTid": "1541073893002"
}
````
````json
{
  "status": false,
  "cod": "503",
  "message": "Cancelamento negado",
  "details": "Cancelamento negado pelo adquirente"
}
````

### Split

<span class="code green">POST</span>
<span class="code light-green">/v1/split</span>
<a href="#importante" class="code yellow">seguro</a>

#### _Request header_

| Campo                | Tipo   | Descrição                                            |
|----------------------|--------|----------------------------------------------------- |
| **`x-access-token`** | Text   | Token recebido no método [Obter token](#obter-token) |

#### _Request body_

| Campo     | Tipo | Descrição                    |
|-----------|------|------------------------------|
| **`tid`** | Text | _Identificação da transação que será afetada pelo split_ |
| **`splits`** | Object array | _Identificação dos estabelecimentos que receberão os splits_ |
| **`splits.document`** | Text | _CPF/CNPJ do estabelecimento_ |
| **`splits.affiliator`** | Text | _CPF/CNPJ do afiliador_ |
| **`splits.value`** | Number | _Valor do split_ |

````json
{
  "tid": "1541073893002",
  "splits": [
     {
        "document": "42988901804",
        "affiliator": "34045153000178",
        "value": "3.50"
     },
     {
        "document": "09266625894",
        "affiliator": "34045153000987",
        "value": "0.50"
     }
  ]
}
````

#### _Response body_

| Campo             | Tipo    | Descrição                                                                  |
|-------------------|---------|----------------------------------------------------------------------------|
| **`status`**      | Boolean | _Status da resposta_                                                       |
| **`message`**     | Number  | _Mensagem de resposta_                                                     |
| **`originalTid`** | Text    | _Identificação da transação original (existente se cancelamento aprovado)_ |
| **`details`**     | Text    | _Detalhes sobre o processamento (existente se cancelamento negado)_        |

````json
{
  "status": true
}
````
````json
{
  "status": false,
  "cod": "601",
  "message": "Falha na conexão"
}
````

****

## Sucessos

Abaixo possíveis códigos de sucesso retornados pela API e suas respectivas descrições

* Relacionados ao método [Fazer transacao](#fazer-transacao)

| Código    | Descrição                          |
|-----------|------------------------------------|
| **`200`** | _Transação aprovada_          |
| **`202`** | _Transação pendente_           |

****

## Erros

Abaixo possíveis códigos de erro retornados pela API e suas respectivas descrições

* Genéricos (podem ocorrer em requisições para qualquer um dos métodos)

| Código    | Descrição                          |
|-----------|------------------------------------|
| **`001`** | _Falha na conexão com banco de dados_          |
| **`002`** | _Falha na operação com banco de dados_           |
| **`003`** | _Formato de cabeçalho/corpo_ inválido |
| **`004`** | _Criptografia inválida_               |
| **`005`** | _Parâmetros inválidos_               |
| **`006`** | _Token inválido_                    |
| **`007`** | _Chaves de adquirentes não encontradas_          |
| **`999`** | _Erro não mapeado_                  |

* Relacionados ao método [Obter token](#obter-token)

| Código    | Descrição               |
|-----------|-------------------------|
| **`101`** | _Id do comerciante inválido_    |
| **`102`** | _Usuário ou senha inválido_ |

* Relacionados ao método [Fazer transacao](#fazer-transacao)

| Código    | Descrição            |
|-----------|----------------------|
| **`201`** | _Transação negada_   |

* Relacionados à conexão com o adquirente (podem ocorrer em requisições para métodos que estabelecem conexões com o adquirente)

| Código    | Descrição                     |
|-----------|-------------------------------|
| **`301`** | _Falha na conexão_            |
| **`302`** | _Falha na conversão de dados_ |

* Relacionados ao método [Verificar status](#verificar-status)

| Código    | Descrição                             |
|-----------|---------------------------------------|
| **`401`** | _Transação não encontrada_            |

* Relacionados ao método [Cancelar transacao](#cancelar-transacao)

| Código    | Descrição                                           |
|-----------|-----------------------------------------------------|
| **`501`** | _Transação não encontrada_                          |
| **`502`** | _Transação com status diferente de "APROVADA"_      |
| **`503`** | _Cancelamento negado_                               |

* Relacionados ao método [Split](#split)

| Código    | Descrição                                           |
|-----------|-----------------------------------------------------|
| **`601`** | _Falha na conexão com o servidor de split_                          |
| **`602`** | _Falha no processsamento_      |
