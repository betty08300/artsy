class ChangeShoppingCartToShoppingCartItem < ActiveRecord::Migration[5.2]
  def change
    rename_table :shopping_carts, :shopping_cart_item
  end
end
