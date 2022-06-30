import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';

export default function App() {
	const [cities, setCities] = useState([]);

	function onClose(id) {
		setCities((oldCities) => oldCities.filter((c) => c.id != id));
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
			<Nav onSearch={onSearch} />

			<Cards cities={cities} onClose={onClose} />
		</div>
	);
}
