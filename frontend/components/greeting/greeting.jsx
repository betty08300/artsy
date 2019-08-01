import React from 'react';


const Greeting = ({ currentUser, logout, openModal }) => {
    
    const sessionLinks =() => (
        <nav className='login-signup'>
            <div>
                <button onClick={() => openModal('login')}>Login</button>
                {/* &nbsp;or&nbsp; */}
            </div>
            <div>
                <button onClick={() => openModal('signup')}>Register</button>
            </div>
            <div>
                <button className="header-button" onClick={logout}>Log Out</button>   
            </div>
        </nav>
        
       
    )

    return (
        currentUser ? 
        sessionLinks(currentUser, louout) : sessionLinks()
    ); 
}

export default Greeting; 