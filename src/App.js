import './App.css';
import { useEffect } from 'react';
import Contador from './components/MeuComponente/Contador';
import ListaCursos from './components/ListaCursos/ListaCursos';
import useOnlineStatus from './data/hooks/useOnlineStatus';
import { Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './ui/themes/theme';

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
            <ThemeProvider theme={theme}>
                <Contador abc={nome}>
                </Contador>
                <ListaCursos />
                <div>
                    <h2>Você está {isOnline ? 'online' : 'offline'}</h2>
                </div>
                <Button variant={'contained'}>Clique aqui</Button>
            </ThemeProvider>

            <Button variant={'contained'}>Clique aqui</Button>
        </>
    );
}

export default App;
