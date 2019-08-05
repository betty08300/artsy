import React from 'react';
import { withRouter } from 'react-router-dom';
import ProductsIndexItem from './products_index_item';

class ProductIndex extends React.Component{
   componentDidMount(){
       this.props.fetchAllProducts();
   }

  

    render() {
        return (
            <div className='recently-add-products'>
                <div className='recently-add'>Recently Add</div>
                <div className='products-grid'>
                    {this.props.products.map(product => {
                        return <ProductsIndexItem product={product} key={product.id} />
                    })}
                </div>
            </div>
        );
    
    }
}


export default ProductIndex; 