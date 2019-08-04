import * as ProductAPIUtil from '../util/product_api_util';

export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const RECEIVE_PRODUCT_ERRORS = 'RECEIVE_PRODUCT_ERRORS';


export const receiveAllProducts = products =>({
    type: RECEIVE_ALL_PRODUCTS,
    products 
})

export const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product 
})

export const removeProduct = id => ({
    type: REMOVE_PRODUCT,
    productId: id
})

export const receiveProductErrors = errors => ({
    type: RECEIVE_PRODUCT_ERRORS,
    errors
});

export const createProduct = (product) => dispatch => (
    ProductAPIUtil.createProduct(product).then(product => (
        dispatch(RECEIVE_PRODUCT(product))
    ), err => (
            dispatch(receiveProductErrors(err.responseJSON))
    ))
); 

export const fetchAllProducts = () => dispatch => (
    ProductAPIUtil.fetchAllProducts().then(products => (
        dispatch(RECEIVE_ALL_PRODUCTS(products))
    ), err => (
            dispatch(receiveProductErrors(err.responseJSON))
    ))
);

export const fetchProduct = (id) => dispatch => (
    ProductAPIUtil.fetchProduct(id).then(product => (
        dispatch(RECEIVE_PRODUCT(product))
    ), err => (
        dispatch(receiveProductErrors(err.responseJSON))
    ))
);

export const updateProduct = (product) => dispatch => (
    ProductAPIUtil.updateProduct(product).then(product => (
        dispatch(RECEIVE_PRODUCT(product))
    ), err => (
        dispatch(receiveProductErrors(err.responseJSON))
    ))
);

export const deleteProduct = (id) => dispatch => (
    ProductAPIUtil.deleteProduct(id).then(product => (
        dispatch(REMOVE_PRODUCT(id))
    ), err => (
        dispatch(receiveProductErrors(err.responseJSON))
    ))
);

