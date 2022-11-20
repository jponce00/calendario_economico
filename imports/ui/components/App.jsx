import React from 'react';
import { Data } from './Data.jsx';
import { Login } from './login.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
	return (
		<BrowserRouter>
			
			<Routes>
				<Route path="/"  element={ <Data /> } />
				<Route path="/login" element={<Login />} />
			</Routes>

		</BrowserRouter>
	);
}
