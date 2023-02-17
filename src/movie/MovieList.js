import React, { Fragment } from 'react';

/* import Stateless components */
import MovieItem from './MovieItem';
import Spinner from '../components/layout/Spinner';

const MovieList = ({ search, movies, loading, errorMessage }) => {
  const showMovies =
    loading && !errorMessage ? (
      <>
        <Spinner />
      </>
    ) : errorMessage ? (
      <div className='errorMessage'>{errorMessage}</div>
    ) : (
      movies.map((movie, index) => (
        <MovieItem key={`${index}-${movie.Title}`} movie={movie} />
      ))
    );

  return <Fragment>{showMovies}</Fragment>;
};

export default MovieList;
