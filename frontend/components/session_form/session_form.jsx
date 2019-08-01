import React from 'react';

import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.handleForm(user).then(()=>{
            this.props.closeModal()
        });
    }

    handleClick(e){
        e.preventDefault();
        const demo = {
            email: 'betty2019@gmail.com',
            password: 'betty2019'
        }
        this.props.loginDemoUser(demo).then(()=>{
            this.props.closeModal()
        });
    }



    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
           
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    {/* <div onClick={this.props.closeModal} className='close-x'>X</div> */}
                    <h3 className='title'>{this.props.titleText}</h3>
                    <h6 className='sub-title'>{this.props.subTitle}</h6>
                    {this.renderErrors()}
                    <div className="login-form">
                        {this.props.formType === 'Register' &&
                            <label>First name <span className='star'>*</span>
                            <input type="text"
                                    value={this.state.first_name}
                                    onChange={this.update('first_name')}
                                    className="login-input"
                                />
                            </label>
                        }
                        <label>Email
                            {this.props.formType === 'Register' &&
                                <span className='star'> * </span>
                            }
                            <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"
                            />
                        </label>
                        <label>Password
                            {this.props.formType === 'Register' &&
                                    <span className='star'> * </span>
                            }
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <input className="session-submit" type="submit" value={this.props.formType} />
                        
                            <div>
                                <div className='divider'>
                                <hr className='left' /> <span className="or">OR</span> <hr className='right'/>   
                                </div>
                                <button className='demo-user' onClick={this.handleClick}>Demo User</button>
                            </div>
                
                    </div>
                  
                </form>
                {/* <div class="loader">Loading...</div> */}
            </div>
        
            
        );
    }
}

export default withRouter(SessionForm);
