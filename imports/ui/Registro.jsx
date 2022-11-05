import React, { useState, useEffect } from 'react';

export function Registro({noticia}) {

	const [mostrarComponente, setMostrarComponente] = useState(false);
	const al = "MEDIO";

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
			</tr>

			{/* Lo que se mostrara al ampliar */}
			<tr className={mostrarComponente ? "mostrar" : "no-mostrar"}>
				<td 
// @ts-ignore
				colSpan="8">
					<div>
						{mostrarComponente && <div className =" desplegar "> 
							<div className = "cointainer"> 

								<div className='descripcion' >
									<p> <b> Imp: </b> &nbsp; <div className= {noticia.importance}>{noticia.importance}</div> </p>
									<p> <b>País: </b> &nbsp; &nbsp;&nbsp;<img src= {noticia.country.flag} alt="" height='27' width='27'></img> </p>
									<p> <b>Divisa: </b>  &nbsp;	{noticia.country.currency} </p>
									<p> <b>Fuente: </b> &nbsp;	{noticia.source} </p> 
								</div>
								
								<div className= "masinfo" > 
									<p> {noticia.description} </p> 
								</div>

							</div>
						</div>}
					</div>

				</td>  

			</tr>

		</>

	);
}
