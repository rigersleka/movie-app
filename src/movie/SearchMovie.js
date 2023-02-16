import React, { useState } from 'react';

const SearchMovie = ({ searchMovie }) => {
  const [movieSearch, setMovieSearch] = useState('');

  const onChangeSearchMovie = (event) => {
    event.preventDefault();

    searchMovie(movieSearch);
    setMovieSearch('');
  };

  const onSubmitMovieSearch = (e) => {
    setMovieSearch(e.target.value);
  };

  return (
    <div>
      <h3>Search Movie</h3>
      <form className='search'>
        <input value={movieSearch} onChange={onChangeSearchMovie} type='text' />

        <input onClick={onSubmitMovieSearch} type='submit' value='SEARCH' />
      </form>
    </div>
  );
};

export default SearchMovie;
