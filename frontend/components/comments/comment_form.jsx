import React from 'react';
import Rating from 'react-rating';
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

    userCommented() {
        const { comments, user_id } = this.props;
        for (let key in comments) {
            const subObj = comments[key];
            if (subObj.user_id === user_id){
                return true; 
            }
        }
        return false; 
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li className='error' key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render(){

        return this.props.user_id && !this.userCommented() && (
            <form onSubmit={this.handleSubmit}>
                <div className="review-form">
                    <h1>Write a Review</h1>
                    
                    <Rating
                        emptySymbol={<FontAwesomeIcon icon={regularStar} />}
                        fullSymbol={<FontAwesomeIcon icon={solidStar} />}
                        initialRating={this.state.rating}
                        onChange={this.update('rating')}
                        />
                    <div>
                        <div className='error-msg'> 
                            {this.renderErrors()}
                        </div>
                        <textarea onChange={this.update('body')} value={this.state.body}></textarea>
                    </div>
                    <button>Save</button>
                </div>
            </form>
        )
    } 
}

export default withRouter (CommentForm); 