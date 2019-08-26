import { combineReducers } from 'redux';

import users from './users_reducer';
import products from './products_reducer';
import shoppingCartItems from './shopping_cart_item_reducer';
import comments from './comments_reducer';


export default combineReducers({
    users,
    products,
    shoppingCartItems,
    comments
});
