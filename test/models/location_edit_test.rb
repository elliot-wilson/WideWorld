# == Schema Information
#
# Table name: location_editors
#
#  id          :bigint           not null, primary key
#  editor_id   :integer          not null
#  location_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class LocationEditorTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
