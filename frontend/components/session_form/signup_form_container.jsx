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
        // otherForm: (
        //     <button onClick={() => dispatch(openModal('login'))}>
        //         <h2>Create your account</h2>
        //         <h6>Registration is easy</h6>
        //     </button>
        // ),
        titleText: "Create your account",
        subTitle: 'Registration is easy',
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(msp, mdp)(SessionForm);
