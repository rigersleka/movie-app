import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Import Pages */
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Footer from './components/layout/Footer';

/* Import Layout */
import Navbar from './components/layout/Navbar';
import Header from './components/layout/Header';
import About from './components/pages/About';

function App() {
  return (
    <div className='App'>
      <Header title='Movie App' />

      <Router>
        <div className='App'>
          <Navbar title='Movie App Container' icon='fa fa-file-movie-o' />
          <div className='container'>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>

      <Footer/>
    </div>
  );
}

export default App;
