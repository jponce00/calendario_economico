// @ts-nocheck
import React, { useState, useContext, useEffect } from 'react';
import { NewsContext } from '../context/newsContext';
import { Formulario } from './Formulario';
import {Tabla} from './Tabla';
import { Footer } from './Footer';
import { FormularioActu } from './FormularioActu';
import { TickerTape,Ticker,SingleTicker  } from "react-ts-tradingview-widgets";
import { Outlet, Link } from "react-router-dom";
import { Logout } from './Logout';
import formeditarContext from "../context/formeditar";
import formnewContext from "../context/formNew";


export function Data() {

	const [formedit, setformedit] = useState(false);
	const [formnuevo, setformnew] = useState(false);

	const {noticias, currentUser} = useContext(NewsContext);	

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

	// Para filtrar por nombre de evento:
	const [evento, setEvento] = useState('');

	// Variable a la que se le aplicaran los filtros a partir de lo que tenga el objeto noticias en el contexto:
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

	//Funcion de selección de región:
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
		
		noticiasFiltro = noticias.filter(noticia => noticia.year==year && noticia.month==month && noticia.day==day && noticia.name.toLowerCase().includes(evento.toLowerCase().trim()));

		return true;
	}

	const seleccionAyer = () => {
		setOpcionAyer( !opcionAyer );
		setOpcionHoy( opcionHoy ? !opcionHoy : opcionHoy );
		setOpcionManana( opcionManana ? !opcionManana : opcionManana );		
	}

	const seleccionHoy = () => {		
		setOpcionAyer( opcionAyer ? !opcionAyer : opcionAyer );
		setOpcionHoy( !opcionHoy );
		setOpcionManana( opcionManana ? !opcionManana : opcionManana );		
	}

	const seleccionManana = () => {
		setOpcionAyer( opcionAyer ? !opcionAyer : opcionAyer );
		setOpcionHoy( opcionHoy ? !opcionHoy : opcionHoy );
		setOpcionManana( !opcionManana );		
	}

	// Para filtro por nombre de evento:
	const handleChange = (e) => {
		setEvento(e.target.value);			
	}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

	return (

		//Contenedor principal
		<div className="" >

			{/* CONTENEDOR GRIS */}

			
			<div className="menu"> 

			<div></div>
			
				{/* <h1>CONTENEDOR GRIS</h1> */}
								<p className='pdetitulo'>
								
								<span className='spantitulo'>
								ECONOMICDX 
								</span>
								
								</p>

								{currentUser ? null : 
									<div>
										
									</div>
								}

								{currentUser ? <Logout /> : null}
			</div>
			



			{/* ================================================== */}

			{/* ========================================================= */}





			{/* Espacio entre el contener gris y el Breaking News */}
			<br /> 

			{/* Contenedor de Breaking News */}
			<div className = "semueve ">

				<TickerTape colorTheme="light" className="barra" DisplayMode="compact" > </TickerTape>
				<div className='superponer'>dsadsa</div>

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

			{/* Contenedor de Filtros */}
			<div className='menufilt container'>								
					{/* ''''''''''''''''ESTE ES EL NUEVO YA ARREGLADO '''''''''''''' */}

				<div className=' butonprimer'>

					<div className="dropdown ">
						<button className="btn btn-secondary  btn-lg dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							IMPORTANCIA &nbsp;&nbsp;&nbsp;<div className = "import">  </div> &nbsp;  &nbsp;&nbsp;
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">							
							<div className = "rellenar2"></div>
							<div className = "rellenarbutonderecha"></div>

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
				<div className='  butondos'>

					{/* Botón */}
					<div className="dropdown dropdownregion ">
						<button className="btn btn-secondary  btn-lg dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;REGIÓN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<div className = "import">  </div> &nbsp;  &nbsp;&nbsp;
						</button>

						<div className="dropdown-menu dropdown-menuregion" aria-labelledby="dropdownMenuButton">
													
							<div className = "rellenarrellenar2"></div>
							<div className = "rellenarbutondosderecha"></div>
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


				{/* buscador */}
				<div className="input-group rounded  buscador">
					<input type="search" className="form-control rounded" placeholder="Buscar por nombre de evento" aria-label="Search" aria-describedby="search-addon" value={evento} onChange={handleChange} />
				</div>
				
			</div>

{/* //--------------------------------------------------------------------------------------------------------------------------------------------- */}

			
			<div className="container contenedor-tabla">							
				{/* Mandar a llamar al componente tabla */}

				<formeditarContext.Provider value={{ formedit, setformedit }}>
					<formnewContext.Provider value={{ formnuevo, setformnew }}>

						{/* Contenedor de la Tabla */}
						<Tabla noticias={(filtrarFecha() && filtrarRegion() && filtrarImportancia()) ? noticiasFiltro : (filtrarFecha() && filtrarImportancia()) ? noticiasFiltro : (filtrarFecha() && filtrarRegion()) ? noticiasFiltro : noticiasFiltro} />
						{/* Cierre de contenedor tabla */}			

						{formnuevo && <div className='formulariodeEditar  position-fixed '>  {currentUser ? <Formulario/> : null}  </div>  }
					</formnewContext.Provider>				

					{formedit && <div className='formulariodeEditar  position-fixed '>  {currentUser ? <FormularioActu /> : null}  </div>  }			
				</formeditarContext.Provider>

			</div>
			{/* Cierre de contenedor principal */}

			{/* Parte del footer de la pagina */}
			<Footer />

		</div>
	);
};
