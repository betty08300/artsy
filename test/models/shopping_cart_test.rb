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

require 'test_helper'

class ShoppingCartTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
