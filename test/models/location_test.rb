# == Schema Information
#
# Table name: locations
#
#  id                :bigint           not null, primary key
#  title             :string           not null
#  summary           :string(280)      not null
#  address           :string           not null
#  lat               :float
#  lng               :float
#  description       :text             not null
#  additional_info   :text
#  official_website  :string
#  initial_author_id :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
require 'test_helper'

class LocationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
