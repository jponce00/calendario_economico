import React from 'react';
import { Data } from './Data.jsx';
import { Login } from './Login.jsx';
import { Formulario } from './Formulario.jsx';
import { FormularioActu } from './FormularioActu.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
	return (
		<BrowserRouter>
			
			<Routes>
				<Route path="/"  element={<Data/>} />
				<Route path="/Login" element={<Login/>}/>
				<Route path="/Formulario" element={<Formulario/>}/>
				<Route path="/FormularioActu" element={<FormularioActu/>}/>
				

			</Routes>

		</BrowserRouter>

	);
}

