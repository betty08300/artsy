# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  description :string           not null
#  price       :integer          not null
#  who         :string           not null
#  what        :string           not null
#  when        :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Product < ApplicationRecord
    validates :user_id, :title, :description, :price, :who, :what, :when, presence:true 

    belongs_to :seller,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User 

    has_many_attached :images
end