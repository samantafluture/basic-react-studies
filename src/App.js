import './App.css';
import { useEffect } from 'react';
import Contador from './components/MeuComponente/Contador';
import ListaCursos from './components/ListaCursos/ListaCursos';
import useOnlineStatus from './data/hooks/useOnlineStatus';

function App() {
    const nome = 'Samanta';
    const isOnline = useOnlineStatus();

    useEffect(() => {
      if (!isOnline) {
        alert('Você está offline');
      }
    }, [isOnline]);

    return (
        <>
            <Contador abc={nome}>
                <h1>Hello World</h1>
            </Contador>
            <ListaCursos />
            <div>
                <h2>Você está {isOnline ? 'online' : 'offline'}</h2>
            </div>
        </>
    );
}

export default App;
