import { 
    createShoppingCartItem, 
    fetchAllShoppingCartItems, 
    updateShoppingCartItem 
} from '../../actions/shopping_cart_action';
import NewShoppingCartItem from './new_shopping_cart_item';
import { connect } from 'react-redux';

const msp = (state, ownProps) => {
    return {
        product_id: ownProps.product_id,
        user_id: state.session.id,
        errors: state.errors.shoppingCartItems 
    }
}

const mdp = dispatch => {
    return {
        createShoppingCartItem: (shoppingCartItem) => dispatch(createShoppingCartItem(shoppingCartItem)),
        fetchAllShoppingCartItems: () => dispatch(fetchAllShoppingCartItems()),
        updateShoppingCartItem: (shoppingCartItem) => dispatch(updateShoppingCartItem(shoppingCartItem))

    }
}

export default connect(msp, mdp)(NewShoppingCartItem);
