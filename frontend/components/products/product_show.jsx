import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ProductShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.productId)
    };

    componentDidUpdate(prevProps){
        if (prevProps.match.params.prodcut.id != this.props.match.params.productId){
            this.props.fetchProduct(this.props.match.params.productId)
        }
    }

    render(){
        return(
            <div>
                <div>
                    <h2>Title</h2>
                    <p>{this.props.prodcut.title}</p>
                </div>
                <div>
                    <h2>Description</h2>
                    <textarea>{this.props.product.description}</textarea>
                </div>

            </div>
            
        )
    }


}

export default withRouter(ProductShow); 