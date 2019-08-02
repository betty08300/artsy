class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.string :description, null:false 
      t.integer :price, null:false 
      t.string :images, null: false, array: true, default: []
      t.string :who, null: false 
      t.string :what, null:false 
      t.string :when, null:false 

      t.timestamps
    end
    add_index :products, :user_id
  end
end
