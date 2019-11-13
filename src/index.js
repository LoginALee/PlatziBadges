import React from 'react';
import reactDOM from 'react-dom';
import Badge from './components/Badge';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';


const container = document.getElementById('app');


reactDOM.render(
    <Badge 
        firstName='Alejandro'
        lastName='Tinoco'
        jobTitle='Frontend Engineer'
        twitter='LoginALee'
        avatarUrl='https://s.gravatar.com/avatar/8e51354a95ae7b18a324a03e171b7ddc?s=80'
    />, container);
