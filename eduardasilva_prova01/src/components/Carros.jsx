import { useState } from "react"

export default function dados_carros(props){
       let [carros, setcarros] = useState(props.carros)

    return(
        <>
        <p>Modelo: {props.modelo}</p>
        <p> Ano: {props.ano}</p>
        </>
    )

}