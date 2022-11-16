import React from "react";
import {FormularioActu} from './FormularioActu';

export function Modal2 ({children, estado, cambiarestado}) { 
    return(
        <>
            {estado && /*Mostrara todo lo que sigue, solamente si es verdadero*/
            <div className="FondoModal">
                 <div className="VentanaModal">
                     <div className="EncabezadoModal">
                         <h3>Editar Registro</h3>
                     </div>
                    <button className="BCerrar" onClick={() => cambiarestado(false)}>X</button>
                    <FormularioActu/>
                    {children} {/* Agregar Children aqui y de parametro permite agregar contenido */}
                 </div> 
            </div>  
            }
        </>
        
    );
}

export default Modal2;