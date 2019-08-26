export const createProduct = (product) => {
    return $.ajax({
        method: 'POST',
        url: `api/products`,
        data: product,
        contentType: false,
        processData: false
    })
}

export const fetchAllProducts = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `api/products`,
        data: {user_id: userId}
    })
}

export const fetchProduct = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/products/${id}`
    })
}

export const updateProduct = (product) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/products/${product.get('product[id]')}`,
        data: product,
        contentType: false,
        processData: false
    })
}

export const deleteProduct = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/products/${id}`
    })
}

export const searchProducts = (query) => {
    return $.ajax({
        method: 'GET',
        url: `api/products/search`,
        data: {query}
    })
}