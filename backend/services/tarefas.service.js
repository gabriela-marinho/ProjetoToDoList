// importar o nosso model para usar as funcoes do mongo no servico
const Tarefa = require ('./../models/tarefa');

class tarefasService {
    // vai conectar com o banco de dados e retornar a lista de vagas a tarefa aqui é a colecytion q vem do mongoose
    findAll = async () => await Tarefa.find();
  
    // vai buscar um unico item no banco de acordo com o seu id
    findById = async (id) => await Tarefa.findById(id);

    // findByIdAndUpdate = async ()=> await Tarefa.findByIdAndUpdate(id);

    // findByIdAndDelete = async () => await Tarefa.findByIdAndRemove(id);
  
  }
  
  module.exports = tarefasService;