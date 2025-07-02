import './Form'
import { useState } from 'react'

export default function Form() {
  const [tarefa, setTarefa] = useState('')
  const [listas, setListas] = useState([])

  // Adicionar nova tarefa como pendente
  const handleSubmit = (e) => {
    e.preventDefault()
    if (tarefa.trim() === '') return
    setListas([...listas, { texto: tarefa.trim(), status: 'pendente' }])
    setTarefa('')
  }

  // Limpar lista
  const handleClear = () => {
    setListas([])
  }

  // Alterar status de uma tarefa específica
  const mudarStatus = (index, novoStatus) => {
    const novasTarefas = listas.map((item, i) =>
      i === index ? { ...item, status: novoStatus } : item
    )
    setListas(novasTarefas)
  }

  // Reorganizar tarefas - subir uma tarefa
  const moverCima = (index) => {
    if (index === 0) return // Já está no topo
    const novasTarefas = [...listas]
    const temp = novasTarefas[index - 1]
    novasTarefas[index - 1] = novasTarefas[index]
    novasTarefas[index] = temp
    setListas(novasTarefas)
  }

  // Reorganizar tarefas - descer uma tarefa
  const moverBaixo = (index) => {
    if (index === listas.length - 1) return // Já está embaixo
    const novasTarefas = [...listas]
    const temp = novasTarefas[index + 1]
    novasTarefas[index + 1] = novasTarefas[index]
    novasTarefas[index] = temp
    setListas(novasTarefas)
  }

  return (
    <div>
      <h2>Lista de tarefas</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <span>Adicione uma tarefa: </span>
            <textarea
              onChange={(e) => setTarefa(e.target.value)}
              value={tarefa}
            />
          </label>

          <input type="submit" value="Enviar" />
          <button type="button" onClick={handleClear}>
            Resetar
          </button>
        </div>
      </form>

      <ul>
        {listas.map((item, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration:
                  item.status === 'realizada' ? 'line-through' : 'none',
                color:
                  item.status === 'nao realizada'
                    ? 'red'
                    : item.status === 'pendente'
                    ? 'orange'
                    : 'black',
                marginRight: '10px',
              }}
            >
              {item.texto}
            </span>

            {/* Botões de status */}
            <button onClick={() => mudarStatus(index, 'realizada')}>
              Realizada
            </button>
            <button onClick={() => mudarStatus(index, 'nao realizada')}>
              Não realizada
            </button>
            <button onClick={() => mudarStatus(index, 'pendente')}>
              Pendente
            </button>

            {/* Botões para mover */}
            <button onClick={() => moverCima(index)}>↑</button>
            <button onClick={() => moverBaixo(index)}>↓</button>
          </li>
        ))}
      </ul>
    </div>
  )
}