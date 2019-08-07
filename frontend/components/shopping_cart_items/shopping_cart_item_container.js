import { connect } from 'react-redux';
import ShoppingCartIndex from './shopping_cart_index';
import { fetchAllShoppingCartItems, deleteShoppingCartItem, updateShoppingCartItem } from '../../actions/shopping_cart_action';

const msp = (state) => {
    let items = Object.keys(state.entities.shoppingCartItems).map(id=> state.entities.shoppingCartItems[id]);
    
    return {
        user_id: state.session.id,
        items: items 
    }
}

const mdp = dispatch => {
    return {
        fetchAllShoppingCartItems: (user_id) => dispatch(fetchAllShoppingCartItems(user_id)),
        deleteShoppingCartItem: (id) => dispatch(deleteShoppingCartItem(id)),
        updateShoppingCartItem: (shoppingCartItem) => dispatch(updateShoppingCartItem(shoppingCartItem))

    }
}

export default connect(msp, mdp)(ShoppingCartIndex);