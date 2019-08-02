import merge from 'lodash/merge';

import { 
    RECEIVE_ALL_PRODUCTS,
    RECEIVE_PRODUCT,
    REMOVE_PRODUCT,
    RECEIVE_PRODUCT_ERRORS,
} from '../actions/product_actions';

const productsReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_PRODUCTS:
            return action.products;
        
        case RECEIVE_PRODUCT:
            const newProduct = { [action.product.id]: action.product };
            return merge({}, state, newProduct)

        case REMOVE_PRODUCT:
            // TODO: remove item from state 
            return;

        case RECEIVE_PRODUCT_ERRORS:
            return action.errors;
        
        default:
            return state;
    }
}

export default productsReducer;