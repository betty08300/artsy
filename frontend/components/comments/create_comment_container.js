import { createComment } from '../../actions/comment_actions';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentForm from './comment_form';

const msp = (state, ownProps) => {
    const default_comment = {
        user_id: state.session.id,
        product_id: ownProps.match.params.productId,
        body: '',
        rating: 0,
        
    }

    return {
        comment: default_comment,
        comments: state.entities.comments,
        errors: state.errors.comment,
        product_id: state.entities.products.id,
        user_id: state.session.id
    }
}

const mdp = dispatch => {
    return {
        createComment: (comment) => dispatch(createComment(comment))
    }
}

export default withRouter(connect(msp, mdp)(CommentForm)); 