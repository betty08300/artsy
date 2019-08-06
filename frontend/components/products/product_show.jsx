import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Gallery from './gallery'

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
        console.log(product.images);
        return(
            <div className='product-container'>
                <div className="left-col">
                    {/* <img className='product-img-full' src={product.images[0]}/> */}
                    <Gallery images={product.images} />
                </div>
                <div className="right-col">
                    <div>
                        <h1>{product.title}</h1>
                        <link href="https://fonts.googleapis.com/css?family=Libre+Caslon+Text&display=swap" rel="stylesheet"></link>
                    </div>
                    <div>
                        <h3>${(product.price).toFixed(2)}</h3>
                    </div>
                    <div className='free-shipping'>
                        <p>Free Shipping to United States</p>
                    </div>
                    <div>
                        <h2>Item details</h2>
                        <p className='item-details'>{product.description}</p>
                    </div>
                    {this.props.seller.id === this.props.userId &&
                    <Link to={`/products/${product.id}/edit`}>Edit</Link>
                    }
                </div>
                

            </div>
            
        )
    }


}

export default withRouter(ProductShow); 