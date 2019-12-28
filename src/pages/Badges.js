import React from 'react';
import {  Link  } from 'react-router-dom';
import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from  '../components/BadgesList';
import api from '../api';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

class Badges extends React.Component{

    constructor(props){
        super(props);
        console.log('1. Constructor')

        this.state = {
            loading: true,
            error: null,
            data: undefined,
        };
    
    }

    fetchData = async () => {
        this.setState({loading: true, error: null});

        try{
            const data = await api.badges.list();
            this.setState({loading: false, data: data});
        }
        catch(error){
            this.setState({loading: false, error: error});
        }
    }

    componentDidMount(){
        this.fetchData();
        console.log('3. ComponentDidMount()');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('5. componentDidUpdate')
        console.log({
            prevProps: prevProps, prevState: prevState
        })

        console.log({
            props: this.props, state: this.state
        })
    }

    componentWillUnmount(){
        console.log('6. componentWillUnmount')
        clearTimeout(this.timeoutId)
    }

    render(){
        if(this.state.loading){
            return <PageLoading />
        }

        if(this.state.error){
            return <PageError error={this.state.error} />;
        }
        console.log('2. Render()');
        return(
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className='Badges__conf-logo' src={confLogo} alt="Conf Logo"/>
                        </div>
                    </div>
                </div>

                <div className="Badge__container">
                    <div className="Badges__buttons">
                        <Link className='btn btn-primary' to="/badges/new">New Badge</Link>
                    </div>
                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data} />
                            
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;