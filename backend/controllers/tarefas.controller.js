// importo o servico
const TarefasService = require('./../services/tarefas.service');


// inicializo a classe do servico para poder acessar seus metodos
const tarefasService = new TarefasService;

class tarefasController{
    
        getTarefas = async (req,res) => {
            const tarefas = await tarefasService.findAll();
            
                if(tarefas == tarefas){
                    res.status(200).send({
                        message : ('Lista de tarefas cadastradas exibida com sucesso!'),
                        message: (`  ${res.send(tarefas)} `)
                    
                    })
                    
                } 
             res.send(tarefas);      
            

    }

        getTarefasById = async(req,res) => {

            const idParam = req.params.id;
            // == que compara apenas o valor
            const tarefa =  await tarefasService.findById(idParam);
// ***********************************VERIFICAR PQ NÃO ESTÁ APARECNDO MENSAGEM DE ERRO AO COLOCAR UM ID DIFERENTE*****************************************************************
    // verifica se a tarefa digitada por id foi encontrada e retorna um status de erro
            if(!id) {
        
                res.status(404).send({error: `${idParam} ,não corresponde a nenhuma tarefa cadastrada`});
                return;
            }
    // aqui envio uma resposta com a constante achada  apos compararação.
            res.send(tarefa);
    
    


    }

        createTarefa = async (req, res) => {
        // acesso o corpo da requisicao para pegar o objeto.
        // objeto para ser cadastrado no banco.
            const tarefa = req.body;
            // if(!req.body){
            //  return;
            // }
            // com a tarefa ja no body eu mando ela para o banco,atraves da função tarefasService ,chamada create
            // para saber se a tarefa foi cadastrada uso o .then que retorna uma resposta positiva para o front
            // caso contrario o .cath que retorna um erro.
            await tarefasService.create(tarefa)
            .then(() => {
            res.send({message: `Tarefa ${tarefa.titulo} Cadastrada com sucesso`})
            })
            .catch((err) => {
            console.error(err);
            res.status(500).send({error: `Erro no servidor: ${err}`})
            })
        }

}    


module.exports = tarefasController;