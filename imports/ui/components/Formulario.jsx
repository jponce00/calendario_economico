// @ts-nocheck
import React, { useContext, useState } from 'react';
import { NewsContext } from '../context/newsContext';
import formnewContext from "../context/formNew";

export function Formulario() {

	const { setformnew } = useContext(formnewContext);

	const {agregarNoticia} = useContext(NewsContext);

	const [pais, setPais] = useState('');
	const [region, setRegion] = useState('');
	const [evento, setEvento] = useState('');
	const [anio, setAnio] = useState('');
	const [mes, setMes] = useState('');
	const [dia, setDia] = useState('');
	const [hora, setHora] = useState('');
	const [minutos, setMinutos] = useState('');
	const [importancia, setImportancia] = useState('ALTA');
	const [actual, setActual] = useState('');
	const [prevision, setPrevision] = useState('');
	const [anterior, setAnterior] = useState('');
	const [url, setUrl] = useState('');
	const [moneda, setMoneda] = useState('');
	const [fuente, setFuente] = useState('');
	const [descripcion, setDescripcion] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const noticia = {
			_id: null,
			name: evento,
			importance: importancia,
			year: anio,
			month: mes,
			day: dia,
			country: {country:pais, region:region, currency:moneda, flag:url},
			hour: hora,
			minutes: minutos,
			actual: Number(actual),
			forecast: Number(prevision),
			previous: Number(anterior),
			description: descripcion,
			source: fuente
		};

		agregarNoticia(noticia);
		setformnew(false);
	}

    return (
        
		<div className=" formevento scroll"> {/* ARTE DEL FORM DEL ADMINISTRADOR */}
			
			<form onSubmit={handleSubmit}>

				<div className="wrapper rounded bg-white">
					<div className="h3 tituloformulario"> Nuevo Evento</div>

						<div class="close-container" onClick={() => {
						
						setformnew(false);
                        
					}}>
						<div class="leftright"></div>
						<div class="rightleft"></div>
						<label class="close labelcerrarnew"></label>
						</div>

					<div className="form">
						<div className="row">
							<div className="col-md-6 mt-md-0 mt-3">
								<label className='labelform'>Pa??s</label>
								<input type="text" className="form-control" name='Pais' value={pais} onChange={e => setPais(e.target.value)} required/>
							</div>
							<div className="col-md-6 mt-md-0 mt-3">
								<label className='labelform'>Regi??n</label>
								<input type="text" className="form-control" name='Pais' value={region} onChange={e => setRegion(e.target.value)} required/>
							</div>							
						</div>

						<div className="row">
							<div className="col-md-6 mt-md-0 mt-3">
								<label className='labelform'>Evento</label>
								<input type="text" className="form-control" name='Evento' value={evento} onChange={e => setEvento(e.target.value)} required/>
							</div>
							<div className="col-md-6 mt-md-0 mt-3 inputs-tiempo">				
								<label className='labelform'>Hora (hh:mm)</label>
								<input type="text" className="form-control form-control-2" name='Hora' value={hora} onChange={e => setHora(e.target.value)} placeholder={'hh'} required/>
								
								<input type="text" className="form-control form-control-2" name='Hora' value={minutos} onChange={e => setMinutos(e.target.value)} placeholder={'mm'} required/>
							</div>						
						</div>

						<div className="row">
							<div className="col-md-6 mt-md-0 mt-3 inputs-tiempo">				
								<label className='labelform'>Fecha (aa/mm/dd)</label>
								<input type="text" className="form-control form-control-3" name='Hora' value={anio} onChange={e => setAnio(e.target.value)} placeholder={'aa'} required/>
								
								<input type="text" className="form-control form-control-3" name='Hora' value={mes} onChange={e => setMes(e.target.value)} placeholder={'mm'} required/>

								<input type="text" className="form-control form-control-3" name='Hora' value={dia} onChange={e => setDia(e.target.value)} placeholder={'dd'} required/>
							</div>
							<div className="col-md-6 mt-md-0 mt-3 importanciaselect">
								<label className='labelform'>Importancia</label>
								<div className="d-flex align-items-center mt-2">
									<select id="sub" name='Importancia' value={importancia} onChange={e => setImportancia(e.target.value)} required>
									<option value="ALTA">ALTA</option>
									<option value="MEDIA">MEDIA</option>
									<option value="BAJA">BAJA</option>							
									</select>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-md-6 mt-md-0 mt-3">
								<label className='labelform'>Actual</label>
								<input type="text" className="form-control" name='Actual' value={actual} onChange={e => setActual(e.target.value)} required/>
							</div>
							<div className="col-md-6 mt-md-0 mt-3">
								<label className='labelform'>Previsi??n</label>
								<input type="text" className="form-control" name='Prevision' value={prevision} onChange={e => setPrevision(e.target.value)} required/>
							</div>	
						</div>

						<div className="row">
							<div className="col-md-6 mt-md-0 mt-3">
								<label className='labelform'>Anterior</label>
								<input type="text" className="form-control" name='Anterior' value={anterior} onChange={e => setAnterior(e.target.value)} required/>
							</div>
							<div className="col-md-6 mt-md-0 mt-3">
								<label className='labelform'>URL Bandera</label>
								<input type="text" className="form-control" name='url' value={url} onChange={e => setUrl(e.target.value)} required/>
							</div>
						</div>

						<div className="row">
							<div className="col-md-6 mt-md-0 mt-3">
								<label className='labelform'>Moneda</label>
								<input type="text" className="form-control" name='Moneda' value={moneda} onChange={e => setMoneda(e.target.value)} required/>
							</div>
							<div className="col-md-6 mt-md-0 mt-3">
								<label className='labelform'>Fuente</label>
								<input type="text" className="form-control" name='Fuente' value={fuente} onChange={e => setFuente(e.target.value)} required/>
							</div>
						</div>						

						<div className=" my-md-2 my-3">
							<label className='labelform'>Detalle de la noticia</label>							
							<textarea className="form-control" id="exampleFormControlTextarea1" rows={3} name='Detalle'
							value={descripcion} onChange={e => setDescripcion(e.target.value)}></textarea>
						</div>
						
						<button type="submit" className="btn btn-primary botondefrom">Guardar</button>
					</div>
				</div>
			</form>

          {/* TERMINA PARTE ARTE DEL FORM DEL ADMINISTRADOR */}
        </div> 
        
    );
}