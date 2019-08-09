import merge from 'lodash/merge'; 

import { 
    RECEIVE_SHOPPING_CART_ITEM, 
    RECEIVE_ALL_SHOPPING_CART_ITEMS, 
    REMOVE_SHOPPING_CART_ITEM,
} from '../actions/shopping_cart_action';

const shoppingCartItemsReducer = (state={}, action) => {
    switch(action.type){
        case RECEIVE_SHOPPING_CART_ITEM:
            return merge({}, state, {[action.shoppingCartItem.id]: action.shoppingCartItem});

        case RECEIVE_ALL_SHOPPING_CART_ITEMS:
            return merge({}, state, action.shoppingCartItems);

        case REMOVE_SHOPPING_CART_ITEM: 
            let newState = merge({}, state);
            delete newState[action.shoppingCartItemId];
            return newState;
            
        default:
            return state; 
    }
}

export default shoppingCartItemsReducer; 
