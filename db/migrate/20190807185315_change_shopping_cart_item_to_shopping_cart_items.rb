class ChangeShoppingCartItemToShoppingCartItems < ActiveRecord::Migration[5.2]
  def change
    rename_table :shopping_cart_item, :shopping_cart_items
  end
end
