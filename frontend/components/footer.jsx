import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Footer extends React.Component{
    render(){
        return (
            <div className='footer'>
                            
                <div className='left-footer'>
                    <Link to='/'>
                        <h1 className='footer-logo'>Artsy</h1>
                        <link href="https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap" rel="stylesheet"></link>
                    </Link>
                </div>

                <div className='right-footer'>
                    <div className="footer-copyright">&copy; 2019 Artsy, Inc.</div>
                    <a href="https://www.linkedin.com/in/betty-wren-3664a9105/"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/betty08300"><i className="fab fa-github"></i></a>
                    <a href="https://angel.co/betty-wren"><i className="fab fa-angellist"></i></a>
                    <a href="http://bettywren.com/"><i className="fas fa-user"></i></a>                
                </div>

            </div>
        )
    }
}

export default withRouter(Footer);
