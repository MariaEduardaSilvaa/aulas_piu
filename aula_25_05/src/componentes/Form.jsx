import './Form'
import { useState } from 'react'

export default function Form(){

    const[tarefa, setTarefa] = useState('')
    const[listas, setListas] = useState([])

    const handleSubmit= (e) => {
        e.preventDefault();
        setListas([...listas, tarefa]);
       

    }
    
    const handleClear = () =>{
        setListas([])
    }

    return(
        <div>

            <h2>Lista de tarefas</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>

                        <span>Adcione uma tarefa: </span>
                        <textarea onChange={(e) => setTarefa(e.target.value)} value={tarefa}> </textarea>
                        
                    </label>

                    <input type="submit" value='Enviar'/>
                    <button onClick={handleClear}>Resetar</button>

                </div>
            </form>
            <ul>
               {listas.map((item) =><li>{item}</li>)} 
            </ul>


        </div>

    )
}