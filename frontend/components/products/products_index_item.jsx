import React from 'react';
import { Link } from 'react-router-dom';

const ProductsIndexItem = props => (
   <div>
        <li>
            <Link to={`/products/${product.id}`}>
                {/* <div>
                <img src="" alt=""/>
            </div> */}
                <h2>{product.title}</h2>
                <h3>{product.seller.first_name}</h3>
                <h5>{product.price}</h5>
            </Link>
        </li>
   </div>
);

export default ProductsIndexItem; 