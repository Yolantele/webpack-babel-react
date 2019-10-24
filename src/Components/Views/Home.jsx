import React from 'react';
import PropTypes from 'prop-types';

const Home = ({text = 'and some text'}) => (
  <main style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
    <h1>This is home page {text}</h1>
  </main>
);

Home.propTypes = {
  text: PropTypes.string
};

export default Home;
