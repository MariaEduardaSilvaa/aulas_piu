import { useState } from 'react';

function ContadorDeCliques() {
  const [contador, setContador] = useState(0); // Inicializa o contador com 0

  const handleClick = () => {
    setContador(contador + 1); // Aumenta o contador em 1 a cada clique
  };

  return (
    <div>
      <p>Você clicou {contador} vezes.</p>
      <button onClick={handleClick}>Clique aqui</button>
    </div>
  );
}

function Contadordecliques() {
  const handleClick = () => {
    setContador(contador - 1); // Diminui o contador em 1 a cada clique
  };

  return (
    <div>
      <p>Você clicou {contador} vezes.</p>
      <button onClick={handleClick}>Clique aqui</button>
    </div>
  );
}



export default ContadorDeCliques;