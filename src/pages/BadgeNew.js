import React from 'react';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import './styles/BadgeNew.css';
import Badge from '../components/Badge';

class BadgeNew extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <div className='BadgeNew__hero'>
                    <img className='img-fluid' src={header} alt=""/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName='Alejandro'
                                lastName='Tinoco'
                                jobTitle='Frontend Engineer'
                                twitter='LoginALee'
                                avatarUrl='https://s.gravatar.com/avatar/8e51354a95ae7b18a324a03e171b7ddc?s=80'/>
                        </div>
                    </div>
                </div>
            </div>

            
        )
    }

}
export default BadgeNew;