import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Components/Views/Home';

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render(<Home />, wrapper) : false;
