import React, { useState, useEffect } from 'react';

export const Comp = (datos) => {

  const [mostrarComponente, setMostrarComponente] = useState(false);
  const al = "MEDIO";


  return (

    <React.Fragment>
      {/* Lo que se mostrar sin ampliar */}
      <tr>
        <td> {datos.Hora} </td>
        <td>
          <img src={datos.Div} alt="" height='27' width='27'></img>
        </td>
        <td>
          <div class= {datos.Importancia}>
            {datos.Importancia}
          </div> 
        </td>
        <td> {datos.Evento} </td>
        <td> {datos.Actual} </td>
        <td> {datos.Previsión} </td>
        <td> {datos.Anterior} </td>
        <td> 
          <button onClick={() => setMostrarComponente(!mostrarComponente)}  >
            {/* imagen de la flecha   */}
            <img src="https://img.icons8.com/material/344/chevron-down--v1.png" alt="" height='11' width='11'></img>
          </button>
        </td>
      </tr>

      {/* Lo que se mostrara al ampliar */}
      <tr class="">
        <td colspan="7">
          <div className={mostrarComponente ? "show-element" : null}>
            {mostrarComponente && <div class =" desplegar "> 
              <div class = "cointainer"> 

                <div class='descripcion' >
                  <p> <b> Imp: </b> &nbsp; <div class= {datos.Importancia}>{datos.Importancia}</div> </p>
                  <p> <b>País: </b> &nbsp; &nbsp;&nbsp;<img src= {datos.Div} alt="" height='27' width='27'></img> </p>
                  <p> <b>Divisa: </b>  &nbsp;	{datos.Divisa} </p>
                  <p> <b>Fuente: </b> &nbsp;	{datos.Fuente} </p> 
                </div>
                <div class= "masinfo" > 
                  <p> {datos.texto} </p> 
                </div>

              </div>

            </div>}
          </div>

        </td>  

      </tr>

    </React.Fragment>

  );
};
