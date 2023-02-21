import React, { useState } from 'react';

const SearchMovie = ({ search, movies }) => {
  const [searchTitleMovie, setTitleMovieValue] = useState('');

  const onChangeSearchMovieTitle = (e) => {
     
   setTitleMovieValue(e.target.value.toLowerCase());    
    /* resetInputField(); */
  };

  const resetInputField = () => {
    setTitleMovieValue('');
  };

  const findMovieByTitle =   (e) => {
    e.preventDefault();
    search(searchTitleMovie);
   // resetInputField();
  };

  return (
    <div className='App'>
      <h3>Search Movie</h3>

      <form className='search'>
        <input
          type='text'
          placeholder='Search Movies by title...'
          onChange={onChangeSearchMovieTitle}
        />

        <button
          className='btn btn-outline-secondary'
          type='button'
          onClick={findMovieByTitle}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchMovie;
