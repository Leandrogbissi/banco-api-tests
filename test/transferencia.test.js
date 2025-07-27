const request = require('supertest'); //serve para interagir com a API
const {expect} = require('chai') //para validar que o teste funciona como deveria
require('dotenv').config()
const { obterToken} = require('../helpers/autenticacao'); //importa a função para obter o token

describe('Transferencias', () => {
    describe('POST /transferencia', () => {
        it('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de 10 reais', async () => {
            // Capturar o token
             const token = await obterToken('julio.lima', '123456');

            const resposta = await request(process.env.BASE_URL)
            .post('/transferencias')
            .set('Content-type', 'application/json')
            .set('Authorization', 'Bearer ' + token)
            .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 11,
                    token: ""
                })

            expect(resposta.status).to.equal(201);
          
        })

        it('Deve retornar 422 quando o valor for abaixo de 10 reais', async () => {
            // Capturar o token
            const token = await obterToken('julio.lima', '123456');

            const resposta = await request(process.env.BASE_URL)
            .post('/transferencias')
            .set('Content-type', 'application/json')
            .set('Authorization', 'Bearer ' + token)
            .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 7,
                    token: ""
                })

            expect(resposta.status).to.equal(422);
        
        })

    })

})