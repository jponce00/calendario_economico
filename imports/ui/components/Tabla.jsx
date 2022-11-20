// @ts-nocheck
import React, { useState, useContext } from 'react';
import {Registro} from './Registro';
import formnewContext from "../context/formNew";
import { NewsContext } from '../context/newsContext';

export function Tabla({noticias}) {

    const {currentUser} = useContext(NewsContext);
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
                    {currentUser ? 
                        <th scope="col">
                            <button type="button" className="btn btn-danger"  onClick={() => {
                                setformnew(true);
                            }} >Añadir</button> 
                        </th>
                    : null}
                    
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