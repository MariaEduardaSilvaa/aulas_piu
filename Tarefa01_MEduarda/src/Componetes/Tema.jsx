import React from 'react';

export default function Tema({ tema, toggleTema }) {
  return (
    <button className="botao-tema" onClick={toggleTema}>
      Mudar para {tema === 'claro' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
}