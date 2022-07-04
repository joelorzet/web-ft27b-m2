import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import About from './components/About/About.jsx';
import Cards from './components/Cards/Cards.jsx';
import Ciudad from './components/Ciudad/Ciudad.jsx';
import Nav from './components/Nav/Nav.jsx';
import './App.css';

export default function App() {
	const [cities, setCities] = useState([]);

	function onClose(id) {
		setCities((oldCities) => oldCities.filter((c) => c.id !== id));
	}

	function onFilter(ciudadId) {
		let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));

		if (ciudad.length > 0) {
			return ciudad[0];
		} else {
			return null;
		}
	}

	function onSearch(ciudad) {
		const apiKey = 'f6e0a7c8a3924c98cda90e74c172e3d3';

		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
			.then((r) => r.json())
			.then((recurso) => {
				if (recurso.main !== undefined) {
					const ciudad = {
						min: Math.round(recurso.main.temp_min),
						max: Math.round(recurso.main.temp_max),
						img: recurso.weather[0].icon,
						id: recurso.id,
						wind: recurso.wind.speed,
						temp: recurso.main.temp,
						name: recurso.name,
						weather: recurso.weather[0].main,
						clouds: recurso.clouds.all,
						latitud: recurso.coord.lat,
						longitud: recurso.coord.lon,
					};
					const IdCities = cities.map((citi) => citi.id);

					if (IdCities.includes(ciudad.id)) {
						alert('La ciudad ya se encuentra agregada');
					} else {
						setCities((oldCities) => [...oldCities, ciudad]);
					}
				} else {
					alert('Ciudad no encontrada');
				}
			});
	}

	return (
		<div className='App'>
			<Route path='/' render={() => <Nav onSearch={onSearch} />} />
			<Route
				exact
				path='/'
				render={() => (
					<div>
						<Cards cities={cities} onClose={onClose} />
					</div>
				)}
			/>
			<Route exact path='/about' render={() => <About />} />
			<Route path='/city/:cityId' render={({ match }) => <Ciudad city={onFilter(match.params.cityId)} />} />
			<hr />
		</div>
	);
}
