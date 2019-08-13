import { updateComment } from '../../actions/comment_actions';
import { connect } from 'react-redux';
import CommentForm from './comment_form';

const msp = (state, ownProps) => {
    return {
        comment: state.entities.comment,
        user_id: state.session.id,
        product_id: ownProps.match.params.productId,
        errors: state.errors.comments,
    }
}

const mdp = dispatch => {
    return {
        action: (comment) => dispatch(updateComment(comment))
    }
}

export default connect(msp, mdp)(CommentForm); 