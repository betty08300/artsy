import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { logout } from '../../actions/session_actions';



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
        <>
            <div className='login-signup-link-container' onFocus={this.showDropDown} onBlur={this.hideDropDown} tabIndex="0">
                <div className="dropdown-top">
                    <img className='profile-img' src='https://randomuser.me/api/portraits/lego/1.jpg' /><div>You</div>
                    <div className={`${hide}`} >
                        <hr className='divider'/>
                    </div>
                    </div>
                <div className={`dropdown ${hide}`} >
                    <div className="dropdown-bottom">
                            <hr className='divider' />
                        <div className='logout' onClick={this.handleClick}>Sign Out</div>
                    </div>
                </div>
            </div>
           
        </>    
        )
    }

}

export default connect(null, mdp)(Profile); 