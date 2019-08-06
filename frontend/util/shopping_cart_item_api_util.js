export const creatShoppingCartItem = (shopping_cart_item) => {
    return $.ajax({
        method: 'POST',
        url: 'api/shopping_cart_items',
        data: {shopping_cart_item} 
    })
}

export const deleteShoppingCartItem = (id) => {
    return $.ajax({
        method: "DELETE",
        url: `api/shopping_cart_items/${id}`
    })
}

export const fetchAllShoppingCartItems = (userId) => {
    return $.ajax({
        method: 'GET',
        url: 'api/shopping_cart_items',
        data: {user_id: userId} 
    })
}

export const updateShoppingCartItem = (shopping_cart_item) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/shopping_cart_items/${shopping_cart_item.id}`,
        data: {shopping_cart_item}
    })

}