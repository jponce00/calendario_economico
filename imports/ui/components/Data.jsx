// @ts-nocheck
import React, { useState, useContext, useEffect } from 'react';
import { NewsContext } from '../context/newsContext';
import { Formulario } from './Formulario';
import {Tabla} from './Tabla';
import { Footer } from './Footer';

export function Data() {

	const {noticias} = useContext(NewsContext);

	// Opciones de importancia
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

	let noticiasFiltro = noticias;

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
		//filtrarFecha();
		//console.log(noticiasFiltro);
	}

	const seleccionHoy = () => {		
		setOpcionAyer( opcionAyer ? !opcionAyer : opcionAyer );
		setOpcionHoy( !opcionHoy );
		setOpcionManana( opcionManana ? !opcionManana : opcionManana );
		//filtrarFecha();
		//console.log(noticiasFiltro);
	}

	const seleccionManana = () => {
		setOpcionAyer( opcionAyer ? !opcionAyer : opcionAyer );
		setOpcionHoy( opcionHoy ? !opcionHoy : opcionHoy );
		setOpcionManana( !opcionManana );
		//filtrarFecha();
		//console.log(noticiasFiltro);
	}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

	return (

		//Contenedor principal
		<div className="contenedor-todo">

			{/* CONTENEDOR GRIS */}



			<div className="menu"> 
			
				{/* <h1>CONTENEDOR GRIS</h1> */}
								<p className='pdetitulo'>
								
								<span className='spantitulo'>
								ECONOMICDX 
								</span>
								
								</p>
			</div>

			

			{/* Espacio entre el contener gris y el Breaking News */}
			<br /> 

			{/* Contenedor de Breaking News */}
			<div className = "semueve ">
        
				<div className="row ">
					<div className="col-md-12 ">
						<div className="d-flex justify-content-between align-items-center breaking-news bg-white colordefondo">
							<div className="d-flex flex-row flex-grow-1 flex-fill justify-content-center bg-danger py-2 text-white px-1 news brenew ">
								<span className="d-flex align-items-center brenew ">&nbsp;Breaking News &nbsp;&nbsp;</span>  &nbsp; &nbsp; <img src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="" height='18' width='17'className = "flecha " /> 
							</div>
							<marquee className="news-scroll semueve2 " behavior="scroll" direction="left"> <a href="#"> 
								<b> Pronóstico del PIB del tercer trimestre de la FED de Atlanta: ahora: 3,1 % frente al 2,9 % del 19 de octubre $MACRO  </b>   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <b> Los rendimientos del Tesoro de EE. UU. caen en medio de signos de desaceleración económica Rendimiento de UST a 3 meses: 3,94 % Rendimiento de UST a 2 años: 4,42 % Rendimiento de UST a 10 años: 4,01 % $MACRO</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Se espera que Twitter pase a ser propiedad de Musk el 28 de octubre a las 5:00 p. m., hora de Nueva York: las acciones de BBG TWTR subieron un 0,99 %</b> </a>
							</marquee>
						</div>
					</div>
				</div>

			</div>
        



			{/* Contenedor de Calendario Económico */}
			<div className=' container titulo' >
				<h1>Calendario Económico</h1>
				<p>
					Utilice nuestro calendario económico para explorar eventos globales clave en el <br /> horizonte que podrían cambiar sutilmente o sacudir sustancialmente los mercados <br /> financieros.
				</p>
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

											{/* ESTE ES EL VIEJO BUTON DE FILTRO DE IMPORTANCIA  NO ARREGLADO*/}

			{/* Contenedor de Filtros */}
			<div className='menufilt container'>								
					{/* ''''''''''''''''ESTE ES EL NUEVO YA ARREGLADO '''''''''''''' */}

				<div className=' container '>

					{/* <div className = "sinsalto altofiltro">H</div>
					<div className = "sinsaltomedio mediofiltro">M</div>
					<div className = "sinsaltobajo bajofiltro">B</div>
					<div className="vertical-line" > </div> */}
					<div className="dropdown butonprimer">
						<button className="btn btn-secondary  btn-lg dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							IMPORTANCIA &nbsp;&nbsp;&nbsp;<div className = "import">  </div> &nbsp;  &nbsp;&nbsp;
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<div className = "rellenar"></div>
							<div className = "rellenar2"></div>

							<form role="form">
								<a className="dropdown-item" id='chec' href="#">

									<div>
										<input className="custom-checkbox sev_check chec_importancia" type="checkbox" id="chkbx_1 s_fac1" value="false" checked={chkAlta} name="filimportancia"
										onChange={handleOnChangeChkAlta}/>
										<label htmlFor="chkbx_1 s_fac1" className="form-checkbox form-icon">
											<div className = "chetodo"> <span></span> 
												<div className = "nosalto ">  
													<div className = "sinsalto">H</div> &nbsp;&nbsp; ALTA  
												</div> 
											</div>  &nbsp;&nbsp;  &nbsp;&nbsp; Eventos de gran importancia que históricamente han provocado volatilidad en los mercados.								
										</label>								
									</div>

								</a>


								<a className="dropdown-item" id='chec' href="#">

									<div>
										<input className="custom-checkbox sev_check chec_importancia" type="checkbox" id="chkbx_2 s_fac2" value="false" checked={chkMedia} name="filimportancia"
										onChange={handleOnChangeChkMedia}/>
										<label htmlFor="chkbx_2 s_fac2" className="form-checkbox form-icon">
											<div className = "chetodo"> <span></span>  
												<div className = "nosalto ">  
													<div className = "sinsaltomedio">M</div> &nbsp;&nbsp; MEDIO
												</div> 
											</div>  &nbsp;&nbsp;  &nbsp;&nbsp; Es relativamente menos probable que fuerce movimientos importantes del mercado, excepto en caso de sorpresas descomunales.
										</label>
										
									</div>

								</a>


							

								<a className="dropdown-item" id='chec' href="#">

									<div>
										<input className="custom-checkbox sev_check chec_importancia" type="checkbox" id="chkbx_3 s_fac3" value="false" checked={chkBaja} name="filimportancia"
										onChange={handleOnChangeChkBaja}/>
										<label htmlFor="chkbx_3 s_fac3" className="form-checkbox form-icon">
											<div className = "chetodo"> <span></span>  
												<div className = "nosalto ">  
													<div className = "sinsaltobajo">B</div> &nbsp;&nbsp; BAJO  
												</div> 
											</div>  &nbsp;&nbsp;  &nbsp;&nbsp; Históricamente, es un evento que mueve menos el mercado, excepto en las circunstancias más extraordinarias.
										</label>									
									</div>

								</a>

							</form>
							
						</div>
					</div>


				</div>



					{/* '''''''''''''''''''''''''''''''''''''' */}



				{/* Filtro de Región*/}
				<div className=' container butondos'>

					{/* <div className = "sinsalto altofiltro">H</div>
					<div className = "sinsaltomedio mediofiltro">M</div>
					<div className = "sinsaltobajo bajofiltro">B</div> */}
					<div className="vertical-line2" > </div>

					{/* Botón */}
					<div className="dropdown dropdownregion ">
						<button className="btn btn-secondary  btn-lg dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;REGIÓN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<div className = "import">  </div> &nbsp;  &nbsp;&nbsp;
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
										<label htmlFor="chkbx_4 s_fac1" className="form-checkbox form-icon">
											<div className = "chetodo2"> <span></span>  <div className = "nosalto ">  <div className = "america"> <img src="https://as2.ftcdn.net/v2/jpg/03/05/31/79/1000_F_305317913_RLtEYk6lfa5gbsdC2gdndH0LfqhJuwLB.jpg" alt="" height='29' width='27'></img> </div> &nbsp; AMÉRICA  </div> </div>  &nbsp;&nbsp;  &nbsp;&nbsp; Incluye a los Estados Unidos, Canadá , México, Brasil, Colombia, entre otros.
										</label>
									</div>
								</a>

								{/* Opción Europa */}
								<a className="dropdown-item" id='chec' href="#">
									<div>
										<input className="custom-checkbox sev_check chec_region" type="checkbox" id="chkbx_5 s_fac2" value="europa" checked={opcionEuropa} 
										onChange={seleccionEuropa}/>
										<label htmlFor="chkbx_5 s_fac2" className="form-checkbox form-icon">
											<div className = "chetodoeuropa"> <span></span>  <div className = "nosalto ">  <div className = "europa"> <img src="https://static.thenounproject.com/png/19032-200.png" alt="" height='29' width='27'></img>  </div> &nbsp;&nbsp; EUROPA  </div> </div>  &nbsp;&nbsp;  &nbsp;&nbsp; Incluye a Alemania, Francia, España, Italia, Grecia, Austria, Irlanda, Finlandia, <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Países Bajos, Portugal, Bélgica y más.
										</label>
									</div>
								</a>

								{/* Opción Asia */}
								<a className="dropdown-item" id='chec' href="#">
									<div>
										<input className="custom-checkbox sev_check chec_region" type="checkbox" id="chkbx_6 s_fac3" value="asia" checked={opcionAsia} 
										onChange={seleccionAsia}/>
										<label htmlFor="chkbx_6 s_fac3" className="form-checkbox form-icon">
											<div className = "chetodo2"> <span></span>  <div className = "nosalto ">  <div className = "asia"> <img src="https://static.thenounproject.com/png/416782-200.png" alt="" height='29' width='27'></img> </div> &nbsp;&nbsp; ASIA  </div> </div>  &nbsp;&nbsp;  &nbsp;&nbsp;Incluye a Japón, Australia, Nueva Zelanda, China, India, Corea del Sur, Tailandia, <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Indonesia, Filipinas, entre otros.
										</label>	
									</div>
								</a>
							</form>
						</div>
					</div>
				</div>
			</div>

{/* //--------------------------------------------------------------------------------------------------------------------------------------------- */}

			{/* Contenedor de la Tabla */}
			<div className="container contenedor-tabla">							
				{/* Mandar a llamar al componente tabla */}
				<Tabla noticias={(filtrarFecha() && filtrarRegion() && filtrarImportancia()) ? noticiasFiltro : (filtrarFecha() && filtrarImportancia()) ? noticiasFiltro : (filtrarFecha() && filtrarRegion()) ? noticiasFiltro : noticiasFiltro} />

{/* //---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}				
				<Formulario/>				
{/* //			---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

			{/* Cierre de contenedor tabla */}
			</div>
			{/* Cierre de contenedor principal */}

{/* //---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}



			{/* parte del footer de la pagina */}
			<Footer />

		</div>
	);
};
