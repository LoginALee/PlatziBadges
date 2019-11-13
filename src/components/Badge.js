import React from 'react';
import confLogo from '../images/badge-header.svg';
import './styles/Badge.css';

class Badge extends React.Component{
    render(){
        return(
        <div className='Badge'>
            <div className='Badge__header'>
                <img src={confLogo} alt="Logo"/>
            </div>

            <div className='Badge__section-name'>
                <img className='Badge__avatar' src="https://s.gravatar.com/avatar/8e51354a95ae7b18a324a03e171b7ddc?s=80" alt="Avatar"/>
                <h1> Alejandro <br/> Tinoco</h1>
            </div>

            <div className='Badge__section-info'>
                <h3>Frontend Engineer</h3>
                <div>@LoginALee</div>
            </div>

            <div className='Badge__footer'> #Platzi</div>

        </div>)
    }
}

export default Badge;