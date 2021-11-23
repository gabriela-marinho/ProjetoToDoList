// Backend - Projeto Final TO DO LIST
// importacao das libs externas (express e cors)
const express = require('express');
const cors = require('cors');

// importei da pasta Conn onde está o mongo
const Conn = require('./conn/conn');

// importar as rotas que eu vou ultilizar na pasta routes, arquivo: tarefas.routes,js4


const tarefasRouter = require('./routes/tarefas.routes');


// inicializacao do express
const app = express();

// habilitar o modo json do express; JSON (Javascript Objective Notation)
app.use(express.json());

// habilitar o midleware do cors
app.use(cors());
// chamo o metodo para conexão com o banco de dados.
Conn();
//inicializa a rota : tarefas 
app.use('/tarefas', tarefasRouter);

// INDICA EM QUAL PORTA ESTÁ RODANDO O SERVIÇO
const port = 3015;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})




//  ARQUITERURA MVC -  DIVISÃO EM 3 PONTOS PRINCIPAIS :
// MODEL = é responsavel pelos dados e funcoes do banco de dados,
// VIEW = a visao e interação do cliente ou seja html(react, angular, vue, html)
// CONTROLLER = é o responsavel por gerenciar os fluxos, define as regras
// Rotas = sao os responsaveis pelos metodos da API.
// servicos = responsaveis por se conectar com os nossos model (chamas as funcoes do banco de dados atraves do model)