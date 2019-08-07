json.shoppingCartItems do 
    @shopping_cart_items.each do |item|
        json.set! item.id do 
            json.extract! item, :id, :user_id, :product_id, :quantity
            json.extract! item.product, :title, :price
            json.images item.product.images.map{|img| url_for(img)}
        end 
    end 
end 
