# == Schema Information
#
# Table name: shopping_carts
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  product_id :integer          not null
#  quantity   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ShoppingCartItem < ApplicationRecord
    validates :quantity, presence: true 

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product 

end
