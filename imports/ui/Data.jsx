import React, { useState } from 'react';
import { Comp } from './Comp.jsx';

export const Data = () => {

  const [mostrarComponente, setMostrarComponente] = useState(false);
  const [mostrarComponente2, setMostrarComponente2] = useState(false);
  const [probar, setprobar] = useState(false);
  const [probar1, setprobar1] = useState(false);
  const [probar2, setprobar2] = useState(false);

  const handleOnChange = () => {
    setprobar(!probar);
  };

  const handleOnChange1 = () => {
    setprobar1(!probar1);
  };

  const handleOnChange2 = () => {
    setprobar2(!probar2);
  };

  // $('.dropdown-menu').on('click', function (e) {
  //   e.stopPropagation();
  //   console.log(`${e.target.textContent} clicado!`);
  // });

//*********************************************************************************************/





//********************************************************************************************** */



  return (

    <div>

      <div class="menu">

      </div>
      
      <br />
   
      <div class = "semueve container">
        
      <div class="row">
        <div class="col-md-12">
            <div class="d-flex justify-content-between align-items-center breaking-news bg-white">
                <div class="d-flex flex-row flex-grow-1 flex-fill justify-content-center bg-danger py-2 text-white px-1 news"><span class="d-flex align-items-center">&nbsp;Breaking News &nbsp;&nbsp;</span>  &nbsp; &nbsp; <img src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="" height='18' width='17'class = "flecha" /> </div>
                <marquee class="news-scroll" behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();"> <a href="#">Noticias mas importantes y recientes </a> 
                </marquee>
            </div>
        </div>
    </div>

      </div>

      <div className=' container titulo' >
          <h1>Calendario económico</h1>
          <p>Utilice nuestro calendario económico para explorar eventos globales clave en el <br /> horizonte que podrían cambiar sutilmente o sacudir sustancialmente los mercados <br /> financieros.</p>
        </div>

      <div className='menufilt'>

      
      <div className=' container'>


      <div class="dropdown">
            <button class="btn btn-secondary  btn-lg dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            IMPORTANCIA <div class = "import">  </div> &nbsp; <div class="vertical-line" > </div> &nbsp;&nbsp;
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              
              
              <a class="dropdown-item" id='chec' href="#">

              <div>
                  <input class="custom-checkbox" type="checkbox" id="chkbx_1" value="false" checked={probar} 
                  onChange={handleOnChange}/>
                  <label for="chkbx_1">
                   <div class = "chetodo"> <span></span>  <div class = "nosalto ">  <div class = "sinsalto">H</div> &nbsp;&nbsp; ALTA  </div> </div>  &nbsp;&nbsp;  &nbsp;&nbsp; Eventos de gran importancia que históricamente han provocado volatilidad en los mercados.
                   
                  </label>
                  
              </div>

              </a>


              <a class="dropdown-item" id='chec' href="#">

                    <div>
                        <input class="custom-checkbox" type="checkbox" id="chkbx_2" value="false" checked={probar1} 
                        onChange={handleOnChange1}/>
                        <label for="chkbx_2">
                        <div class = "chetodo"> <span></span>  <div class = "nosalto ">  <div class = "sinsaltomedio">M</div> &nbsp;&nbsp; MEDIO  </div> </div>  &nbsp;&nbsp;  &nbsp;&nbsp; Es relativamente menos probable que fuerce movimientos importantes del mercado, excepto en caso de sorpresas descomunales.
                        
                        </label>
                        
                    </div>

              </a>


          

               <a class="dropdown-item" id='chec' href="#">

                    <div>
                        <input class="custom-checkbox" type="checkbox" id="chkbx_3" value="false" checked={probar2} 
                        onChange={handleOnChange2}/>
                        <label for="chkbx_3">
                        <div class = "chetodo"> <span></span>  <div class = "nosalto ">  <div class = "sinsaltobajo">B</div> &nbsp;&nbsp; BAJO  </div> </div>  &nbsp;&nbsp;  &nbsp;&nbsp; Históricamente, es un evento que mueve menos el mercado, excepto en las circunstancias más extraordinarias.
                        
                        </label>
                        
                    </div>

                </a>

              
                    

            </div>
          </div>


      </div>
      </div>




    <div class="container" >
          
          
          




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
                      
                 ></Comp>
                

                

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
                      
                 ></Comp>
                




              </tbody>
            </table>




            {/* <div class="dropdown">
            <button class="btn btn-secondary  btn-lg dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            IMPORTANCIA <div class = "import">  </div> &nbsp; <div class="vertical-line" > </div> &nbsp;&nbsp;
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              
              
              <a class="dropdown-item" id='chec' href="#">

              <div>
                  <input class="custom-checkbox" type="checkbox" id="chkbx_1" value="false" checked={probar} 
                  onChange={handleOnChange}/>
                  <label for="chkbx_1">
                   <div class = "chetodo"> <span></span>  <div class = "nosalto ">  <div class = "sinsalto">H</div> &nbsp;&nbsp; ALTA  </div> </div>  &nbsp;&nbsp;  &nbsp;&nbsp; Eventos de gran importancia que históricamente han provocado volatilidad en los mercados.
                   
                  </label>
                  
              </div>

              </a>


              <a class="dropdown-item" id='chec' href="#">

                    <div>
                        <input class="custom-checkbox" type="checkbox" id="chkbx_2" value="false" checked={probar1} 
                        onChange={handleOnChange1}/>
                        <label for="chkbx_2">
                        <div class = "chetodo"> <span></span>  <div class = "nosalto ">  <div class = "sinsaltomedio">M</div> &nbsp;&nbsp; MEDIO  </div> </div>  &nbsp;&nbsp;  &nbsp;&nbsp; Es relativamente menos probable que fuerce movimientos importantes del mercado, excepto en caso de sorpresas descomunales.
                        
                        </label>
                        
                    </div>

              </a>


          

               <a class="dropdown-item" id='chec' href="#">

                    <div>
                        <input class="custom-checkbox" type="checkbox" id="chkbx_3" value="false" checked={probar2} 
                        onChange={handleOnChange2}/>
                        <label for="chkbx_3">
                        <div class = "chetodo"> <span></span>  <div class = "nosalto ">  <div class = "sinsaltobajo">B</div> &nbsp;&nbsp; BAJO  </div> </div>  &nbsp;&nbsp;  &nbsp;&nbsp; Históricamente, es un evento que mueve menos el mercado, excepto en las circunstancias más extraordinarias.
                        
                        </label>
                        
                    </div>

                </a>

              
                    

            </div>
          </div> */}



  



          <div className="result">
            Above checkbox is {probar ? "checked" : "un-checked"}.
          </div>

          <div className="result">
            Above checkbox is {probar1 ? "checked" : "un-checked"}.
          </div>

          <div className="result">
            Above checkbox is {probar2 ? "checked" : "un-checked"}.
          </div>



    </div>



    </div>

  );
};
