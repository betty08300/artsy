json.extract! shopping_cart, :id, :user_id, :product_id, :quantity
@shopping_cart_items.each do |item|
    json.set! item.id do 
        json.partial! 'api/products/product', product: item.product
    end 
end 
