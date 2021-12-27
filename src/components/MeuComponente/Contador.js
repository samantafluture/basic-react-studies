import { useState } from 'react';
import myStyles from './Contador.module.css';

function Contador(props) {
    let numero = 5;

    return (
        <div className={myStyles['meu-contador']}>
            Contador: {numero} - {props.abc}
            <button onClick={() => numero = 6}>Click</button>
            {props.children}
        </div>
    );
}

export default Contador;