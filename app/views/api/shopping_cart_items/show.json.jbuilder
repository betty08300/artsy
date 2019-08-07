json.extract! @shopping_cart_item, :id, :user_id, :product_id, :quantity 
json.images @shopping_cart_item.product.images.map{|img| url_for(img)}