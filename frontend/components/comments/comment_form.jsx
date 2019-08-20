import React from 'react';
import Rating from 'react-rating';
// import 'font-awesome/css/font-awesome.min.css'
import { withRouter } from 'react-router-dom';

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
                        emptySymbol= 'far fa-star'
                        fullSymbol= 'far fa-star'
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