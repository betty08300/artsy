import React from 'react';
import { withRouter } from 'react-router-dom';
import ProductsIndexItem from './products_index_item';
import { Link } from 'react-router-dom';

class ProductIndex extends React.Component{
   componentDidMount(){
       this.props.fetchAllProducts();
   }

  

    render() {
        return (
            <div className='recently-add-products'>
                <div className='recently-add'>Recently Added</div>
                <div className='products-grid'>
                    {this.props.products.map(product => {
                        return (
                            <Link to={`/products/${product.id}`} key={product.id} className='products-grid-item'>
                                <ProductsIndexItem product={product}  />
                            </Link>
                        )
                    })}
                </div>
            </div>
        );
    
    }
}


export default ProductIndex; 