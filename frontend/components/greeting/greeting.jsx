import React from 'react';


const Greeting = ({ currentUser, logout, openModal }) => {
    
    const sessionLinks =() => {
        if (currentUser) {
            return (
                <nav className='login-signup'>
                    <div className='login-signup-btn'>
                        <button className="header-button" onClick={logout}>Log Out</button>
                    </div>
                </nav>


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