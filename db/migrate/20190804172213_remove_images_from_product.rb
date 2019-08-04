class RemoveImagesFromProduct < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :images, :string
  end
end
