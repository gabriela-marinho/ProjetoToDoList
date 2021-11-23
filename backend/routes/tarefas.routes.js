// const { Router } = require('express');
const express = require('express');

// importo o modulo controller q eu ja ahvia exportado no tarefas.controller.js, para acessar as funçoes
const TarefasController = require('./../controllers/tarefas.controller');

// inicializar as rotas do express
const router = express.Router();

// inicializo a classe controller
const tarefasController = new TarefasController;

const tarefas = [
    {
        id: Date.now(),
        titulo: 'Fazer Mercantil',
        descricao: 'desenvolvedor front-endcomprar leite e pão',
        prioridade: 'alta,media ou baixa  - pesquisar como faz a seleção',
        status: 'fazer,fazendo ou feito - pesquisar como faz a seleção',
        prazo: '3 dias',
        data: 'pesquisar como faz para colocar a data'
        
    },
]

// função GET , RETORNANDO A LEITURA DE TODAS AS TAREFAS
router.get('/',tarefasController.getTarefas) 
// => {
//     res.send(tarefas);
// // *****************************************PRECISO COLOCAR O STATUS 200 QND A LISTA ´E EXIBIDA? SE SIM COMO FAÇO?*******************************************************
//     if(tarefas == tarefas){
//         res.status(200).send({
//             message: 'Lista de tarefas cadastradas exibida com sucesso!'
//         })
//         return;
//     }
    
// })

//função GET usando o ID, req.params é um objeto que contém propriedades para a rota nomeada que será o ID
//[GET /vagas/:id - retorna um item por id
router.get('/:id', tarefasController.getTarefasById);
// router.get('/:id',(req,res) =>{
//     //    acesso o id recebido via parametro. aqui estou comparando a constante que pego da requisição via params e comparando com a constante  tarefa . ID(PARAMETRO ID)
//     const idParam = req.params.id;
//     // == que compara apenas o valor
//     const tarefa = tarefas.find(tarefa => tarefa.id == idParam);

//     // verifica se a tarefa digitada por id foi encontrada e retorna um status de erro
//     if(!tarefa) {
        
//         res.status(404).send({error: `${idParam} ,não corresponde a nenhuma tarefa cadastrada`});
//         return;
//     }
//     // aqui envio uma resposta com a constante achada  apos compararação.
//     res.send(tarefa);
    
    
// })

// função POST para criar uma tarefa
router.post('/add', (req,res) =>{
    const tarefa = req.body;

    // validacao se existe os campos

    if(!tarefa || !tarefa.titulo || !tarefa.descricao || !tarefa.prioridade || !tarefa.status || !tarefa.prazo|| !tarefa.data ) {
        res.status(400).send({
            message: 'Todos os Campos são Obrigatórios!'
        })
        return;
    }
    // aqui eu faço o id ser automatico no preenchimento
    tarefa.id = Date.now();
    // aqui eu dou um push nos objetos da minha lista(tarefas) na constante tarefa(acima) para vir na requisição do body
    tarefas.push(tarefa);
    res.status(201).send({
        message: 'Cadastro com sucesso',
        // ************************ OQ É O DATA? ELE MOSTRA OQ?, SEI Q É O CADASTRO************************************************************************************
        data: tarefa
    }); 
})
// ***********************************************ver A FUNÇÃO PUT NOVAMENTE*************************************************
// função PUT para  editar uma vaga de acordo com o id
router.put('edit/:id',(req,res) =>{
    // o objeto que veio do front para atualizar a vaga com o id recebido
    const tarefaEdit = req.body;
     // o id recebido via parametro
     const idParam = req.params.id;
     // procura o indice da vaga pre cadastrada na lista de acordo com o id recebido 
    let index = tarefas.findIndex(tarefa => tarefa.id == idParam);

    if(index < 0) {
        res.status(404).send({
            error: `Tarefa com id ${idParam} não encontrada para edição`
        })
        return;
    }

    // spread operator ...
    // faz um espelho do item na lista e um espelho do objeto atualizado e junta os 2
    tarefas[index] = {
        ...tarefas[index],
        ...tarefaEdit
    }

    res.send({
        message: `Tarefa ${tarefas[index].titulo} atualizada com sucesso!`,
        data: tarefas[index]
    })
})

// função DELETE, exclui um item de acordo com o id
router.delete('/delete/:id',(req,res) =>{
    const idParam = req.params.id;
    const index = tarefas.findIndex(tarefa => tarefa.id == idParam);
    const nome = tarefas[index];
    //excluimos a vaga da lista de acordo com o seu indice.
    tarefas.splice(index, 1);
    res.send({
        message: `Tarefa : ${nome.titulo} ,excluída com sucesso !`,
    })
})

// exporta as rotas para serem usadas no index, sempre preciso exportar ,para depois importar.
module.exports = router;