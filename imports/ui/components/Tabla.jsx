import React, { useState, useContext } from 'react';
import {Registro} from './Registro';
import formnewContext from "../context/formNew";

export function Tabla({noticias}) {


    const { setformnew } = useContext(formnewContext);

    return (
        <table className="table tabla">
            <thead>
                <tr>						
                    <th scope="col">Hora</th>
                    <th scope="col">País</th>
                    <th scope="col">Importancia</th>
                    <th scope="col">Evento</th>
                    <th scope="col">Actual</th>
                    <th scope="col">Previsión</th>
                    <th scope="col">Anterior</th>
                    <th scope="col"></th>
                    <th scope="col"> <button type="button" className="btn btn-danger"  onClick={() => {
						
						setformnew(true);
					}} >New</button> </th>
                    
                </tr>
            </thead>
            <tbody>

                {
                    noticias.map(noticia => <Registro key={noticia._id} noticia={noticia} />)
                }

            </tbody>
        </table>
    );
}