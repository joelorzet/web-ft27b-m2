import React from 'react';

export default function SearchBar({ onSearch }) {
	// acá va tu código

	return (
		<div>
			<div>Search Bar Component</div>

			<input type='text' placeholder='Ciudad...'></input>
			<button onClick={() => onSearch('Buscando')}>Agregar</button>
		</div>
	);
}
