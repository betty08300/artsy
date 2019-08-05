import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ProductShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.productId);
    };

    componentDidUpdate(prevProps){
        if (prevProps.match.params.productId != this.props.match.params.productId){
            this.props.fetchProduct(this.props.match.params.productId)
        }
    }

    render(){
        const {product} = this.props;
        return(
            <div>
                <div className="left-col">
                    <img src={product.images[0]}/>
                </div>
                <div className="right-col">
                    <div>
                        <h1>{product.title}</h1>
                    </div>
                    <div>
                        <h3>${product.price}</h3>
                    </div>
                    <div>
                        <h2>Description</h2>
                        <p>{product.description}</p>
                    </div>
                </div>
                

            </div>
            
        )
    }


}

export default withRouter(ProductShow); 