json.extract! product, :id, :user_id, :seller, :title, :description, :price, :who, :what, :when
json.images product.images.map{|img| url_for(img)}