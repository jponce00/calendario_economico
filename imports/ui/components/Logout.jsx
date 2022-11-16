import React from 'react';
import { Link } from "react-router-dom";

export function Logout() {
    function cerrarSesion() {
        Meteor.logout();
    }

    return (
        // <div>
		// 	<button onClick={cerrarSesion}><Link to="/">SALIR</Link></button>
		// </div>

        <div className='BAcceder' onClick={cerrarSesion}>
            <Link to="/" style={{textDecoration:'none'}}>
                SALIR
            </Link>
        </div>
    )
}