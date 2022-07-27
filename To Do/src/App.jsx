import { useEffect, useState } from 'react'
import './App.css'

export function App() {
  const [listaDeTarefas, setListaDeTarefas] = useState([]);
  const [novoItem, setNovoItem] = useState("");

  useEffect(() => {
    setListaDeTarefas(["Tarefa1", "Tarefa2"]);
  }, []);

  return (
    <div className='container'>
      <div className="new-item">
        <input 
          value={novoItem}
          onChange={(e) => setNovoItem(e.target.value)}
          type="text"
          placeholder='Tarefa'
        />
        <button onClick={() => adicionarNovoItem()}>Adicionar</button>
      </div>
      <ul className='todo-lista'>
        {listaDeTarefas.map((item, index) => (
          <li key={index} className="todo-item">
            {item}
            <button onClick={() => deletarItem(index)}>
                Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  function adicionarNovoItem(){
    if(novoItem.length <= 0){
      alert("Por favor, digite algo no campo 'Tarefa'");
      return;
    }
    let itemIndex = listaDeTarefas.indexOf(novoItem);

    if(itemIndex >= 0){
      alert("Você já adicionou essa 'Tarefa'!");
      return;
    }
    setListaDeTarefas([...listaDeTarefas, novoItem])
    setNovoItem("")
  }

  function deletarItem(index) {
    let arrayAux = [...listaDeTarefas];
    arrayAux.splice(index, 1);
    setListaDeTarefas(arrayAux)
  }
}

