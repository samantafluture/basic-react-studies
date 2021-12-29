import { useState } from 'react';
import { MinhaDiv } from './Contador.styled';
import { MeuBotao } from './Contador.styled';

function Contador(props) {
    const [numero, setNumero] = useState(0);

    return (
        <MinhaDiv>
            Contador: <span>{numero} - {props.abc}</span>
            <MeuBotao onClick={() => setNumero(numero + 1)}>Click</MeuBotao>
            {props.children}
        </MinhaDiv>
    );
}

export default Contador;