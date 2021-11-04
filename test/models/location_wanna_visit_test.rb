# == Schema Information
#
# Table name: location_wanna_visits
#
#  id               :bigint           not null, primary key
#  location_id      :integer          not null
#  wanna_visitor_id :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
require 'test_helper'

class LocationWannaVisitTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
