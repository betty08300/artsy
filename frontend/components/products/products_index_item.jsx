import React from 'react';
import { Link } from 'react-router-dom';

const ProductsIndexItem = props => (
   <div>
        <img src={props.product.images[0]} />
        <h3>${(props.product.price).toFixed(2)}</h3>
   </div>
);

export default ProductsIndexItem; 