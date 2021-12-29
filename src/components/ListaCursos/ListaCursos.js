import { useState } from 'react';
import { ApiService } from '../../data/services/ApiService';

function ListaCursos() {
    const [cursos, setCursos] = useState([]);

    console.log(cursos);

    function buscarCursos() {
        ApiService.get('cursos').then((data) => setCursos(data));
    }

    return (
        <div>
            <h1>Lista de Cursos</h1>
            <button onClick={buscarCursos}>Procurar cursos</button>
            <ul>
                {cursos.map((item) => {
                    return <li key={item.id}>
                            {item.nome}: {item.cargaHoraria}
                        </li>;
                })}
            </ul>
        </div>
    );
}

export default ListaCursos;
