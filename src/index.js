import React from 'react';
import reactDOM from 'react-dom';
import Badge from './components/Badge';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';


const container = document.getElementById('app');

//reactDOM.render(__qué__, __dónde__);
reactDOM.render(<Badge />, container);
