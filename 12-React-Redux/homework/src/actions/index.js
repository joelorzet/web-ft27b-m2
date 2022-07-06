const API_KEY = 'fb264214';

export function addMovieFavorite(payload) {
	return { type: 'ADD_MOVIE_FAVORITE', payload };
}

export function removeMovieFavorite(payload) {
	return {
		type: 'REMOVE_MOVIE_FAVORITE',
		payload: payload,
	};
}

export function getMovies(titulo) {
	return function (dispatch) {
		return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${titulo}`)
			.then((response) => response.json())
			.then((json) => {
				dispatch({ type: 'GET_MOVIES', payload: json });
			});
	};
}

export function getMovieDetail(id) {
	return function (dispatch) {
		return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
			.then((res) => res.json())
			.then((json) => {
				dispatch({ type: 'GET_DETAIL', payload: json });
			});
	};
}
