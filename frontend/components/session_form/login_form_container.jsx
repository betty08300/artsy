import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';


const msp = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
    };
};

const mdp = dispatch => {
    return {
        handleForm: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={()=> dispatch(openModal('signup'))}>
                Register
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(msp, mdp)(SessionForm);
