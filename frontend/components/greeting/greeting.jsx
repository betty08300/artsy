import React from 'react';
import Profile from './profile_dropdown';
import { Link } from 'react-router-dom';
import SearchBarContainer from '../search/search_bar_container';
 
const Greeting = ({ id, logout, openModal }) => {
    


    const sessionLinks =() => {
        
        if (id) {
            return (
                <div className='login-signup'>
                    <div className='shop'>
                        <Link to={`/shop`} className='shop-manager'>
                            <img className='shop-icon' src="https://iconsplace.com/wp-content/uploads/_icons/ffa500/256/png/shop-icon-11-256.png" />
                            <p>Shop Manager</p>        
                        </Link>
                    </div>
                    <Profile/>
                    <div className='cart-container'>
                        <img className='cart-icon' src='https://image.flaticon.com/icons/svg/1170/1170576.svg'/>
                        <Link to={`/cart`} className='cart-text'>Cart</Link>
                    </div>
                </div>
            )
        } else {
            return (
                <nav className='login-signup'>
                    <div className="login-signup-link-container">
                        <button onClick={() => openModal('signup')} className="login-signup-btn signup">Register</button>
                    </div>
                    <div>
                        <button onClick={() => openModal('login')} className="login-signup-btn login">Sign In</button>

                    </div>
                </nav>


            )
        }
    }

    return (
        sessionLinks()
    ); 
}

export default Greeting; 