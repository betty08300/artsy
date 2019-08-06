import { RECEIVE_SHOPPING_CART_ERRORS, 
    RECEIVE_SHOPPING_CART_ITEM} from '../actions/shopping_cart_action';

const ShoppingCartItemErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_SHOPPING_CART_ERRORS:
            return action.errors; 
        case RECEIVE_SHOPPING_CART_ITEM:
            return [];
        default: 
        return state;
    }
}

export default ShoppingCartItemErrorsReducer;
