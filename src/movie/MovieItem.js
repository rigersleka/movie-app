import React from 'react';

const MovieItem = ({ movie }) => {
  return (
    <div>
      <h4>{movie.Title}</h4>
      <div>
        <img width='200' src={movie.Poster} />
      </div>
    </div>
  );
};

export default MovieItem;
