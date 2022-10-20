import React, { useState } from 'react';
import { Comp } from './Registro.jsx';
import {Tabla} from './Tabla';

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

		<div className="contenedor-todo">

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


			<div class="container contenedor-tabla">								

				<Tabla />

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
