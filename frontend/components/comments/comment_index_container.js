import { fetchAllComments, receiveComment, deleteComment } from '../../actions/comment_actions';
import { connect } from 'react-redux';
import CommentIndex from './comment_index';

const msp = (state, ownProps) => {
    return {
        comments: Object.keys(state.entities.comments).map(id => state.entities.comments[id]),
        user_id: state.session.id,
        product_id: ownProps.product_id
    }

}

const mdp = (dispatch) => {
    return {
        fetchAllComments: (productId) => dispatch(fetchAllComments(productId)),
        receiveComment: (comment) => dispatch(receiveComment(comment)),
        deleteComment: (comment) => dispatch(deleteComment(comment))
    }
}

export default connect(msp, mdp)(CommentIndex);