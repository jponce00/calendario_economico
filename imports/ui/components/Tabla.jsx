// @ts-nocheck
import React, { useState, useContext } from 'react';
import {Registro} from './Registro';
import formnewContext from "../context/formNew";
import { NewsContext } from '../context/newsContext';

export function Tabla({noticias}) {

    const {currentUser} = useContext(NewsContext);
    const { setformnew } = useContext(formnewContext);

    return (
        <>
            {currentUser ?                             
                <button type="button" className="btn btn-danger mb-2"  onClick={() => {
                    setformnew(true);
                }} >Añadir</button>                            
            : null}
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
                        {currentUser ? <><th className='text-center' scope="col" colSpan={2}>Opciones</th></> : null}
                    </tr>
                </thead>
                <tbody>

                    {
                        noticias.map(noticia => <Registro key={noticia._id} noticia={noticia} />)
                    }

                </tbody>
            </table>
        </>
    );
}