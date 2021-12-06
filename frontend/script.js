
// atribuindo a endpoint da api do backend em um constante
const apiUrl = 'http://localhost:3015/tarefas';
// buscar o elemento no html da minha lista onde irei inserir as vagas
const lista = document.getElementById('lista')



// buscar os elementos no html
let tituloEl = document.getElementById('titulo');
let prioridadeEl = document.getElementById('prioridade');
let prazoEl = document.getElementById('prazo');
let descricaoEl = document.getElementById('descricao');
let statusEl = document.getElementById('status');


// [GET] /musicas = retornar e listar a lista de musicas na tela.
const getTarefas = async() => {
  // vou usar a API fech do javascript para disparar uma req do tipo GET para o backend.
  // faz uma requisicao do tipo GET para o backend
  const response = await fetch(apiUrl);
  // musicas = lista de musicas
  const tarefas = await response.json();

  tarefas.map((tarefa) => {
    lista.insertAdjacentHTML('beforeEnd', ` 
    <div class="col">
        <div class="card">
        ${tarefa.titulo}
        </div>
            <div class="card-body">
                <h5 class="card-title">${tarefa.prioridade}</h5>
                 <h5 class="card-title">${tarefa.prazo}</h5>
                <p class="card-text">${tarefa.descricao}</p>
                <a href="#" class="btn btn-primary">${tarefa.status}</a>
                </div>
    
    `)
  })
} 

const submitForm = async() => {
    // event.preventDefault();
  
    const tarefa = {
      titulo: tituloEl.value,
      prioridade: prioridadeEl.value,
      prazo: prazoEl.value,
      descricao: descricaoEl.value,
      satus: statusEl.value,
      
    }

    const request = new Request(`${apiUrl}/add`, {
        method: 'POST',
        body: JSON.stringify(tarefa),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
    
      const response = await fetch(request);
      const result = await response.json();
      alert(result.message);
    
      
      lista.innerHTML = '';
    
      getTarefas();
    
    }
    
    getTarefas();