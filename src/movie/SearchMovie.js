import React, { useState } from 'react';

const SearchMovie = ({ search, movies }) => {
  const [searchTitleMovie, setTitleMovieValue] = useState('');

  const onChangeSearchMovieTitle = (e) => {
    const results = movies.filter((movie) => {
      if (e.target.value === '') return search;

      return movie.Title.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setTitleMovieValue(results);
    let newList = [];

    if (e.target.value !== '') {
      // assign the original list
      //determine which items should be displayed (use .filter array helper)
      newList = movies.filter((movie) => {
        // change currentItem and searchItem to LowerCase
        const movieTitle = movie.Title.toLowerCase();
        const filter = e.target.value.toLowerCase();

        // check to see if title element of currentItem includes searchTerm
        return movieTitle.includes(filter);
      });
    } else {
      // if search-bar is empty set into newList the original movie-list
      newList = movies;
    }

    setTitleMovieValue(newList);
  };

  const resetInputField = () => {
    setTitleMovieValue('');
  };

  const findMovieByTitle = (e) => {
    e.preventDefault();
    search(searchTitleMovie);
    resetInputField();
  };

  return (
    <div className='App'>
      <h3>Search Movie</h3>

      <form className='search'>
        <input
          type='text'
          placeholder='Search Movies by title...'
          value={searchTitleMovie}
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
