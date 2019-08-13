import React from 'react';
import { withRouter } from 'react-router-dom';
import Rating from 'react-rating'; 

const CommentIndexItem = ({ comment })=> {
    return (
        <div>
            <h2>{comment.user}</h2>
            <Rating
                emptySymbol='far fa-star'
                fullSymbol='far fa-star'
                initialRating={review.rating}
                readonly={true}
            />
            <div>{comment.body}</div>
        </div>
    )
}

export default withRouter(CommentIndexItem); 