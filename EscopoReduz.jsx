import './EscopoReduz.css'

const EscopoReduz = () => {
    function handleClick(){
        alert("handleClick")
    }

    return(
        <>
        <button onClick={()=> console.log("Vc clicou!")}>clique aqui 2</button>
        <div>
            <button onClick={()=> alert("vc clicou novamente!")}>novo butão</button>
        </div>
        <div>
            <button onClick={handleClick}>handleClick</button>
        </div>
        <div className='containe' onChange={()=> alert("container")}>
            eduarda #bloqueada

        </div>
        </>
    )

}

export default EscopoReduz