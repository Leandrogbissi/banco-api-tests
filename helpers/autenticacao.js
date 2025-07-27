const request = require('supertest'); //serve para interagir com a API
const postLogin = require('../fixtures/postLogin.json'); //importa o arquivo JSON com os dados de login

const obterToken = async (usuario, senha) =>{
    const bodyLogin = {...postLogin}

    const respostaLogin = await request (process.env.BASE_URL) 
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(bodyLogin)
                
                return respostaLogin.body.token

}

module.exports = {
    obterToken
}