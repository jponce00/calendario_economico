// @ts-nocheck
import React, { useState, useContext } from 'react';
import { NewsContext } from '../context/newsContext';
import formeditarContext from "../context/formeditar";

export function Registro({noticia}) {

	const {currentUser, obtenerNoticia, eliminarNoticia} = useContext(NewsContext);

	const [mostrarComponente, setMostrarComponente] = useState(false);
	//const {obtenerNoticia} = useContext(NewsContext);


	const { setformedit } = useContext(formeditarContext);


	const handleSubmit = (e) => {
		e.preventDefault();		
		eliminarNoticia({_id: e.target[0].value});
	}	

	return (
		<>						
			{/* Lo que se mostrar sin ampliar */}
			<tr>
				<td> {noticia.hour}:{noticia.minutes} </td>
				<td>
					<img src={noticia.country.flag} alt="" height='27' width='27'></img>
				</td>
				<td>
					<div className= {noticia.importance}>
						{noticia.importance}
					</div> 
				</td>
				<td> {noticia.name} </td>
				<td> {noticia.actual} </td>
				<td> {noticia.forecast} </td>
				<td> {noticia.previous} </td>
				<td> 
					<button onClick={() => setMostrarComponente(!mostrarComponente)}  >
						{/* imagen de la flecha   */}
						<img src="https://img.icons8.com/material/344/chevron-down--v1.png" alt="" height='11' width='11'></img>
					</button>
				</td>
				{currentUser ? 
				<td>					
					<form onSubmit={handleSubmit}>
						<input type="hidden" value={noticia._id} />
						<button className='btn-eliminar' type="submit">X</button>
					</form>
					<button className='btn-eliminar' onClick={() => {
						obtenerNoticia(noticia._id);
						setformedit(true);
					}}>
						Editar
					</button>
				</td> : null
				}
			</tr>

			{/* Lo que se mostrara al ampliar */}
			<tr className={mostrarComponente ? "mostrar" : "no-mostrar"}>
				<td 
// @ts-ignore
				colSpan="9">
					<div>
						{mostrarComponente && <div className =" desplegar "> 
							<div className = "cointainer"> 

								<div className='descripcion' >
									<span> <b> Imp: </b> &nbsp; <div className= {noticia.importance}>{noticia.importance}</div> </span> <br/> <br/>
									<span> <b>País: </b> &nbsp; &nbsp;&nbsp;<img src= {noticia.country.flag} alt="" height='27' width='27'></img> </span> <br/> <br/>
									<span> <b>Divisa: </b>  &nbsp;	{noticia.country.currency} </span> <br/> <br/>
									<span> <b>Fuente: </b> &nbsp;	{noticia.source} </span> <br/> <br/>
								</div>
								
								<div className= "masinfo" > 
									<span> {noticia.description} </span>
								</div>

							</div>
						</div>}
					</div>

				</td>  

			</tr>

		</>

	);
}
