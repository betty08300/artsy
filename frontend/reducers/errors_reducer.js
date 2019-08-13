import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import product from './product_errors_reducer';
import shoppingCartItem from './shopping_cart_item_errors_reducer';
import comment from './comment_errors_reducer';



export default combineReducers({
    session,
    product,
    shoppingCartItem,
    comment,
});
