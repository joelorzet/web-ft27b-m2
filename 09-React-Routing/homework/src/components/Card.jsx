import React from 'react';
import style from './Card.module.css';

export default function Card({ max, min, img, name, onClose, id }) {
	// acá va tu código
	return (
		<div className={style.card}>
			<div className={style.button}>
				<button className={style.cardButton} onClick={onClose}>
					<span>X</span>
				</button>
			</div>
			<h3 className={style.title}>{name}</h3>
			<div className={style.mainCardTemp}>
				<p className={style.cardParraf}>
					<span>Min</span>
					<span>{min}</span>
				</p>

				<p className={style.cardParraf}>
					<span>Max</span>
					<span>{max}</span>
				</p>
				<img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={'wheather-icon'}></img>
			</div>
		</div>
	);
}
