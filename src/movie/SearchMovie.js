import React, { useState } from 'react';

const SearchMovie = ({ search, movies }) => {
  const [searchTitleMovie, setTitleMovieValue] = useState('');

  const onChangeSearchMovieTitle = (e) => {
     
   setTitleMovieValue(e.target.value.toLowerCase());    
  };

  const resetInputField = () => {
    setTitleMovieValue('');
  };

  const findMovieByTitle =   (e) => {
    e.preventDefault();
    search(searchTitleMovie);
   resetInputField();
  };

  return (
    <div>
      <form className='form search'>
        <input
          type='text'
          className='input-text'
          value={searchTitleMovie}
          placeholder='Search Movies by title...'
          onChange={onChangeSearchMovieTitle}
        />

        <button
         className="btn btn-dark btn-block"
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
