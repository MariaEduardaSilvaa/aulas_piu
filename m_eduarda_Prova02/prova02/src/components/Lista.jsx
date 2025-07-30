import React, { useState, useEffect } from 'react';

  // Buscar dados da API
  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setUsers(data);
};

  // Carregar usuários uma única vez
  useEffect(() => {
    fetchUsers();
  }, []);


export default function InputRange() {
  const [value, setValue] = useState(1);

  const handleChange = (event) => {
    const newValue = Math.max(1, Math.min(10, Number(event.target.value)));
    setValue(newValue);
  };

  return (
    <div>
      <input
        type="number"
        min="1"
        max="10"
        value={value}
        onChange={handleChange}
      />
      <p>Valor selecionado: {value}</p>
    </div>
  );
}

