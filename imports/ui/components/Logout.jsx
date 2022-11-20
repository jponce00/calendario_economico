import React from 'react';
import { Link } from "react-router-dom";

export function Logout() {
    function cerrarSesion() {
        // Funcion de Meteor para gestionar el cierre de sesion:
        Meteor.logout();
    }

    return (
        <div>
			<button onClick={cerrarSesion}><Link to="/">LOGOUT</Link></button>
		</div>
    )
}