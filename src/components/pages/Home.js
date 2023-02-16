import React, { Fragment } from 'react';

import SearchMovie from '../../movie/SearchMovie';

const Home = ({ search }) => {
  return (
    <Fragment>
      <SearchMovie searchMovie={search} />
    </Fragment>
  );
};

export default Home;