import {createProduct} from '../../actions/product_actions';
import { connect } from 'react-redux';
import ProductForm from './product_form';

const msp =(state) => {
    const defaultProduct = {
        id: '',
        title: '',
        description: '',
        price: 0,
        who: '',
        what: '',
        when: '',
        user_id: state.session.id,
        images: []

    }
    return {
        formType: 'create',
        product: defaultProduct,
        errors: state.errors.products
        
    }
    
}

const mdp = dispatch => {
    return {
        createProduct: (product) => dispatch(createProduct(product))
    }
}

export default connect(msp, mdp)(ProductForm); 