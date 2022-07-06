import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
	componentDidMount() {
		const movieId = this.props.match.params.id;
		this.props.getMovieDetail(movieId);
	}
	// hacemos click en titulo de peli en Buscador.js o Favorites.js
	// movie/tt454545
	// renderizar el componente Movie
	// Movie recibe por params ? id
	// uso ese id para traerme la info de la peli

	render() {
		return (
			<div className='movie-detail'>
				<h1>Titulo {this.props.movie.Title}</h1>
				<p>Year {this.props.movie.Year}</p>
				<img src={this.props.movie.Poster}></img>
			</div>
		);
	}
}
function mapState(state) {
	return {
		movie: state.movieDetail,
	};
}

export default connect(mapState, { getMovieDetail })(Movie);
