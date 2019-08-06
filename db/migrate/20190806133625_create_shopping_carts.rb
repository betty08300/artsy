class CreateShoppingCarts < ActiveRecord::Migration[5.2]
  def change
    create_table :shopping_carts do |t|
      t.integer :user_id, null: false 
      t.integer :product_id, null: false 
      t.integer :quantity, null: false 

      t.timestamps

    end
    add_index :shopping_carts, :user_id
    add_index :shopping_carts, :product_id
  end
end
