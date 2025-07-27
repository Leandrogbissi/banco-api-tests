# banco-api-tests

Projeto de automação de testes para a API REST do sistema bancário [banco-api](https://github.com/Leandrogbissi/banco-api).

## 📊 Objetivo

Garantir a qualidade e estabilidade da API REST do projeto `banco-api` por meio de testes automatizados utilizando JavaScript e ferramentas modernas de teste.

## 🚀 Stack utilizada

- **Linguagem:** JavaScript (Node.js)
- **Test Runner:** [Mocha](https://mochajs.org/)
- **Asserções:** [Chai](https://www.chaijs.com/)
- **Requisições HTTP:** [Supertest](https://github.com/ladjs/supertest)
- **Relatórios:** [Mochawesome](https://github.com/adamgruber/mochawesome)
- **Gerenciador de dependências:** npm
- **Gerenciamento de variáveis de ambiente:** [dotenv](https://github.com/motdotla/dotenv)

## 📁 Estrutura de diretórios

```
.
├── fixtures/               # Arquivos JSON com dados de entrada para os testes
├── helpers/                # Funções auxiliares (ex: geração de token)
├── mochawesome-report/     # Relatórios HTML gerados automaticamente
├── test/                   # Casos de teste estruturados com Mocha
├── .env                    # Variáveis de ambiente (criado pelo usuário)
├── .gitignore
├── package.json
└── README.md
```

## 🔐 Formato do arquivo `.env`

O projeto exige a criação manual de um arquivo `.env` na raiz do projeto, com o seguinte conteúdo:

```dotenv
BASE_URL=http://localhost:3000
```

> Altere o valor de `BASE_URL` conforme o ambiente onde a API `banco-api` estiver rodando.

## ⚖️ Comandos

### Instalar dependências
```bash
npm install
```

### Executar testes
```bash
npm test
```

### Gerar relatório HTML com Mochawesome
```bash
npx mocha test --reporter mochawesome
```

O relatório será gerado na pasta `mochawesome-report` como um arquivo `.html`, podendo ser aberto em qualquer navegador.

## 📚 Documentação das dependências principais

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Supertest](https://github.com/ladjs/supertest)
- [Mochawesome](https://github.com/adamgruber/mochawesome)

---

> Desenvolvido por [Leandro G Bissi](https://github.com/Leandrogbissi) para o projeto de testes da API [banco-api](https://github.com/Leandrogbissi/banco-api).
