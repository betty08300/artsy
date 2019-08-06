import React from 'react';
import ProductsIndexItem from '../products/products_index_item';
import { Link } from 'react-router-dom';

class ShopIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllProducts(this.props.userId);
    }

    render() {
        
        const products = this.props.products.map((product) => {
            return (
                <ProductsIndexItem
                    key={product.id}
                    product={product}/>
            )
        })
        return (
            <div>
                <div className='shop-header'>
                    <h2>Stock your shop</h2>
                    <p>Add as many listings as you can. Ten or more would be a great start. More listings means more chances to be discovered!</p>
                </div>
                <div className='products-grid'>
                    <div className='products-grid-item add-item'>
                        <Link to={`/products/new`}>
                            <h1>+</h1>
                            <p>Add a listing</p>
                        </Link>
                    </div>
                    
                    {products}
                </div>
            </div>
            
        )
    }
}
export default ShopIndex; 