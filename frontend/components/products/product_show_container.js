import { fetchProduct } from '../../actions/product_actions';
import { connect } from 'react-redux';
import ProductShow from './product_show';


const msp = (state,ownProps) => {
    const defaultProduct = {
        id: '',
        title: '',
        description: '',
        price: '',
        who: '',
        what: '',
        when: '',
        user_id: state.session.id,
        imgUrl: ''

    }
    
    let product = state.entities.products[ownProps.match.params.productId] || defaultProduct
    let seller = state.entities.user[product.user_id]
    
    return {
        product,
        seller,
        userId: state.session.id,
    }
}

const mdp = dispatch => {
    return{
        fetchProduct: (id) => dispatch(fetchProduct)
    }
}

export default connect(msp, mdp)(ProductShow); 