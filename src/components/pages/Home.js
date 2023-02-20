import React, { Fragment } from 'react';
import MovieList from '../../movie/MovieList';
import SearchMovie from '../../movie/SearchMovie';

const Home = ({ search, movies, loading, errorMessage }) => {
  return (
    <Fragment>
      <SearchMovie search={search}  movies={movies}/>

      <MovieList
        movies={movies}
        loading={loading}
        errorMessage={errorMessage}
      />
    </Fragment>
  );
};

export default Home;
