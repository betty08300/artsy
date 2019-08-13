import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

export const receiveAllComments = (comments) => {
    return {
        type: RECEIVE_ALL_COMMENTS,
        comments 
    }
}

export const receiveComment = (comment) => {
    return {
        type: RECEIVE_COMMENT,
        comment 
    }
}

export const removeComment = (comment) => {
    return {
        type: REMOVE_COMMENT,
        comment 
    }
}

export const receiveCommentErrors = (errors) => {
    return {
        type: RECEIVE_COMMENT_ERRORS,
        errors 
    }
}

export const fetchAllComments = (productId) => dispatch => {
    console.log('action: ' + productId)
    return CommentAPIUtil.fetchAllComments(productId).then((comments)=>{
        return dispatch(receiveAllComments(comments))
    }, errors => {
        return dispatch(receiveCommentErrors(errors.responseJSON))
    })
}

export const createComment = (comment) => dispatch => {
    return CommentAPIUtil.createComment(comment).then((comment)=> {
        return dispatch(receiveComment(comment))
    }, errors => {
        return dispatch(receiveCommentErrors(errors.responseJSON))
    })
}

export const updateComment = (comment) => dispatch => {
    return CommentAPIUtil.updateComment(comment).then((comment) => {
        return dispatch(receiveComment(comment))
    }, errors => {
        return dispatch(receiveCommentErrors(errors.responseJSON))
    })
}

export const deleteComment = (comment) => dispatch => {
    return CommentAPIUtil.deleteComment(comment).then((comment)=>{
        return dispatch(removeComment(comment))
    }, errors => {
        return dispatch(receiveCommentErrors(errors.responseJSON))
    })
}