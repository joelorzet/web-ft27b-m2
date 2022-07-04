import React from 'react';
import style from './Ciudad.module.css';

export default function Ciudad({ city }) {
	console.log(city);

	return (
		<div className={style.ciudad}>
			<div className={style.container}>
				<h2 className={style.title}>{city.name}</h2>
				<div className={style.info}>
					<div className={style.infoBox}>
						<span>Temperatura: </span>
						<span>{city.temp}</span>
					</div>
					<div className={style.infoBox}>
						<span>Clima:</span>
						<span>{city.weather}</span>
					</div>
					<div className={style.infoBox}>
						<span>Viento:</span>
						<span>{city.wind} km/h</span>
					</div>
					<div className={style.infoBox}>
						<span>Cantidad de nubes: </span>
						<span>{city.clouds}</span>
					</div>
					<div className={style.infoBox}>
						<span>Latitud: </span>
						<span>{city.latitud}°</span>
					</div>
					<div className={style.infoBox}>
						<span>Longitud: </span>
						<span>{city.longitud}°</span>
					</div>
				</div>
			</div>
		</div>
	);
}
