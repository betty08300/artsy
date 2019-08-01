import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';


const msp = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign in',
    };
};

const mdp = dispatch => {
    return {
        handleForm: (user) => dispatch(login(user)),
        // otherForm: (
        //     <button onClick={()=> dispatch(openModal('signup'))}>
        //         <h2>Sign in to continue</h2>
                
        //     </button>
        // ),
        titleText: "Sign in to continue",
        closeModal: () => dispatch(closeModal()),
        loginDemoUser: (demo) => dispatch(login(demo))
    };
};

export default connect(msp, mdp)(SessionForm);
