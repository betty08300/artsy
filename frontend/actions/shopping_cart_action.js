import * as ShoppingCartAPIUtil from '../util/shopping_cart_item_api_util';

export const RECEIVE_SHOPPING_CART_ITEM = 'RECEIVE_SHOPPING_CART_ITEM';
export const RECEIVE_ALL_SHOPPING_CART_ITEMS = 'RECEIVE_ALL_SHOPPING_CART_ITEMS';
export const REMOVE_SHOPPING_CART_ITEM = 'REMOVE_SHOPPING_CART_ITEM';
export const RECEIVE_SHOPPING_CART_ERRORS = 'RECEIVE_SHOPPING_CART_ERRORS';

const receiveShoppingCartItem = (shoppingCartItem) => {
    return {
        type: RECEIVE_SHOPPING_CART_ITEM,
        shoppingCartItem 
    }
}

const receiveAllShoppingCartItems = (shoppingCartItems) => {
    return {
        type: RECEIVE_ALL_SHOPPING_CART_ITEMS,
        shoppingCartItems 
    }
}

const removeShoppingCartItem = (id) => {
    return {
        type: REMOVE_SHOPPING_CART_ITEM,
        ShoppingCartItemId: id 
    }
}

const receiveShoppingCartItemErrors = (errors) =>{
    return{
        type: RECEIVE_SHOPPING_CART_ERRORS,
        errors 
    }
}

export const creatShoppingCartItem = (shoppingCartItem) => dispatch => {
    return ShoppingCartAPIUtil.creatShoppingCartItem(shoppingCartItem).then((shoppingCartItem)=> {
        return dispatch(receiveShoppingCartItem(shoppingCartItem))
    }, (errors) => {
            return dispatch(receiveShoppingCartItemErrors(errors.responsJSON))
    })
}

export const deleteShoppingCartItem = (id) => dispatch => {
    return ShoppingCartAPIUtil.deleteShoppingCartItem(id).then((id)=>{
        return dispatch(removeShoppingCartItem(id))
    }, (errors) => {
            return dispatch(receiveShoppingCartItemErrors(errors.responsJSON))
    }) 
}


export const fetchAllShoppingCartItems = (userId) => dispatch => {
    return ShoppingCartAPIUtil.fetchAllShoppingCartItems(userId).then((shoppingCartItems)=>{
        return dispatch(receiveAllShoppingCartItems(shoppingCartItems))
    }, (errors) => {
        return dispatch(receiveShoppingCartItemErrors(errors.responsJSON))
    }) 
}

export const updateShoppingCartItem = (shopping_cart_item) => dispatch => {
    return ShoppingCartAPIUtil.updateShoppingCartItem(shopping_cart_item).then((shoppingCartItem)=>{
        return dispatch(receiveShoppingCartItem(shoppingCartItem))
    }, (errors) => {
            return dispatch(receiveShoppingCartItemErrors(errors.responsJSON))
    })
}
