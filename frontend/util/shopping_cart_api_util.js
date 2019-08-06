export const creatShoppingCart = (shopping_cart) => {
    return $.ajax({
        method: 'POST',
        url: 'api/shopping_cart',
        data: {shopping_cart} 
    })
}

export const deleteShoppingCart = (id) => {
    return $.ajax({
        method: "DELETE",
        url: `api/shopping_cart/${id}`
    })
}

export const fetchShoppingCart = (userId) => {
    return $.ajax({
        method: 'GET',
        url: 'api/shopping_cart',
        data: {user_id: userId} 
    })
}

export const updateShoppingCart = (shopping_cart) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/shopping_cart/${shopping_cart.id}`,
        data: {shopping_cart}
    })

}