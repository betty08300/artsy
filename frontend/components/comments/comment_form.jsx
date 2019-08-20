import React from 'react';
import Rating from 'react-rating';
// import 'font-awesome/css/font-awesome.min.css'
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'


class CommentForm extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.comment 
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.createComment(this.state).then(() => {
            this.setState({
                'body': ''
            })
        }) 
    }

    update(field) {
        return (e) => {
            if (field === "rating") {
                this.setState({ [field]: e });
            } else {
                this.setState({ [field]: e.target.value });
            }

        }
    }

    render(){
        
        return(
          <form onSubmit={this.handleSubmit}>
                <div>
                    <h1>Write a Review</h1>
                    <button><i className='fas fa-times'></i></button>
                    <Rating
                        emptySymbol={<FontAwesomeIcon icon={regularStar} />}
                        fullSymbol={<FontAwesomeIcon icon={solidStar} />}
                        initialRating={this.state.rating}
                        onChange={this.update('rating')}
                    />
                    
                    <textarea onChange={this.update('body')} value={this.state.body}></textarea>
                    <button>Save</button>
                </div>
          </form>
            
        )
    }



}

export default withRouter (CommentForm); 