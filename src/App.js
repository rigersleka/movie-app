import React, { useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

/* Import Pages */
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';
import NotFound from './components/pages/NotFound';

/* Import Layout */
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';

/* Import Reducer Types & Config */
import { initialState, movieReducer } from './store/movieReducer';
import {
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_FAILURE,
  SEARCH_MOVIES_SUCCESS,
} from './store/types';
import { MOVIE_APP_URL, REACT_OMD_API } from './config';

const App = () => {
  const [state, dispatch] = useReducer(movieReducer, initialState);
  const { movies, errorMessage, loading } = state;

  useEffect(() => {getMovies()}, []);

  const getMovies = async () => {
    await axios.get(MOVIE_APP_URL).then((jsonResponse) => {
      dispatch({
        type: SEARCH_MOVIES_SUCCESS,
        payload: jsonResponse.data.Search,
      });
    });
  };

  const searchMovieByTitle = async (searchValue) => {
    dispatch({
      type: SEARCH_MOVIES_REQUEST,
    });

    await axios(`${REACT_OMD_API}/?s=${searchValue}&apiKey=6c3a2d45`).then(
      (jsonResponse) => {
        if (jsonResponse.data.Response === 'True') {
          dispatch({
            type: SEARCH_MOVIES_SUCCESS,
            payload: jsonResponse.data.Search,
          });
        } else {
          dispatch({
            type: SEARCH_MOVIES_FAILURE,
            error: jsonResponse.data.Error,
          });
        }
      }
    );
  };

  return (
    <div className='App' style={userStyle}>
      <Header title='Movie App' />

      <Router>
        <div className='App'>
          <Navbar title='Movie App Container' icon='fa fa-file-movie-o' />
          <div className='container'>
            <Routes>
              <Route
                exact
                path='/'
                element={
                  <Home
                    search={searchMovieByTitle}
                    movies={movies}
                    loading={loading}
                    errorMessage={errorMessage}
                  />
                }
              />
              <Route path='/about' element={<About />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default App;
