import React, { useState } from 'react';
import {Tabla} from './Tabla';

export function Data({noticias}) {

	const [mostrarComponente, setMostrarComponente] = useState(false);
	const [mostrarComponente2, setMostrarComponente2] = useState(false);
	const [chkBaja, setChkBaja] = useState(false);
	const [chkAlta, setChkAlta] = useState(false);
	const [chkMedia, setChkMedia] = useState(false);

	//Opciones de Región
	const [opcionAmerica, setOpcionAmerica] = useState(false);
	const [opcionEuropa, setOpcionEuropa] = useState(false);
	const [opcionAsia, setOpcionAsia] = useState(false);

	// Para saber la fecha escogida:
	const [opcionAyer, setOpcionAyer] = useState(false);
	const [opcionHoy, setOpcionHoy] = useState(true);
	const [opcionManana, setOpcionManana] = useState(false);

	//Se obtienen los datos de los filtros Importancia y Región
	const [numeroregionglobal, setnumeroregionglobal] = useState(0);
	const [valores_region, setvalores_region] = useState([""]);
	const [numeroimportanciaglobal, setnumeroimportanciaglobal] = useState(0);
	const [valores_importancia, setvalores_importancia] = useState([""]);


	let noticiasFiltro = noticias;
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

	// $(".mandarfiltro").click(function() { 
	  
	//   var numeroregion = $(".chec_region:checked").length; //Creamos una Variable y Obtenemos el Numero de Checkbox que esten Seleccionados
	  
	//   setnumeroregionglobal(numeroregion);
	//   // obtener valores de lo checbox
	//   var valores = new Array();
	//   var numeroimportancia = 0

	//   //OBTENESMOS LOS VALORES EN FORMA DE ARRAY DEL FILTRO DE REGION
	//       $('.chec_region:checked').each(function() {
	//         valores.push($(this).val());
	//       });
	//       setvalores_region(valores)

	//       //OBTENEMOS LA CANTIDAD DE CHECBOX  DEL FILTRO DE IMPORTANCIA
	//       numeroimportancia = $(".chec_importancia:checked").length;

		  
	//       setnumeroimportanciaglobal(numeroimportancia);

	//       //obtenesmo los valores en forma de array del filtro de IMPORTANCIA DE LA NOTICIA
	//       var valoresimportancia = new Array();
	//       $('.chec_importancia:checked').each(function() {
	//         valoresimportancia.push($(this).val());
	//       });
	//       setvalores_importancia(valoresimportancia)
	//       console.log("bucle n")
	// })
	// termina  .......................................

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

	//Obtener todos los datos
	function todosdatos(){

		//Creamos una variable y obtenemos el número de Checkbox que estén seleccionados en el filtro de Región
		var numeroregion = $(".chec_region:checked").length; 
		
		setnumeroregionglobal(numeroregion);
		
		//Obtener valores de lo checbox
		var valores = new Array();
		var numeroimportancia = 0

		//Obtenemos los valores en forma de Array en el filtro de Región
			$('.chec_region:checked').each(function() {
			  valores.push($(this).val());
			});
			setvalores_region(valores)

			//Obtenemos la cantidad del checkbox del filtro de Región
			numeroimportancia = $(".chec_importancia:checked").length;

			setnumeroimportanciaglobal(numeroimportancia);

			//Obtenermos los valores en dorma de Array del filtro Importancia de la noticia
			var valoresimportancia = new Array();
			$('.chec_importancia:checked').each(function() {
			  valoresimportancia.push($(this).val());
			});
			setvalores_importancia(valoresimportancia)
			console.log("bucle n")
	  }
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// funion de chec selecionados numero IMPORTANCIA 
        // const [numeroimportanciaglobal, setnumeroimportanciaglobal] = useState(0);

        // $(".butonprimer").ready(function() { 
          // var numeroimportancia = 0
          // numeroimportancia = $(".chec_importancia:checked").length; //Creamos una Variable y Obtenemos el Numero de Checkbox que esten Seleccionados
          
          // setnumeroimportanciaglobal(numeroimportancia);
        // })
// termina  .......................................

  // funcion de chec, obtener valores de IMPORTANCIA
                //const [valores_importancia, setvalores_importancia] = useState([""]);

                // $(".butonprimer").ready(function() { 
                //  // var valoresimportancia = new Array();

                //   // $('.chec_importancia:checked').each(function() {
                //   //   valoresimportancia.push($(this).val());
                //   // });
                //   // $(".chec_importancia:checked").each(function() {
                //   //   alert($(this).val());
                //   //  });
                //   // console.log(valoresimportancia)
                //   // setvalores_importancia(valoresimportancia)
                  
                // })
// termina  .......................................

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
	
	//Función de Importancia de la noticia
	function filtrarImportancia() {		
		let baja = chkBaja ? 'BAJA' : null;
		let media = chkMedia ? 'MEDIA' : null;
		let alta = chkAlta ? 'ALTA' : null;
		let filtro = true;

		if (baja!=null || media!=null || alta!=null) {
			noticiasFiltro = noticiasFiltro.filter(noticia => noticia.importance==baja || noticia.importance==media || noticia.importance==alta);
		} else {			
			filtro = false;
		}

		return filtro;
	}

	const handleOnChangeChkBaja = () => {
		setChkBaja(!chkBaja);		
	};

	const handleOnChangeChkMedia = () => {
		setChkMedia(!chkMedia);		
	};

	const handleOnChangeChkAlta = () => {
		setChkAlta(!chkAlta);		
	};

	//Funciones de Seleción de Región
	function filtrarRegion() {		
		let america = opcionAmerica ? 'America' : null;
		let europa = opcionEuropa ? 'Europa' : null;
		let asia = opcionAsia ? 'Asia' : null;
		let filtro = true;

		if (america!=null || europa!=null || asia!=null) {
			noticiasFiltro = noticiasFiltro.filter(noticia => noticia.country.region==america || noticia.country.region==europa || noticia.country.region==asia);
		} else {			
			filtro = false;
		}

		return filtro;
	}

	const seleccionAmerica = () => {
		setOpcionAmerica(!opcionAmerica);		
	};

	const seleccionEuropa = () => {
		setOpcionEuropa(!opcionEuropa);		
	};

	const seleccionAsia = () => {
		setOpcionAsia(!opcionAsia);		
	};


	// Cambios de fecha:
	function filtrarFecha() {
		let filtroFecha = new Date();
		opcionAyer ? filtroFecha.setDate(filtroFecha.getDate() - 1) : opcionManana ? filtroFecha.setDate(filtroFecha.getDate() + 1) : filtroFecha;
		let year = filtroFecha.getFullYear().toString();
		let month = (filtroFecha.getMonth() + 1).toString();
		let day = filtroFecha.getDate().toString();
		noticiasFiltro = noticias.filter(noticia => noticia.year==year && noticia.month==month && noticia.day==day);
		
		return true;
	}

	const seleccionAyer = () => {
		setOpcionAyer( !opcionAyer );
		setOpcionHoy( opcionHoy ? !opcionHoy : opcionHoy );
		setOpcionManana( opcionManana ? !opcionManana : opcionManana );
		filtrarFecha();
	}

	const seleccionHoy = () => {
		setOpcionAyer( opcionAyer ? !opcionAyer : opcionAyer );
		setOpcionHoy( !opcionHoy );
		setOpcionManana( opcionManana ? !opcionManana : opcionManana );
		filtrarFecha();
	}

	const seleccionManana = () => {
		setOpcionAyer( opcionAyer ? !opcionAyer : opcionAyer );
		setOpcionHoy( opcionHoy ? !opcionHoy : opcionHoy );
		setOpcionManana( !opcionManana );
		filtrarFecha();
	}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
	
  // $('.dropdown-menu').on('click', function (e) {
  //   e.stopPropagation();
  //   console.log(`${e.target.textContent} clicado!`);
  // });

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

	$(function () {
		$('.sev_check').click(function(e) {
		$('.sev_check').not(this).prop('checked', false);
		});
	});
	
	
	const [newimportancia, setnewimportancia] = useState("0");
	
	const cambioimportancia = e=>{
		setnewimportancia(e.target.value);
	}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

	// $('input:radio[name="solo"]').change(
	//   function(){
	//       if (this.checked && this.value == '1') {
	//         setsolo("bajo")
	//       }
	//       if (this.checked && this.value == '2') {
			
	//       }
	//       if (this.checked && this.value == '3') {
	//         setsolo("bajo")
	//       }
	// });
	
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//  Condicionales de los filtros


//********************************************************************************************** */

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

	return (

		//Contenedor principal
		<div className="contenedor-todo">


			{/* CONTENEDOR GRIS */}
			<div className="menu"> 
				{/* <h1>CONTENEDOR GRIS</h1> */}
			</div>	
			
			{/* Espacio entre el contener gris y el Breaking News */}
			<br /> 

			{/* Contenedor de Breaking News */}
			<div className = "semueve container">
				
				<div className="row">
					<div className="col-md-12">
						<div className="d-flex justify-content-between align-items-center breaking-news bg-white">
							<div className="d-flex flex-row flex-grow-1 flex-fill justify-content-center bg-danger py-2 text-white px-1 news"><span className="d-flex align-items-center">&nbsp;Breaking News &nbsp;&nbsp;</span>  &nbsp; &nbsp; <img src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="" height='18' width='17'className = "flecha" /> </div>
							
							{/* Texto en movimiento */}
							<marquee className="news-scroll" behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();"> <a href="#">Noticias más importantes y recientes </a> </marquee>
						</div>
					</div>
				</div>
			</div>

			{/* Contenedor de Calendario Económico */}
			<div className=' container titulo' >
				<h1>Calendario Económico</h1>
				<p>Utilice nuestro calendario económico para explorar eventos globales clave en el <br /> horizonte que podrían cambiar sutilmente o sacudir sustancialmente los mercados <br /> financieros.</p>
			</div>

			 {/* Contenedor de Fechas */}
			<div className='container '>

				<div className="containerfecha">
					
					<div className="rowfecha">
                 
						  {/* Ayer */}
                          <label className='labelfecha'>
                            <input type="radio" name="fecha" className='inputfecha' checked={opcionAyer} onChange={seleccionAyer} />
                            <div className="icon-box">
                            <img src="https://cdn-icons-png.flaticon.com/512/42/42449.png" alt="" height='33' width='30'></img>
                              <span className='spanfecha' >AYER</span>
                            </div>
                          </label>

                          {/* Hoy */}
                          <label className='labelfecha'>
                            <input type="radio" name="fecha" className='inputfecha' value="true" checked={opcionHoy} onChange={seleccionHoy} />
                            <div className="icon-box">
                            <img src="https://cdn-icons-png.flaticon.com/512/42/42449.png" alt="" height='33' width='30'></img>
                              <span className='spanfecha' >HOY</span>
                            </div>
                          </label>

                          {/* Mañana */}
                          <label className='labelfecha'>
                            <input type="radio" name="fecha" className='inputfecha' checked={opcionManana} onChange={seleccionManana} />
                            <div className="icon-box">
                            <img src="https://cdn-icons-png.flaticon.com/512/42/42449.png" alt="" height='33' width='30'></img>
                              <span className='spanfecha' >MAÑANA</span>
                            </div>
                          </label>

                	</div>
              	</div>
        	</div>
        {/* termina filtro de fecha */}


{/* //---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

		{/* <div className='container'>

        <div class="dropdown">
            <button class="btn btn-secondary  btn-lg dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            IMPORTANCIA <div class = "import">  </div> &nbsp;  &nbsp;&nbsp;
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              
            <div class = "rellenar"></div>
              <a class="dropdown-item" id='chec' href="#">
              <div>
                  <input class="custom-checkbox" type="radio" id="chkbx_1" value="1" name="solo" 
                  checked = {newimportancia == 1 ? true:false }  onChange={cambioimportancia}
                  />
                  <label for="chkbx_1">
                   <div class = "chetodo"> <span></span>  <div class = "nosalto ">  <div class = "sinsalto">H</div> &nbsp;&nbsp; ALTA  </div> </div>  &nbsp;&nbsp;  &nbsp;&nbsp; Eventos de gran importancia que históricamente han provocado volatilidad en los mercados.
                   
                  </label>
                  
              </div>
              </a>
              <a class="dropdown-item" id='chec' href="#">
                    <div>
                        <input class="custom-checkbox" type="radio" id="chkbx_2" value="2"  name="solo" 
                        checked = {newimportancia == 2 ? true:false } onChange={cambioimportancia}
                        />
                        <label for="chkbx_2">
                        <div class = "chetodo"> <span></span>  <div class = "nosalto ">  <div class = "sinsaltomedio">M</div> &nbsp;&nbsp; MEDIO  </div> </div>  &nbsp;&nbsp;  &nbsp;&nbsp; Es relativamente menos probable que fuerce movimientos importantes del mercado, excepto en caso de sorpresas descomunales.
                        
                        </label>
                        
                    </div>
              </a>
          
               <a class="dropdown-item" id='chec' href="#">
                    <div>
                        <input class="custom-checkbox" type="radio" id="chkbx_3" value="3"  name="solo"
                        checked = {newimportancia == 3 ? true:false }  onChange={cambioimportancia}
                        />
                        <label for="chkbx_3">
                        <div class = "chetodo"> <span></span>  <div class = "nosalto ">  <div class = "sinsaltobajo">B</div> &nbsp;&nbsp; BAJO  </div> </div>  &nbsp;&nbsp;  &nbsp;&nbsp; Históricamente, es un evento que mueve menos el mercado, excepto en las circunstancias más extraordinarias.
                        
                        </label>
                        
                    </div>
                </a>
              
                    
            </div>
          </div>

        </div> */}

{/* //---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}


			{/* Contenedor de Filtros */}
			<div className='menufilt'>
				
				{/* Filtro de Importancia */}
				<div className=' container'>

					{/* Botón */}
					<div className="dropdown">
						<button className="btn btn-secondary  btn-lg dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						IMPORTANCIA <div className = "import">  </div> &nbsp; 
						</button>

						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						
							{/* Opción Alta */}
							<a className="dropdown-item" id='chec' href="#">
								<div>
									<input className="custom-checkbox" type="checkbox" id="chkbx_1" value="false" checked={chkAlta} 
									onChange={handleOnChangeChkAlta}/>
									<label for="chkbx_1">
										<div className = "chetodo"> <span></span>  <div className = "nosalto ">  <div className = "sinsalto">H</div> &nbsp;&nbsp; ALTA  </div> </div>  &nbsp;&nbsp;  &nbsp;&nbsp; Eventos de gran importancia que históricamente han provocado volatilidad en los mercados.
									</label>									
								</div>
							</a>

							{/* Opción Medio */}
							<a className="dropdown-item" id='chec' href="#">
								<div>
									<input className="custom-checkbox" type="checkbox" id="chkbx_2" value="false" checked={chkMedia} 
									onChange={handleOnChangeChkMedia}/>
									<label for="chkbx_2">
										<div className = "chetodo"> <span></span>  <div className = "nosalto ">  <div className = "sinsaltomedio">M</div> &nbsp;&nbsp; MEDIO  </div> </div>  &nbsp;&nbsp;  &nbsp;&nbsp; Es relativamente menos probable que fuerce movimientos importantes del mercado, excepto en caso de sorpresas descomunales.
									</label>									
								</div>
							</a>

							{/* Opción Bajo */}
							<a className="dropdown-item" id='chec' href="#">
								<div>
									<input className="custom-checkbox" type="checkbox" id="chkbx_3" value="false" checked={chkBaja} 
									onChange={handleOnChangeChkBaja}/>
									<label for="chkbx_3">
										<div className = "chetodo"> <span></span>  <div className = "nosalto ">  <div className = "sinsaltobajo">B</div> &nbsp;&nbsp; BAJO  </div> </div>  &nbsp;&nbsp;  &nbsp;&nbsp; Históricamente, es un evento que mueve menos el mercado, excepto en las circunstancias más extraordinarias.										
									</label>										
								</div>
							</a>

						</div>
					</div>
				</div>

				{/* Filtro de Región*/}
				<div className=' container butondos'>

					{/* <div class = "sinsalto altofiltro">H</div>
					<div class = "sinsaltomedio mediofiltro">M</div>
					<div class = "sinsaltobajo bajofiltro">B</div> */}
					<div className="vertical-line2" > </div>

					{/* Botón */}
					<div className="dropdown dropdownregion ">
						<button className="btn btn-secondary  btn-lg dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;REGIÓN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div className = "import">  </div> &nbsp;  &nbsp;&nbsp;
						</button>

						<div className="dropdown-menu dropdown-menuregion" aria-labelledby="dropdownMenuButton">
						
							<div className = "rellenarbutonbuton2"></div>
							<div className = "rellenarrellenar2"></div>
							<form role="form" className='regionselec'>

								{/* Opción América */}
								<a className="dropdown-item" id='chec' href="#">

									<div>
										<input className="custom-checkbox sev_check chec_region" type="checkbox" id="chkbx_4 s_fac1" value="america" checked={opcionAmerica} 
										onChange={seleccionAmerica}/>
										<label for="chkbx_4 s_fac1" class="form-checkbox form-icon">
										<div className = "chetodo2"> <span></span>  <div className = "nosalto ">  <div className = "america"> <img src="https://as2.ftcdn.net/v2/jpg/03/05/31/79/1000_F_305317913_RLtEYk6lfa5gbsdC2gdndH0LfqhJuwLB.jpg" alt="" height='29' width='27'></img> </div> &nbsp; AMÉRICA  </div> </div>  &nbsp;&nbsp;  &nbsp;&nbsp; Incluye a los United States , Canada ,  Mexico , Brazil y Colombia
										</label>
									</div>
								</a>

								{/* Opción Europa */}
								<a className="dropdown-item" id='chec' href="#">
									<div>
										<input className="custom-checkbox sev_check chec_region" type="checkbox" id="chkbx_5 s_fac2" value="europa" checked={opcionEuropa} 
										onChange={seleccionEuropa}/>
										<label for="chkbx_5 s_fac2" class="form-checkbox form-icon">
										<div className = "chetodoeuropa"> <span></span>  <div className = "nosalto ">  <div className = "europa"> <img src="https://static.thenounproject.com/png/19032-200.png" alt="" height='29' width='27'></img>  </div> &nbsp;&nbsp; EUROPA  </div> </div>  &nbsp;&nbsp;  &nbsp;&nbsp; 
										</label>
									</div>
								</a>

								{/* Opción Asia */}
								<a className="dropdown-item" id='chec' href="#">
									<div>
										<input className="custom-checkbox sev_check chec_region" type="checkbox" id="chkbx_6 s_fac3" value="asia" checked={opcionAsia} 
										onChange={seleccionAsia}/>
										<label for="chkbx_6 s_fac3" class="form-checkbox form-icon">
										<div className = "chetodo2"> <span></span>  <div className = "nosalto ">  <div className = "asia"> <img src="https://static.thenounproject.com/png/416782-200.png" alt="" height='29' width='27'></img> </div> &nbsp;&nbsp; ASIA  </div> </div>  &nbsp;&nbsp;  &nbsp;&nbsp; 
										</label>	
									</div>
								</a>
							</form>
						</div>
					</div>
				</div>
			</div>

{/* //---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

			{/* <button class="btn btn-primary  mandarfiltro" type="submit" onClick={todosdatos}>Button</button> */}
			
{/* //---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}


			{/* Contenedor de la Tabla */}
			<div className="container contenedor-tabla">							
				{/* Mandar a llamar al componente tabla */}
				<Tabla noticias={(filtrarFecha() && filtrarRegion() && filtrarImportancia()) ? noticiasFiltro : (filtrarFecha() && filtrarImportancia()) ? noticiasFiltro : (filtrarFecha() && filtrarRegion()) ? noticiasFiltro : filtrarFecha() ? noticiasFiltro : noticias} />

{/* //---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}


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
				
{/* //---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

				{/* PARA PROBAR COSAS */}
				<div className=' container '>

                
				</div>
						{/* fecha */}
				<div>

           				{/* <div class="containerfecha">
                
                				<div class="rowfecha">
                 
                  
                  
									<label className='labelfecha'>
										<input type="radio" name="dia" className='inputfecha'/>
										<div class="icon-box">
										<img src="https://cdn-icons-png.flaticon.com/512/42/42449.png" alt="" height='33' width='30'></img>
										<span className='spanfecha' >AYER</span>
										</div>
									</label>

									<label className='labelfecha'>
										<input type="radio" name="dia" className='inputfecha' checked="checked" />
										<div class="icon-box">
										<img src="https://cdn-icons-png.flaticon.com/512/42/42449.png" alt="" height='33' width='30'></img>
										<span className='spanfecha' >HOY</span>
										</div>
									</label>

									<label className='labelfecha'>
										<input type="radio" name="dia" className='inputfecha' />
										<div class="icon-box">
										<img src="https://cdn-icons-png.flaticon.com/512/42/42449.png" alt="" height='33' width='30'></img>
										<span className='spanfecha' >MAÑANA</span>
										</div>
									</label>
                 
                				</div>
              				</div> */}
    			</div>
      
          
				<h1>Valores de Región</h1>
					<p> CANDIDAD DE CHEX SELECIONADO EN IMPORTANCIA  {numeroimportanciaglobal}</p>
					<p> CANDIDAD DE CHEX SELECIONADO EN REGION  {numeroregionglobal}</p>
					<p> CHEc SELECIONADO EN IMPORTANCIA  {valores_importancia}</p>
					<p> CHEc SELECIONADO EN REGION.....  {valores_region}</p>
				<br />
				<br />
				<br />
			

			{/* Cierre de contenedor tabla */}
			</div>
			{/* Cierre de contenedor principal */}
		</div>
	);
};
