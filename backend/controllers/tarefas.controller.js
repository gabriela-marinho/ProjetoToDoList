// importo o servico
const TarefasService = require('./../services/tarefas.service');


// inicializo a classe do servico para poder acessar seus metodos
const tarefasService = new TarefasService;

class tarefasController{
    
        getTarefas = async(req,res) => {
            const tarefas = await tarefasService.find
            res.send(tarefas);
            if(tarefas == tarefas){
                res.status(200).send({
                message: 'Lista de tarefas cadastradas exibida com sucesso!'
                })
                return;
        }
            
            

    }

        getTarefasById = async(req,res) => {

            const idParam = req.params.id;
            // == que compara apenas o valor
            const tarefa =  await tarefasService.findById(idParam);

    // verifica se a tarefa digitada por id foi encontrada e retorna um status de erro
            if(!tarefa) {
        
                res.status(404).send({error: `${idParam} ,não corresponde a nenhuma tarefa cadastrada`});
                return;
            }
    // aqui envio uma resposta com a constante achada  apos compararação.
            res.send(tarefa);
    
    


    }


}    


module.exports = tarefasController;