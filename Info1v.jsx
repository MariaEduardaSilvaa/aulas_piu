import{useState} from "react"

export default function Info1v(){
    // let valor = 0
    let[valor,setValor] = useState(0)

    return(
        <>
        <div>
            <button onClick={()=> setValor(valor+1)}>Cliques {valor}</button>
        </div>
        </>
    )
}