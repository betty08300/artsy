import React from 'react';


const Greeting = ({ currentUser, logout, openModal }) => {
    
    const sessionLinks =() => {
        if (currentUser) {
            return (
                <nav className='login-signup'>
                    <div className='login-signup-link-container'>
                        <img className='profile-img' src='https://randomuser.me/api/portraits/lego/1.jpg'/>
                        
                    </div>
                    <div>
                        <button className="login-signup-btn" onClick={logout}>Log Out</button>
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