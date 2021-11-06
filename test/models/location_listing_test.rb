# == Schema Information
#
# Table name: location_listings
#
#  id          :bigint           not null, primary key
#  location_id :integer          not null
#  list_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class LocationListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
