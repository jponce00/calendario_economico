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

                {/* <Registro 
                    Hora = {"23:30"}
                    Div = {"https://cdn-icons-png.flaticon.com/512/330/330426.png"}
                    Importancia= {"ALTA"}  
                    Evento={"Índice PMI del sector de la construcción"}
                    Actual = {"5.1%"}
                    Previsión = {"6.7%"}
                    Anterior = {"3.4%"}
                    Divisa = {"CHF"}
                    Fuente = {"SECO"}
                    texto = {"La tasa de desempleo es una medida del porcentaje de la fuerza de trabajo total que está desempleada, pero que buscan activamente empleo y dispuestos a trabajar en Suiza. Un alto porcentaje indica debilidad en el mercado laboral. Un bajo porcentaje es un indicador positivo para el mercado de trabajo en Suiza y debe tomarse como positivo para la CHF."}
                    
                ></Registro>

                <Registro 
                    Hora = {"08:00"}
                    Div = {"https://cdn-icons-png.flaticon.com/128/555/555417.png"}
                    Importancia= {"BAJO"}  
                    Evento={"Índice de precios al por menor (Anual) (Sep)"}
                    Actual = {"5.1%"}
                    Previsión = {"12,4%"}
                    Anterior = {"12,3%"}
                    Divisa = {"GBP"}
                    Fuente = {"Office for National Statistics"}
                    texto = {"El índice de precios de ventas al por menor (RPI) mide los cambios en el precio de los bienes y servicios adquiridos por los consumidores con el propósito de consumo."}                    
                ></Registro>

                <Registro 
                    Hora = {"08:00"}
                    Div = {"https://cdn-icons-png.flaticon.com/128/555/555417.png"}
                    Importancia= {"BAJO"}  
                    Evento={"Índice de precios al por menor (Anual) (Sep)"}
                    Actual = {"5.1%"}
                    Previsión = {"12,4%"}
                    Anterior = {"12,3%"}
                    Divisa = {"GBP"}
                    Fuente = {"Office for National Statistics"}
                    texto = {"El índice de precios de ventas al por menor (RPI) mide los cambios en el precio de los bienes y servicios adquiridos por los consumidores con el propósito de consumo."}
                ></Registro>

                <Registro 
                    Hora = {"08:00"}
                    Div = {"https://cdn-icons-png.flaticon.com/128/555/555417.png"}
                    Importancia= {"BAJO"}  
                    Evento={"Índice de precios al por menor (Anual) (Sep)"}
                    Actual = {"5.1%"}
                    Previsión = {"12,4%"}
                    Anterior = {"12,3%"}
                    Divisa = {"GBP"}
                    Fuente = {"Office for National Statistics"}
                    texto = {"El índice de precios de ventas al por menor (RPI) mide los cambios en el precio de los bienes y servicios adquiridos por los consumidores con el propósito de consumo."}
                ></Registro> */}

            </tbody>
        </table>
    );
}