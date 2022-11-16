import React from "react";
import {Formulario} from './Formulario';

export function Modal ({children, estado, cambiarestado}) { 
    return(
        <>
            {estado && /*Mostrara todo lo que sigue, solamente si es verdadero*/
            <div className="FondoModal">
                 <div className="VentanaModal">
                     <div className="EncabezadoModal">
                         <h5>Nuevo Registro</h5>
                     </div>
                    <button className="BCerrar" onClick={() => cambiarestado(false)}>X</button>
                    <Formulario/>
                    {children} {/* Agregar Children aqui y de parametro permite agregar contenido */}
                 </div> 
            </div>  
            }
        </>
        
    );
}

export default Modal;