// Schemas --> é a estrutura de dados do documento('linha tabela') que é aplicado por meio da camada de aplicativo
// Documents --> sao como se fosse as linhas da nossa tabela ,nossos dados em si.
// Model --> São construtores que pegam um schema e cria uma instancia de um documento equivalente a um registro em um banco de dados relacional.
// Collections --> são equivalentes as tabelas no banco de dados e elas podem conter varios documentos JSON.



// importar o mongoose
const mongoose = require('mongoose');

//  Model ,a costante é no singular pois é somente um modelo de tarefa, mesmo q sejam cadastradas varias.

const tarefaModel = new mongoose.Schema({
    titulo: { type: String,required:true},
    descricao: { type: String,required:true},
    prioridade: { type: String,required:true},
    status: { type: String,required:true},
    prazo: { type: Number,required:true},
    dataCriacao: { type: Date,default:Date.now},

})

// inicializar o meu model na collection tarefas(colecytion é a que foi criada no Mongo DB) com o schema tarefaModel
//  aceita 2 parametros a colection q eu criam no BD e a constante que foi criada acima, como modelo
const Tarefa = mongoose.model('tarefasbd', tarefaModel);

// estou exportando a const Tarefa = mongoose.model('tarefasbd', tarefaModel);

module.exports = Tarefa;
