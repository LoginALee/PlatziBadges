import React from 'react';
import reactDOM from 'react-dom';
import BadgeNew from './pages/BadgeNew';
import 'bootstrap/dist/css/bootstrap.css'
import './global.css';

//const jsx = <h1>Hello, Platzi badges</h1>
//const element = React.createElement('a', {href: 'https://google.com'}, 'Hola, soy los children');
//const name = 'Aleeee';
//const element = React.createElement('h1', {}, `Hola, soy ${name}`);
//const sum = () => 3 + 3;
//const jsx = <h1>Hola soy, {null}</h1>


const container = document.getElementById('app');

//reactDOM.render(__qué__, __dónde__);
reactDOM.render(<BadgeNew />, container);
