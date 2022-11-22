import React from 'react';
import { Link } from "react-router-dom";

export function Logout() {
    function cerrarSesion() {
        // Funcion de Meteor para gestionar el cierre de sesion:
        Meteor.logout();
    }

    return (
        <div>
			{/* <button  type="button" className='btn btn-primary btn-rounded'  onClick={cerrarSesion}><Link to="/">LOGOUT</Link></button> */}
            <img src="https://cdn-icons-png.flaticon.com/512/3177/3177407.png" className='botondecierredesesion'
            onClick={cerrarSesion}  height='41' width='41'> 
            </img>
		</div>
    )
}