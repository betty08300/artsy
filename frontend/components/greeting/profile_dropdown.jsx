import React from 'react';
import { connect } from 'react-redux'; 
import { logout } from '../../actions/session_actions';

const msp = state => {
    return {
        currentUser: state.entities.users[state.session.id],
    }
}

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

class Profile extends React.Component{

    constructor(props){
        super(props);
        this.state = {show:false}
        this.showDropDown = this.showDropDown.bind(this);
        this.hideDropDown = this.hideDropDown.bind(this); 
        this.handleClick = this.handleClick.bind(this);
    }

    showDropDown(){
        this.setState({show:true})
    }

    hideDropDown(){
        this.setState({show:false})
    }

    handleClick(e){
        e.preventDefault()
        this.props.logout() 
    }

    render(){
        let hide = '';
        if (!this.state.show){
            hide = 'hide'
        }
        return (
        
            <div className='login-signup-link-container' onFocus={this.showDropDown} onBlur={this.hideDropDown} tabIndex="0">
                <div>
                    <img className='profile-img' src='https://randomuser.me/api/portraits/lego/1.jpg' />
                    <div className='text-link-container'>
                        <span className='text-link-copy'>You </span>
                        <span className='dropdown-arrow'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="7 10 10 6" aria-hidden="true" focusable="false"><polygon points="16.5 10 12 16 7.5 10 16.5 10"></polygon></svg>
                        </span>
                    </div>
                </div>
                <ul className={`dropdown ${hide}`}>
                    <li className="top">
                        <img className='profile-img' src='https://randomuser.me/api/portraits/lego/1.jpg' />
                        <div className='profile-details'>
                            <p className='user-name'>{this.props.currentUser.first_name}</p>
                            {/* <p className='view-profile-btn'>
                                View profile
                                <span className='view-profile-icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="7 7 10 10" aria-hidden="true" focusable="false"><path d="M10,17a1,1,0,0,1-.707-1.707L12.586,12,9.293,8.707a1,1,0,0,1,1.414-1.414L15.414,12l-4.707,4.707A1,1,0,0,1,10,17Z"></path></svg>
                                </span>
                            </p> */}
                        </div>
                    </li>
                    <li className="bottom">
                        <div className='logout' onClick={this.handleClick}>Sign Out</div>
                    </li>
                </ul>
            </div>
           
            
        )
    }

}

export default connect(msp, mdp)(Profile); 