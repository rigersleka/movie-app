import React, { Fragment } from 'react';

/* import Stateless components */
import SearchMovie from '../../movie/SearchMovie';
import MovieItem from '../../movie/MovieItem';
import Spinner from '../layout/Spinner';

const Home = ({ search, movies, loading, errorMessage }) => {
  const showMovies =
    loading && !errorMessage ? (
      <>
       <Spinner/>
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
