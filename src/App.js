import React, { useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

/* Import Pages */
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';
import NotFound from './components/pages/NotFound';

/* Import Layout */
import spinner from './assets/spinner.gif';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';

/* Import Reducer */
import MovieItem from './movie/MovieItem';
import { initialState, movieReducer } from './store/movieReducer';
import {
  SEARCH_MOVIES_FAILURE,
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
} from './store/types';

const MOVIE_APP_URL = 'http://www.omdbapi.com/?s=bridge&apiKey=6c3a2d45';

const App = () => {
  const [state, dispatch] = useReducer(movieReducer, initialState);
  const { movies, errorMessage, loading } = state;

  useEffect(() => {
    axios.get(MOVIE_APP_URL).then((jsonResponse) => {
      dispatch({
        type: SEARCH_MOVIES_SUCCESS,
        payload: jsonResponse.data.Search,
      });
    });
  }, []);

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
    <div className='App'>
      <Header title='Movie App' />

      <Router>
        <div className='App'>
          <Navbar title='Movie App Container' icon='fa fa-file-movie-o' />
          <div className='container'>
            <Routes>
              <Route exact path='/' element={<Home search={searchMovie} />} />
              <Route path='/about' element={<About />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>

      <div>{showMovies}</div>

      <Footer />
    </div>
  );
};

export default App;
