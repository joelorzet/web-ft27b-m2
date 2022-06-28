import React from 'react';

const styles = {
	boxSizing: 'border-box',
	backgroundColor: '#47B5FF',
	width: '300px',
	height: '200px',
	borderRadius: '20px',
	fontWeight: '500',
	buttonFlex: {
		display: 'flex',
		justifyContent: 'end',
		alignItems: 'center',
	},
	cardButton: {
		borderStyle: 'none',
		padding: '4px 8px',
		backgroundColor: 'red',
		borderRadius: '5px',
		float: 'right',
		margin: '8px',
		fontWeight: 'bold',
	},
	mainCardTemp: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		margin: '10px 0px',
	},
	mainCardParraf: {
		display: 'flex',
		flexDirection: 'column',
		margin: '8px',
		lineHeight: '30px',
	},
};
export default function Card({ max, min, img, name, onClose }) {
	// acá va tu código
	return (
		<div style={styles} className='main-card'>
			<div style={styles.buttonFlex}>
				<button style={styles.cardButton} className='cardButton' onClick={onClose}>
					<span>X</span>
				</button>
			</div>
			<h3>{name}</h3>
			<div style={styles.mainCardTemp} className='main-card-temp'>
				<p style={styles.mainCardParraf}>
					<span>Min</span>
					<span>{min}</span>
				</p>

				<p style={styles.mainCardParraf}>
					<span>Max</span>
					<span>{max}</span>
				</p>
				<img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={'wheather-icon'}></img>
			</div>
		</div>
	);
}
