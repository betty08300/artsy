import { fetchAllProducts } from "../../util/product_api_util";
import { connect } from "http2";

const msp = state => ({
    products: Object.keys(state.entities.products).map(id => state.entities.products[id])
});

const mdp = dispatch => ({
    fetchAllProducts: () => dispatch(fetchAllProducts())
});

export default connect(msp, mdp)(ProductsIndex)