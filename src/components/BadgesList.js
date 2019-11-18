import  React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import './styles/BadgesList.css';

class BadgesList extends React.Component{
    render(){
        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge) =>{
                    return(
                        <li className='BadgesListItem' key={badge.id}>
                        <div className='container'>
                            <div className="row">
                                <div className="col-2">
                                    <img className="BadgesListItem__avatar" src={badge.avatarUrl} alt=""/>
                                    
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
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default BadgesList;