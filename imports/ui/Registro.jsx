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
					<img src={noticia.country.country} alt="" height='27' width='27'></img>
				</td>
				<td>
					<div class= {noticia.importance}>
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
				<td colspan="8">
					<div>
						{mostrarComponente && <div class =" desplegar "> 
							<div class = "cointainer"> 

								<div class='descripcion' >
									<p> <b> Imp: </b> &nbsp; <div class= {noticia.importance}>{noticia.importance}</div> </p>
									<p> <b>País: </b> &nbsp; &nbsp;&nbsp;<img src= {noticia.country.country} alt="" height='27' width='27'></img> </p>
									<p> <b>Divisa: </b>  &nbsp;	{noticia.country.currency} </p>
									<p> <b>Fuente: </b> &nbsp;	{noticia.source} </p> 
								</div>
								
								<div class= "masinfo" > 
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
