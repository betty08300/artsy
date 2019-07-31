import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = ({ errors } ) => {
    return {
        
        errors: errors.session,
        formType: 'signup',
        
    };
};

const mdp = dispatch => {
    return {
        handleForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                Login
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(msp, mdp)(SessionForm);
