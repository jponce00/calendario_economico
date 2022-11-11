import React from 'react';
import { Link } from "react-router-dom";

export function Logout() {
    function cerrarSesion() {
        Meteor.logout();
    }

    return (
        <div>
			<button onClick={cerrarSesion}><Link to="/">LOGOUT</Link></button>
		</div>
    )
}