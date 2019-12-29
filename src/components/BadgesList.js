import  React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import './styles/BadgesList.css';
import {Link} from 'react-router-dom';
import Gravatar from './Gravatar';

class BadgesList extends React.Component{
    render(){
        if(this.props.badges.length === 0){
            return(
                <div>
                    <h3>No encontramos ningun badge</h3>
                    <Link className='btn btn-primary' to='/badges/new'> Create new badge</Link>
                </div>
            )
        }
        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge) =>{
                    return(
                        <li className='BadgesListItem' key={badge.id}>
                        <Link className='text-reset text-decoration-none' to={`/badges/${badge.id}/edit`}>
                            <div className='container'>
                                <div className="row">
                                    <div className="col-2">
                                        <Gravatar className="BadgesListItem__avatar" email={badge.email} />
                                    </div>
                                    <div className="col-10">
                                        <div className="ml-3">
                                            <span className='font-weight-bold'>{badge.firstName} {badge.lastName}</span>
                                            <br/>
                                            <span className='twitterData'><FontAwesomeIcon icon= {faTwitter} /> @{badge.twitter}</span>
                                            <br/>
                                            <span>{badge.jobTitle}</span>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </Link>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default BadgesList;