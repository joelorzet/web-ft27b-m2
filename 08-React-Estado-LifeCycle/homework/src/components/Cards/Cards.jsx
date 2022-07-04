import React from 'react';
import Card from '../Card/Card.jsx';
import style from './Cards.module.css';

export default function Cards({ cities, onClose }) {
	// acá va tu código
	// tip, podés usar un map

	if (!cities) {
		return <h3>No hay cities que mostrar</h3>;
	}

	return (
		<div className={style.container}>
			<div className={style.cards}>
				{cities.map((e) => (
					<Card
						max={e.max}
						min={e.min}
						name={e.name}
						img={e.img}
						onClose={() => onClose(e.id)}
						key={e.id}
						id={e.id}
					/>
				))}
			</div>
		</div>
	);
}
