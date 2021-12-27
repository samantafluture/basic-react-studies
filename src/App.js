import './App.css';
import Contador from './components/MeuComponente/Contador';

function App() {
  const nome = 'Samanta';

  return (
    <Contador abc={nome}>
      <h1>Hello World</h1>
    </Contador>
  );
}

export default App;
