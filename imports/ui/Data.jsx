import React, { useState } from 'react';
import { Comp } from './Comp.jsx';

export const Data = () => {

  const [mostrarComponente, setMostrarComponente] = useState(false);
  const [mostrarComponente2, setMostrarComponente2] = useState(false);


  return (
    <div class="container" >
            
      <img src="https://via.placeholder.com/150" alt="" height='98' width='98'></img>
      <img src="https://img.icons8.com/color/344/flag-of-europe.png" alt="" height='98' width='98'></img>

      <div>
      {/* ------------------------------------------------------------------------------ */}
    
      </div>

      <table class="table">

        <thead>
          <tr>
            
            <th scope="col">Hora</th>
            <th scope="col">Div</th>
            <th scope="col">Importancia</th>
            <th scope="col">Evento</th>
            <th scope="col">Actual</th>
            <th scope="col">Previsión</th>
            <th scope="col">Anterior</th>
          </tr>
        </thead>

        <tbody>
        {/* --------------------------------------------------------------------------------------------------------------------------------------- */}
                    
          <Comp 
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
          >
          </Comp>                    

          {/* ---------------------------------------------------------------------------------------------------------------------------------*/}

          <Comp 
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
          >
          </Comp>

          <Comp 
            Hora = {"09:00"}
            Div = {"https://cdn-icons-png.flaticon.com/512/197/197593.png"}
            Importancia= {"MEDIO"}  
            Evento={"Índice de precios al por menor (Anual) (Sep)"}
            Actual = {"5.1%"}
            Previsión = {"12,4%"}
            Anterior = {"12,3%"}
            Divisa = {"GBP"}
            Fuente = {"Office for National Statistics"}
            texto = {"El índice de precios de ventas al por menor (RPI) mide los cambios en el precio de los bienes y servicios adquiridos por los consumidores con el propósito de consumo."}
          >
          </Comp>

          <Comp 
            Hora = {"10:00"}
            Div = {"https://cdn-icons-png.flaticon.com/512/197/197386.png"}
            Importancia= {"BAJO"}  
            Evento={"Índice de precios al por menor (Anual) (Sep)"}
            Actual = {"5.1%"}
            Previsión = {"12,4%"}
            Anterior = {"12,3%"}
            Divisa = {"GBP"}
            Fuente = {"Office for National Statistics"}
            texto = {"El índice de precios de ventas al por menor (RPI) mide los cambios en el precio de los bienes y servicios adquiridos por los consumidores con el propósito de consumo."}
          >
          </Comp>

          <Comp 
            Hora = {"11:00"}
            Div = {"https://cdn-icons-png.flaticon.com/512/6211/6211303.png"}
            Importancia= {"MEDIO"}  
            Evento={"Índice de precios al por menor (Anual) (Sep)"}
            Actual = {"5.1%"}
            Previsión = {"12,4%"}
            Anterior = {"12,3%"}
            Divisa = {"GBP"}
            Fuente = {"Office for National Statistics"}
            texto = {"El índice de precios de ventas al por menor (RPI) mide los cambios en el precio de los bienes y servicios adquiridos por los consumidores con el propósito de consumo."}
          >
          </Comp>

          <Comp 
            Hora = {"12:00"}
            Div = {"https://cdn-icons-png.flaticon.com/512/555/555615.png"}
            Importancia= {"ALTA"}  
            Evento={"Índice de precios al por menor (Anual) (Sep)"}
            Actual = {"5.1%"}
            Previsión = {"12,4%"}
            Anterior = {"12,3%"}
            Divisa = {"GBP"}
            Fuente = {"Office for National Statistics"}
            texto = {"El índice de precios de ventas al por menor (RPI) mide los cambios en el precio de los bienes y servicios adquiridos por los consumidores con el propósito de consumo."}
          >
          </Comp>
                  
        </tbody>
      </table>
    </div>

  );
};
