
import './App.css'
import Escopo from './componetes/Escopo'
import EscopoReduz from './componetes/EscopoReduz'
import Info1v from './componetes/Info1v'
import Props from './componetes/Props'
import Children from './componetes/Children'
import Card  from './componetes/Card'

function App() {
  
  return (
    <>
      {/* <Info1v/> */}
      {/* <Props nome={"maria"} newname={"ssilvaaa"} atributo={"sei laaaa"}/> */}
      <Children>
         <Card/>
      </Children>
    </>
  )
}

export default App
