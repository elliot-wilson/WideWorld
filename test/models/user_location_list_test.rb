# == Schema Information
#
# Table name: user_location_lists
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string
#  author_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class UserLocationListTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
