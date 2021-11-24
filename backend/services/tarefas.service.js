// importar o nosso model para usar as funcoes do mongo no servico
const Tarefa = require ('./../models/tarefa');

class tarefasService {
    // vai conectar com o banco de dados e retornar a lista de vagas a tarefa aqui é a colecytion q vem do mongoose
    findAll = async () => await Tarefa.find();
  
    // vai buscar um unico item no banco de acordo com o seu id
    findById = async (id) => await Tarefa.findById(id);

    // cria um objeto
    create = async (tarefa) => await Tarefa.create(tarefa);  
    
    // edita um objeto pelo id
    edit = async (id, tarefa) => await Tarefa.updateOne({ _id: id}, tarefa);

    // exclui um objeto pelo id
    delete = async (id) => await Tarefa.deleteOne({ _id: id});

  }
    

  
  module.exports = tarefasService; 