import { createComment } from '../../actions/comment_actions';
import { connect } from 'react-redux';
import CommentForm from './comment_form';

const msp = (state, ownProps) => {
    const default_comment = {
        user_id: state.session.id,
        product_id: ownProps.match.params.productId,
        body: '',
        rating: 0
    }

    return {
        comment: default_comment,
        user_id: state.session.id,
        product_id: state.entities.products.id,
        errors: state.errors.comments,
    }
}

const mdp = dispatch => {
    return {
        action: (comment) => dispatch(createComment(comment))
    }
}

export default connect(msp, mdp)(CommentForm); 