import React, { useState, useEffect } from 'react';

const EffectAPI = () => {
  const [users, setUsers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(0); // Quantos usuários mostrar

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

  // Função chamada nos botões para mostrar mais um usuário
  const showNextUser = () => {
    if (visibleCount < users.length) {
      setVisibleCount(visibleCount + 1);
    }
  };

  return (
    <div>
      {/* Tabela de Nomes */}
      <div>
        <h2>Tabela de Nomes</h2>
        <button onClick={showNextUser}>Resgatar Nomes</button>
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {users.slice(0, visibleCount).map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tabela de Usernames */}
      <div>
        <h2>Tabela de Usernames</h2>
        <button onClick={showNextUser}>Resgatar Usernames</button>
        <table border="1">
          <thead>
            <tr>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {users.slice(0, visibleCount).map(user => (
              <tr key={user.id}>
                <td>{user.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tabela de Cidades */}
      <div>
        <h2>Tabela de Cidades</h2>
        <button onClick={showNextUser}>Resgatar Cidades</button>
        <table border="1">
          <thead>
            <tr>
              <th>Cidade</th>
            </tr>
          </thead>
          <tbody>
            {users.slice(0, visibleCount).map(user => (
              <tr key={user.id}>
                <td>{user.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EffectAPI;
