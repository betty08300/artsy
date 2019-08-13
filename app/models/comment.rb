# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  product_id :integer          not null
#  body       :text             not null
#  rating     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
    validates :body, :rating, :user_id, :product_id, presence: true 
    validates :rating, inclusion: {in:(1..5)}

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User 

    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product 
end
