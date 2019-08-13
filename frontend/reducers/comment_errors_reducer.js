import { RECEIVE_COMMENT_ERRORS, RECEIVE_COMMENT } from '../actions/comment_actions';

const commentErrorsReducer = (state =[], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENT_ERRORS:
            return action.errors;
        case RECEIVE_COMMENT: 
            return []; 
        default:
            return state;
    }
}

export default commentErrorsReducer; 