import React from 'react'; 
import Rating from 'react-rating';
import withRouter from 'react-router-dom';
import CommentIndexItem from './comment_index_item';
// import 'font-awesome/css/font-awesome.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'

class CommentIndex extends React.Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){
        console.log(this.props.product_id);
        this.props.fetchAllComments(this.props.product_id);
    }


    avgRating(){
        let sum = 0;
        this.props.comments.forEach((comment)=> {
            sum += comment.rating 
        });
        return (sum/ this.props.comments.length);
    }

    renderAverageRating() {
        return (
            <div>
                <Rating
                    className="review-index-rating"
                    emptySymbol={<FontAwesomeIcon icon={regularStar} />}
                    fullSymbol={<FontAwesomeIcon icon={solidStar} />}
                    initialRating={this.avgRating()}
                    readonly={true}/>
            </div>
        )
    }

    render (){
      const comments = this.props.comments.map(comment=>{
          return(
              <CommentIndexItem key={comment.id} comment={comment}/>
          )
      })
      return (
          <div>
              <h3>Comments</h3>
              { comments }
          </div>
      )

        
    }

}

export default CommentIndex; 