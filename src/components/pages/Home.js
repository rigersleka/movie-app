import React, { Fragment } from 'react';

import spinner from '../../assets/spinner.gif';

import SearchMovie from '../../movie/SearchMovie';
import MovieItem from '../../movie/MovieItem';

const Home = ({ search, movies, loading, errorMessage }) => {
  const showMovies =
    loading && !errorMessage ? (
      <>
        <img src={spinner} alt='Loading spinner' />
      </>
    ) : errorMessage ? (
      <div className='errorMessage'>{errorMessage}</div>
    ) : (
      movies.map((movie, index) => (
        <MovieItem key={`${index}-${movie.Title}`} movie={movie} />
      ))
    );

  return (
    <Fragment>
      <SearchMovie searchMovie={search} />
      <div>{showMovies}</div>
    </Fragment>
  );
};

export default Home;
