import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Gallery from './gallery'

class ProductShow extends React.Component{
    constructor(props){
        super(props);
        this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.productId);
    };

    componentDidUpdate(prevProps){
        if (prevProps.match.params.productId != this.props.match.params.productId){
            this.props.fetchProduct(this.props.match.params.productId)
        }
    }

    addToCart() {
        const params = {
            'user_id': this.props.userId,
            'product_id': this.props.product.id,
            'quantity': 1
        }
        this.props.creatShoppingCartItem(params).then(() => {
            this.props.history.push('/cart');
        });
    }

    render(){
       
        const {product} = this.props;

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

                    <div className='add-to-cart'>
                        {this.props.userId &&
                            <button onClick={this.addToCart}> Add to cart</button>   
                        }
                    </div>
                </div>
                

            </div>
            
        )
    }


}

export default withRouter(ProductShow); 