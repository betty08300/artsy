import React from 'react'; 
import Rating from 'react-rating';
import withRouter from 'react-router-dom';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.props.fetchAllComments(this.props.comments)
    }


    avgRating(){
        let sum = 0;
        this.props.comments.forEach((comment)=> {
            sum += comment.rating 
        });
        return (sun/ this.props.comments.length);
    }

    renderRating() {
        return (
            <div>
                <Rating
                    className="review-index-rating"
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"/>
            </div>
        )
    }

    render (){
      const comments = this.props.comments.map(comment=>{
          return(
              <CommentIndexItem key={comment.id} comment={comment}/>
          )
      })

        
    }

}

export default CommentIndex; 