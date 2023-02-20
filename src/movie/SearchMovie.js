import React, { useState } from 'react';

const SearchMovie = ({ search }) => {
  const [searchMovie, setMovieValue] = useState('');

  const handleSearchMovieInput = (e) => {
    setMovieValue(e.target.value);
  };

  const resetInputField = () => {
    setMovieValue('');
  };

  const onSubmitMovieSearch = (e) => {
    e.preventDefault();
    search(searchMovie);
    resetInputField();
  };

  return (
    <div>
      <h3>Search Movie</h3>

      <form className='search'>
        <input
          type='text'
          value={searchMovie}
          onChange={handleSearchMovieInput}
          placeholder="Search Movies..."
        />
        <input type='submit' value='Search' onClick={onSubmitMovieSearch} />
      </form>
    </div>
  );
};

export default SearchMovie;
