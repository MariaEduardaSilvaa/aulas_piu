import TelaLogin from './components/TelaLogin'
import Lista from './components/Lista'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div>
      < TelaLogin/>
    </div>
    // <div>
    //   <Lista/>
    // </div>
  
  );
}

export default App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);