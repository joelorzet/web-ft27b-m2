import React from 'react';
import Card from './Card.jsx';
import style from './Cards.module.css';

export default function Cards({ cities }) {
	// acá va tu código
	// tip, podés usar un map

	if (!cities) {
		return <h1>No hay cities que mostrar</h1>;
	}

	return (
		<div class={style.cards}>
			{cities.map((e) => (
				<Card
					max={e.main.temp_max}
					min={e.main.temp_min}
					name={e.name}
					img={e.weather[0].icon}
					onClose={() => alert(e.name)}
					key={e.id}
				/>
			))}
		</div>
	);
}
