import React from 'react';
import { Link } from 'react-router-dom';

const ProductsIndexItem = props => (
   <div className='products-grid-item'>
        <Link to={`/products/${props.product.id}`}>
            <img src={props.product.images[0]} />
            <h3>${(props.product.price).toFixed(2)}</h3>
        </Link>
   </div>
);

export default ProductsIndexItem; 