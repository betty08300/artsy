import React from 'react';


const Greeting = ({ currentUser, logout, openModal }) => {
    
    const sessionLinks =() => (
        <nav className='login-singup'>
            <button onClick={()=> openModal('login')}>Login</button>
            &nbsp;or&nbsp;
            <button onClick={() => openModal('signup')}>Signup</button>
            <button className="header-button" onClick={logout}>Log Out</button>
        </nav>
    )

    return (
        currentUser ? 
        sessionLinks(currentUser, louout) : sessionLinks()
    ); 
}

export default Greeting; 