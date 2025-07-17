import './App.css'
import Lista from './assets/components/Lista'
import ReactDOM from 'react-dom/client'


const App = () => {
  return (
    <div>
      <h1>Lista de Usuários</h1>
      <Lista />
    </div>
  );
};
export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);