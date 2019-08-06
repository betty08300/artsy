json.extract! shopping_cart, :id, :user_id, :product_id, :quantity
@shopping_cart.each do |product|
    json.set! product.id do 
        json.price product.price 
        json.title product.title 
        if (product.image.attached?)
            json.imageUrl url_for(product.image)
        end 
    end 
end 
