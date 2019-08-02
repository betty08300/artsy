import React from 'react';
import Profile from './profile_dropdown';

const Greeting = ({ id, logout, openModal }) => {
    


    const sessionLinks =() => {
    
        if (id) {
            return (
                <div className='login-signup'>
                    <Profile/>
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