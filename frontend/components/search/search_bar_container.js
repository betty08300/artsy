import SearchBar from './search_bar';
import { connect } from 'react-redux';
import { searchProducts } from '../../actions/product_actions';

const mdp = dispatch => {
    return {
        searchProducts: (query) => dispatch(searchProducts(query))
    }
}

export default connect(null, mdp)(SearchBar);
