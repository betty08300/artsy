json.extract! @shopping_cart_item, :id, :user_id, :product_id, :quantity 
json.price @shopping_cart_item.product.price
json.images @shopping_cart_item.product.images.map{|img| url_for(img)}