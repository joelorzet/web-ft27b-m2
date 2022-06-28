import React from 'react';

export default function SearchBar(props) {
	// acá va tu código
	console.log(props);
	return (
		<div>
			<div>Search Bar Component</div>

			<input></input>
			<button onClick={props.onSearch}>Buscar</button>
		</div>
	);
}
