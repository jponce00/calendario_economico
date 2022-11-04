import React, { useState } from 'react';

export function Formulario() {

  // FUNCIONES DE FORM 
	const [inputs, setInputs] = useState({});

	const handleChange = (event) => {
	  const name = event.target.name;
	  const value = event.target.value;
	  setInputs(values => ({...values, [name]: value}))
	}
  
	// FUNCION PARA PROBAR SI SE OBTIENEN LOS DATOS QUITAR onSubmit={handleSubmit} DEL form cuando ya no lo ocupen
	// const handleSubmit = (event) => {
	//   event.preventDefault();
	//   console.log(inputs);
	// }

	// AQUI MANDARIAMOS LOS DATOS DEL FORM ALA BASE DE DATOS 
	const mandardatosform = () =>{
		console.log(inputs);
	}

    return (
        					
					<div className=""> {/* ARTE DEL FORM DEL ADMINISTRADOR */}
          <form >

          <div className="wrapper rounded bg-white">

              <div className="h3"> Nuevo Evento</div>

              <div className="form">
                <div className="row">
                  <div className="col-md-6 mt-md-0 mt-3">
                    <label className='labelform'>País</label>
                    <input type="text" className="form-control" name='Pais' value={inputs.Pais || ""} onChange={handleChange} required/>
                  </div>
                  <div className="col-md-6 mt-md-0 mt-3">
                    <label className='labelform'>Evento</label>
                    <input type="text" className="form-control" name='Evento' value={inputs.Evento || ""} onChange={handleChange} required/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mt-md-0 mt-3">
                    <label className='labelform'>Hora</label>
                    <input type="text" className="form-control" name='Hora' value={inputs.Hora || ""} onChange={handleChange} required/>
                  </div>
                  <div className="col-md-6 mt-md-0 mt-3">
                    <label className='labelform'>Importancia</label>
                    <div className="d-flex align-items-center mt-2">
                    <select id="sub" name='Importancia' value={inputs.Importancia || ""} onChange={handleChange} required>
                    <option value="" selected hidden></option>
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
                    <input type="text" className="form-control" name='Actual' value={inputs.Actual || ""} onChange={handleChange} required/>
                  </div>
                  <div className="col-md-6 mt-md-0 mt-3">
                    <label className='labelform'>Previsión</label>
                    <input type="text" className="form-control" name='Prevision' value={inputs.Prevision || ""} onChange={handleChange} required/>
                  </div>
                  </div>
                  <div className="row">
                  <div className="col-md-6 mt-md-0 mt-3">
                    <label className='labelform'>Anterior</label>
                    <input type="text" className="form-control" name='Anterior' value={inputs.Anterior || ""} onChange={handleChange} required/>
                  </div>

                  <div className="col-md-6 mt-md-0 mt-3">
                    <label className='labelform'>URL Bandera</label>
                    <input type="text" className="form-control" name='url' value={inputs.url || ""} onChange={handleChange} required/>
                  </div>


                </div>

                <div className="row">
                  <div className="col-md-6 mt-md-0 mt-3">
                    <label className='labelform'>Moneda</label>
                    <input type="text" className="form-control" name='Moneda' value={inputs.Moneda || ""} onChange={handleChange} required/>
                  </div>

                  <div className="col-md-6 mt-md-0 mt-3">
                    <label className='labelform'>Fuente</label>
                    <input type="text" className="form-control" name='Fuente' value={inputs.Fuente || ""} onChange={handleChange} required/>
                  </div>


                </div>


                <div className=" my-md-2 my-3">
                  <label className='labelform'>Detalle de la noticia</label>
                  
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='Detalle'
                   value={inputs.Detalle || ""} onChange={handleChange}></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary botondefrom" onClick={mandardatosform} >Enviar</button>
              </div>

              </div>
          </form>
          
          {/* TERMINA PARTE ARTE DEL FORM DEL ADMINISTRADOR */}
        </div> 
        
    );
}