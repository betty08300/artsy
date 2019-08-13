import React from 'react';
import Rating from 'react-rating';
import { withRouter } from 'react-router-dom';

class CommentForm extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.comment 

    }

    handleSubmit(e){
        e.preventDefault()
        this.props.action(this.state).then(() => {
            this.props.history.push(`/products/${productId}`)
        }) 
    }

    update(field){
        return(e) => {
            this.setState({[field]: e.target.value})
        }
    }

    render(){
        
        return(
          <form onSubmit={this.handleSubmit}>
                <div>
                    <h1>Write a Review</h1>
                    <img src={this.props.product.imgUrl} />
                    <h2>{this.props.product.title}</h2>
                    <button><i className='fas fa-times'></i></button>
                    <Rating
                        emptySymbol= 'far fa-star'
                        fullSymbol= 'far fa-star'
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