import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import Blog from './Blog';
import ListadoPeliculas from './ListadoPeliculas';

function App() {

	return (
		<Router>
		<Routes>
			<Route path='/Blog' element={<Blog/>}> </Route>
			
			<Route path='/ListadoPeliculas' element={<ListadoPeliculas/>}> </Route>
		</Routes>
		</Router>

	);
}

export default App;
