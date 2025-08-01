import './Tema.css';
import { useState } from 'react';

export default function Tema({children }) {
     const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };


  return (
    <div className={theme}>
        <button onClick={toggleTheme}>
        Alternar Tema ({theme === 'light' ? 'Claro' : 'Escuro'})
      </button>
            
    </div>
  ) 
}
