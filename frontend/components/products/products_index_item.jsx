import React from 'react';
import { Link } from 'react-router-dom';

const ProductsIndexItem = props => (
   <div className='product-item'>
        <Link to={`/products/${props.product.id}`}>
            <img src={props.product.images[0]} alt="" />
            <h3>${props.product.price}</h3>
        </Link>
   </div>
);

export default ProductsIndexItem; 