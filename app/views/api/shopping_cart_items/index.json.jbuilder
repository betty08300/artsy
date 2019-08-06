json.shoppingCartItems do 
    @shopping_cart_items.each do |item|
        json.set! item.id do 
            json.extract! item, :id, :user_id, :product_id, :quantity
            json.extract! item.product, :title, :price
        end 
    end 
end 
