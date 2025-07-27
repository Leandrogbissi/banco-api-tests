const request = require('supertest'); //serve para interagir com a API
const { expect } = require('chai'); //para validar que o teste funciona como deveria
require('dotenv').config();
const { obterToken } = require('../helpers/autenticacao'); //importa a função para obter o token
const postTransferencias = require('../fixtures/postTransferencias.json'); //importa o arquivo JSON com os dados da transferência

describe('Transferencias', () => {
    describe('POST /transferencia', () => {
        let token;

        beforeEach(async () => {
            token = await obterToken('julio.lima', '123456');
            // O token é obtido antes de cada teste para garantir que ele esteja atualizado  
            // Aqui você pode adicionar código que deve ser executado antes de cada teste, se necessário
        });

        it('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de 10 reais', async () => {
            // Capturar o token
             const bodytransferencias = {...postTransferencias}

            const resposta = await request(process.env.BASE_URL)
            .post('/transferencias')
            .set('Content-type', 'application/json')
            .set('Authorization', `Bearer  ${token}`)
            .send(bodytransferenc)

            expect(resposta.status).to.equal(201);
          
        })

        it('Deve retornar 422 quando o valor for abaixo de 10 reais', async () => {
            // Capturar o token
             const bodytransferencias = {...postTransferencias}
            bodytransferencias.valor = 7; // Modifica o valor para abaixo de 10 reais
            
            const resposta = await request(process.env.BASE_URL)
            .post('/transferencias')
            .set('Content-type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send( bodytransferencias)

            expect(resposta.status).to.equal(422);
        
        })

    })

})