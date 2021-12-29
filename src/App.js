import './App.css';
import Contador from './components/MeuComponente/Contador';
import ListaCursos from './components/ListaCursos/ListaCursos';

function App() {
    const nome = 'Samanta';

    return (
        <>
            <Contador abc={nome}>
                <h1>Hello World</h1>
            </Contador>
            <ListaCursos />
        </>
    );
}

export default App;
