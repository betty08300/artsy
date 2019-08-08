import { fetchAllProducts } from '../../actions/product_actions';
import { connect } from "react-redux";
import ShopIndex from './shop_index';

const msp = (state, ownProps) => ({
    userId: state.session.id,
    products: Object.keys(state.entities.products).map(id => state.entities.products[id])
});

const mdp = dispatch => ({
    fetchAllProducts: (userId) => dispatch(fetchAllProducts(userId))
});

export default connect(msp, mdp)(ShopIndex)

