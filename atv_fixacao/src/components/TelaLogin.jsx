import React, { useState } from 'react';

function TelaLogin() {
  const [formData, setFormData] = useState({
    login: '',
    senha: ''
  });

  // Atualiza os dados do formulário conforme o usuário digita
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Envia os dados ao console quando o formulário for enviado
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita o recarregamento da página
    console.log('Dados do formulário:', formData);
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>
          Login:
          <input
            type="text"
            name="login"
            value={formData.login}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <button type="submit" style={styles.button}>Entrar</button>
      </form>
    </div>
  );
}

// Estilos inline simples
const styles = {
  container: {
    width: '300px',
    margin: '100px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  input: {
    padding: '8px',
    fontSize: '14px'
  },
  button: {
    padding: '10px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default TelaLogin;