import { 
    RECEIVE_ALL_COMMENTS, 
    RECEIVE_COMMENT, REMOVE_COMMENT, 
} from '../actions/comment_actions';

const CommnetsReducer = (state={}, action) => {
    switch (action.type) {
        case RECEIVE_ALL_COMMENTS:
            return merge({}, action.comments);

        case RECEIVE_COMMENT:
            return merge({}, state, {[action.comment.id]: action.comment});

        case REMOVE_COMMENT: 
            let newState = merge({}, state);
            delete newState[action.comment.id];
            return newState;
    
        default:
            return state;
    }
}

export default CommnetsReducer; 