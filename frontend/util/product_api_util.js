export const createProduct = (product) => {
    return $.ajax({
        method: 'POST',
        url: `api/products`,
        data: { product }

    })
}

export const createProductForm = (product) => {
    return $.ajax({
        method: 'POST',
        url: `api/products`,
        data: { product },
    })
}

export const fetchAllProducts = () => {
    return $.ajax({
        method: 'GET',
        url: `api/products`
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
        url: `api/products/${product.id}`,
        data: {product}
    })
}

export const updateProductForm = (product) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/producs/${product.id}`,
        data: product
    })
}

export const deleteProduct = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/products/${id}`
    })
}