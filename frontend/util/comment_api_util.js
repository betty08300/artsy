export const fetchAllComments = (productId) => {
    console.log('api util: ' + productId);
    return $.ajax({
        method: 'GET',
        url: `api/products/${productId}/comments`,
        data: {productId}
    })
}

// export const fetchComment = (id) => {
//     return $.ajax({
//         method: 'GET',
//         url: `api/products/${productId}/comments/${id}`
//     })
// }

export const createComment = (comment) => {
    return $.ajax({
        method: 'POST',
        url: `api/products/${comment.product_id}/comments`,
        data: {comment}
    })
}

export const updateComment = (comment) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/products/${comment.product_id}/comments/${comment.id}`,
        data: { comment }
    })
}

export const deleteComment = (comment) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/products/${comment.productId}/comments/${comment.id}`
    })
}