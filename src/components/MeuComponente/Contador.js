import { useState } from 'react';
import myStyles from './Contador.module.css';

function Contador(props) {
    const [numero, setNumero] = useState(0);

    return (
        <div className={myStyles['meu-contador']}>
            Contador: {numero} - {props.abc}
            <button onClick={() => setNumero(numero + 1)}>Click</button>
            {props.children}
        </div>
    );
}

export default Contador;