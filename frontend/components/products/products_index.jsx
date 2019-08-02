import React from 'react';
import { withRouter } from 'react-router-dom';
import ProductsIndexItem from './products_index_item';

class ProductIndex extends React.Component{
   componentDidMount(){
       this.props.fetchAllProducts()
   }

  

    render() {
        return (
            <div>
                <ul>
                    {this.props.products.map(product => {
                        return <ProductIndexItem products={products} key={product.id} />
                    })}
                </ul>
            </div>
        );
    
    }
}


export default ProductIndex; 