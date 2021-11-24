// const { Router } = require('express');
const express = require('express');
const { create } = require('../models/tarefa');

// importo o modulo controller q eu ja ahvia exportado no tarefas.controller.js, para acessar as funçoes
const TarefasController = require('./../controllers/tarefas.controller');

// inicializo a classe controller
const tarefasController = new TarefasController; 

// inicializar as rotas do express
const router = express.Router();



// const tarefas = [
//     {
//         id: Date.now(),
//         titulo: 'Fazer Mercantil',
//         descricao: 'desenvolvedor front-endcomprar leite e pão',
//         prioridade: 'alta,media ou baixa  - pesquisar como faz a seleção',
//         status: 'fazer,fazendo ou feito - pesquisar como faz a seleção',
//         prazo: '3 dias',
//         data: 'pesquisar como faz para colocar a data'
        
//     },
// ]

// função GET , RETORNANDO A LEITURA DE TODAS AS TAREFAS
router.get('/',tarefasController.getTarefas) 


//função GET usando o ID, req.params é um objeto que contém propriedades para a rota nomeada que será o ID
//[GET /vagas/:id - retorna um item por id
router.get('/:id', tarefasController.getTarefasById);


// função POST para criar uma tarefa
router.post('/add', tarefasController.createTarefa)

// // ***********************************************ver A FUNÇÃO PUT NOVAMENTE*************************************************
// // função PUT para  editar uma vaga de acordo com o id
// router.put('edit/:id',(req,res) =>{
//     // o objeto que veio do front para atualizar a vaga com o id recebido
//     const tarefaEdit = req.body;
//      // o id recebido via parametro
//      const idParam = req.params.id;
//      // procura o indice da vaga pre cadastrada na lista de acordo com o id recebido 
//     let index = tarefas.findIndex(tarefa => tarefa.id == idParam);

//     if(index < 0) {
//         res.status(404).send({
//             error: `Tarefa com id ${idParam} não encontrada para edição`
//         })
//         return;
//     }

//     // spread operator ...
//     // faz um espelho do item na lista e um espelho do objeto atualizado e junta os 2
//     tarefas[index] = {
//         ...tarefas[index],
//         ...tarefaEdit
//     }

//     res.send({
//         message: `Tarefa ${tarefas[index].titulo} atualizada com sucesso!`,
//         data: tarefas[index]
//     })
// })

// // função DELETE, exclui um item de acordo com o id
// router.delete('/delete/:id',(req,res) =>{
//     const idParam = req.params.id;
//     const index = tarefas.findIndex(tarefa => tarefa.id == idParam);
//     const nome = tarefas[index];
//     //excluimos a vaga da lista de acordo com o seu indice.
//     tarefas.splice(index, 1);
//     res.send({
//         message: `Tarefa : ${nome.titulo} ,excluída com sucesso !`,
//     })
// })

// exporta as rotas para serem usadas no index, sempre preciso exportar ,para depois importar.
module.exports = router;