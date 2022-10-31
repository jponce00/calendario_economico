import React from 'react';
import {Registro} from './Registro';

export function Tabla({noticias}) {
    return (
        <table class="table tabla">
            <thead>
                <tr>						
                    <th scope="col">Hora</th>
                    <th scope="col">Pais</th>
                    <th scope="col">Importancia</th>
                    <th scope="col">Evento</th>
                    <th scope="col">Actual</th>
                    <th scope="col">Previsión</th>
                    <th scope="col">Anterior</th>
                </tr>
            </thead>
            <tbody>

                {
                    noticias.map(noticia => <Registro noticia={noticia} />)
                }

            </tbody>
        </table>
    );
}